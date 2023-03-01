import { Html, Head, Main, NextScript } from 'next/document';
import { Favicon } from '../containers';

export default function Document() {
  return (
    <Html className="scroll-smooth select-none" lang="fr">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <Favicon />
        <script src="/no-flash.js"></script>
      </Head>
      <body className="text-text bg-bg">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
