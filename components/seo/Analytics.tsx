import Script from 'next/script';

interface AnalyticsProps {
  googleAnalyticsId?: string;
}

export function Analytics({ googleAnalyticsId }: AnalyticsProps) {
  // Ne rien afficher si l'ID n'est pas configuré
  if (!googleAnalyticsId) {
    return null;
  }

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAnalyticsId}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
          });
        `}
      </Script>
    </>
  );
}

// Hook pour le tracking des événements
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window === 'undefined') return;

    // Google Analytics
    if ((window as unknown as { gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag('event', eventName, parameters);
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window === 'undefined' || !process.env.NEXT_PUBLIC_GA_ID) return;
    
    if ((window as unknown as { gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  };

  const trackContactForm = (formType: string, service?: string) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
      service: service || 'general',
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      service_name: serviceName,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  const trackPropertyView = (propertyId: string, propertyType: string) => {
    trackEvent('property_view', {
      property_id: propertyId,
      property_type: propertyType,
      page_location: typeof window !== 'undefined' ? window.location.href : '',
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackContactForm,
    trackServiceView,
    trackPropertyView,
  };
}
