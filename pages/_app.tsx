import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { fixMobileSize } from '../utils/mobile-size-fix';
import * as gtag from '../utils/gtag';

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  useEffect(() => {
    // Mise à niveau taille pour mobile -- vh
    fixMobileSize();
  }, []);
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
