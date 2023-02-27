import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { Button, Wrapper } from '../components';
import { heroSection } from '../utils/portfolio';

const Hero = () => {
  const { cta, subtitle, title, tagline, description, specialText } =
    heroSection;
  const el = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (el.current != undefined) {
      const typed = new Typed(el.current, {
        strings: ['Javascript', 'TypeScript'], // Strings to display
        // Speed settings, try diffrent values untill you get good results
        startDelay: 300,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        showCursor: true,
        cursorChar: '_',
        autoInsertCss: true,
        onComplete: function () {
          let cursor = document.querySelector<HTMLElement>('.typed-cursor');
          setTimeout(function () {
            if (cursor != null) {
              cursor.textContent = '.';
              cursor.style.animation = 'none';
            }
          }, 1500);
        },
      });
      // Destropying
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <Wrapper
      id="hero"
      className="min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-12 xs:mt-0"
    >
      <p className="text-sm sm:text-base text-accent font-mono">{subtitle}</p>

      <div className="text-4xl sm:text-7xl font-bold tracking-tighter max-w-5xl">
        <h1 className="text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]">
          {title}
        </h1>
        <h1 className="leading-[1.2]">
          {tagline}
          <span ref={el}></span>
        </h1>
      </div>

      <p className="max-w-xl text-base sm:text-lg">{description}</p>

      <p className="text-xs sm:text-sm font-mono text-accent">{specialText}</p>

      {cta && (
        <Button
          size="lg"
          type="link"
          href={cta?.link ?? '#'}
          className={`mt-5 xs:mt-8 sm:mt-10 ${
            cta.hideInDesktop ? 'md:hidden' : ''
          }`}
          sameTab={cta?.sameTab}
        >
          {cta.title}
        </Button>
      )}
    </Wrapper>
  );
};

export default Hero;
