import React, { useContext, useEffect, useState } from 'react';

import { setCookie, hasCookie } from 'cookies-next';
import Button from './Button';
import Link from './Link';
import themeContext from '../context/theme-context';

function Consent() {
  const [consent, setConsent] = useState(true);
  const { isDark } = useContext(themeContext);
  useEffect(() => {
    setConsent(hasCookie('localConsent'));
  }, []);

  const acceptCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'true', { maxAge: 60 * 60 * 24 * 365 });
    gtag('consent', 'update', {
      ad_storage: 'granted',
      analytics_storage: 'granted',
    });
  };
  const closeP = () => {
    setConsent(true);
  };
  const denyCookie = () => {
    setConsent(true);
    setCookie('localConsent', 'false', { maxAge: 60 * 60 * 24 * 365 });
  };
  if (consent === true) {
    return null;
  }
  return (
    <div
      className={`fixed bottom-0 w-screen p-3 ${
        isDark ? 'dark' : ''
      } text-sm sm:text-base bg-dark-1 ${consent ? 'hidden' : ''}`}
    >
      <div className="flex flex-col text-center">
        <div
          className={`${
            isDark ? 'dark' : ''
          } text-dark-3 flex flex-col sm:flex-row justify-center items-center`}
        >
          <p>Ce site utilise des cookies pour le suivi et&nbsp;</p>
          <br className="hidden sm:block" />{' '}
          <p>
            l'analyse du traffic. Lien vers la{' '}
            <Link
              className="text-accent duration-500"
              href="/politique-de-confidentialite"
            >
              politique de confidentialité.
            </Link>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row my-6 items-center justify-around">
          <Button
            onClick={(e) => denyCookie()}
            className="hidden sm:block h-[fit-content] min-w-[150px]"
          >
            Tout refuser
          </Button>
          <Button
            onClick={() => {
              acceptCookie();
            }}
            className="h-[fit-content] min-w-[150px] mb-6 sm:my-0"
          >
            Tout accepter
          </Button>
          <Button
            onClick={(e) => denyCookie()}
            className="block sm:hidden mb-6 h-[fit-content] min-w-[150px]"
          >
            Tout refuser
          </Button>
          <Button
            onClick={(e) => {
              closeP();
            }}
            className="h-[fit-content] min-w-[150px]"
          >
            Fermer
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Consent;
