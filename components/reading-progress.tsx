import React, { useContext } from 'react';
import themeContext from '../context/theme-context';

interface Props {
  target: React.RefObject<HTMLDivElement>;
}

const ReadingProgress: React.FC<Props> = ({ target }) => {
  const { isDark } = useContext(themeContext);
  const [readingProgress, setReadingProgress] = React.useState(0);
  const scrollListener = () => {
    if (!target.current) {
      return;
    }

    const element = target.current;
    const totalHeight =
      element.clientHeight - element.offsetTop - window.innerHeight;
    const windowScrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (windowScrollTop === 0) {
      return setReadingProgress(0);
    }

    if (windowScrollTop > totalHeight) {
      return setReadingProgress(100);
    }

    setReadingProgress((windowScrollTop / totalHeight) * 100);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => window.removeEventListener('scroll', scrollListener);
  });

  return (
    <>
      {readingProgress > 0 && (
        <>
          {/* Même couleur dark et light pour le moment */}
          <div
            className={`fixed top-0 h-[5px] ${
              isDark ? 'bg-accent' : 'bg-accent'
            } z-50`}
            style={{ width: `${readingProgress}%` }}
          />
        </>
      )}
    </>
  );
};
export default ReadingProgress;
