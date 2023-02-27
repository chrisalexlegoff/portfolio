import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { ThemeProvider } from '../context/theme-context';
import '../styles/globals.css';
import { fixMobileSize } from '../utils/mobile-size-fix';

export default function MyApp({ Component, pageProps }: AppProps) {
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
