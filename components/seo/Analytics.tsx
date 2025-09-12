import Script from 'next/script';

interface AnalyticsProps {
  googleAnalyticsId?: string;
  googleTagManagerId?: string;
  facebookPixelId?: string;
}

export function Analytics({ 
  googleAnalyticsId, 
  googleTagManagerId, 
  facebookPixelId 
}: AnalyticsProps) {
  return (
    <>
      {/* Google Analytics */}
      {googleAnalyticsId && (
        <>
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
                page_title: document.title,
                page_location: window.location.href,
              });
            `}
          </Script>
        </>
      )}

      {/* Google Tag Manager */}
      {googleTagManagerId && (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${googleTagManagerId}');
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        </>
      )}

      {/* Facebook Pixel */}
      {facebookPixelId && (
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${facebookPixelId}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}

// Hook pour le tracking des événements
export function useAnalytics() {
  const trackEvent = (eventName: string, parameters?: Record<string, unknown>) => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag('event', eventName, parameters);
    }
    
    if (typeof window !== 'undefined' && (window as unknown as { fbq?: (command: string, eventName: string, parameters?: Record<string, unknown>) => void }).fbq) {
      (window as unknown as { fbq: (command: string, eventName: string, parameters?: Record<string, unknown>) => void }).fbq('track', eventName, parameters);
    }
  };

  const trackPageView = (url: string) => {
    if (typeof window !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID && (window as unknown as { gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag) {
      (window as unknown as { gtag: (command: string, targetId: string, config?: Record<string, unknown>) => void }).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  };

  const trackContactForm = (formType: string) => {
    trackEvent('contact_form_submit', {
      form_type: formType,
      page_location: window.location.href,
    });
  };

  const trackServiceView = (serviceName: string) => {
    trackEvent('service_view', {
      service_name: serviceName,
      page_location: window.location.href,
    });
  };

  const trackPricingView = (packageName: string) => {
    trackEvent('pricing_view', {
      package_name: packageName,
      page_location: window.location.href,
    });
  };

  return {
    trackEvent,
    trackPageView,
    trackContactForm,
    trackServiceView,
    trackPricingView,
  };
}
