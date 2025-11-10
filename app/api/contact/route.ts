import { NextResponse } from 'next/server';

function validate(body: Record<string, unknown>) {
  const errors: string[] = [];
  const name = String(body.nom_complet || body['nom_complet'] || '').trim();
  const email = String(body.email || '').trim();
  const message = String(body.message || '').trim();
  const phone = String(body.téléphone || body.telephone || '').trim();
  const company = String(body.entreprise || '').trim();
  const service = String(body.service_souhaité || body.service_souhaite || '').trim();

  if (!name) errors.push('Le nom complet est requis.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("L'email est invalide.");
  if (!message || message.length < 10) errors.push('Le message est trop court.');

  return { errors, data: { name, email, message, phone, company, service } };
}

async function sendEmail(data: { name: string; email: string; message: string; phone: string; company: string; service: string }) {
  // Import dynamique de nodemailer
  const nodemailer = await import('nodemailer');
  
  // Configuration du transporteur email
  const transporter = nodemailer.default.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: true, // true pour 465, false pour autres ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Contenu de l'email
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: process.env.SMTP_TO || 'contact@ebagency.fr',
    subject: `Nouveau message de contact - ${data.name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <div style="text-align: center; margin-bottom: 30px;">
            <h1 style="color: #8B4513; font-size: 24px; margin: 0;">Nouveau Message de Contact</h1>
            <p style="color: #666; margin: 10px 0 0 0;">EB Agency - Formulaire de Contact</p>
          </div>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #8B4513; font-size: 18px; margin: 0 0 15px 0;">Informations du Contact</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333; width: 120px;">Nom :</td>
                <td style="padding: 8px 0; color: #666;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email :</td>
                <td style="padding: 8px 0; color: #666;"><a href="mailto:${data.email}" style="color: #8B4513; text-decoration: none;">${data.email}</a></td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Téléphone :</td>
                <td style="padding: 8px 0; color: #666;"><a href="tel:${data.phone}" style="color: #8B4513; text-decoration: none;">${data.phone}</a></td>
              </tr>
              ` : ''}
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Entreprise :</td>
                <td style="padding: 8px 0; color: #666;">${data.company}</td>
              </tr>
              ` : ''}
              ${data.service ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Service :</td>
                <td style="padding: 8px 0; color: #666;">${data.service}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h2 style="color: #8B4513; font-size: 18px; margin: 0 0 15px 0;">Message</h2>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #8B4513;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="color: #666; font-size: 14px; margin: 0;">
              Message envoyé depuis le formulaire de contact EB Agency<br>
              <a href="https://www.ebagency.fr" style="color: #8B4513; text-decoration: none;">www.eb-agency.fr</a>
            </p>
          </div>
        </div>
      </div>
    `,
    text: `
Nouveau message de contact - EB Agency

Informations du contact :
- Nom : ${data.name}
- Email : ${data.email}
${data.phone ? `- Téléphone : ${data.phone}` : ''}
${data.company ? `- Entreprise : ${data.company}` : ''}
${data.service ? `- Service souhaité : ${data.service}` : ''}

Message :
${data.message}

---
Message envoyé depuis le formulaire de contact EB Agency
www.eb-agency.fr
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Erreur inconnue' };
  }
}

export async function POST(req: Request) {
  const contentType = req.headers.get('content-type') || '';
  let body: Record<string, unknown> = {};

  if (contentType.includes('application/json')) {
    body = await req.json();
  } else if (contentType.includes('application/x-www-form-urlencoded')) {
    const formData = await req.formData();
    formData.forEach((v, k) => (body[k] = v.toString()));
  } else {
    // tenter quand même formData pour les formulaires Next
    try {
      const formData = await req.formData();
      formData.forEach((v, k) => (body[k] = v.toString()));
    } catch {}
  }

  const { errors, data } = validate(body);
  if (errors.length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 400 });
  }

  // Envoi de l'email avec Nodemailer
  const emailResult = await sendEmail(data);
  
  if (!emailResult.success) {
    console.error('Erreur envoi email:', emailResult.error);
    return NextResponse.json({ 
      ok: false, 
      errors: ['Erreur lors de l\'envoi du message. Veuillez réessayer.'] 
    }, { status: 500 });
  }

  console.log('Email envoyé avec succès pour:', data.email);

  const url = new URL('/contact?success=1', req.url);
  return NextResponse.redirect(url, { status: 303 });
}