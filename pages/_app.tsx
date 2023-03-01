import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { fixMobileSize } from '../utils/mobile-size-fix';
import { getCookie } from 'cookies-next';

export default function MyApp({ Component, pageProps }: AppProps) {
  const consent = getCookie('localConsent');
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize();
  }, []);
  return (
    <>
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'analytics_storage': 'denied'
            });
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                      })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER}');`,
        }}
      />
      {consent === true && (
        <Script
          id="consupd"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              gtag('consent', 'update', {
                'ad_storage': 'granted',
                'analytics_storage': 'granted'
              });
            `,
          }}
        />
      )}
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
