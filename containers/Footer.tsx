import { Link } from '../components';
import { footerSection } from '../utils/portfolio';
import SocialLinks from './SocialLinks';

const Footer = () => {
  const CurrentDateYear = new Date().getFullYear();
  return (
    <footer className="mx-auto text-center font-mono mb-5 text-xs max-w-2xl">
      <SocialLinks className="flex md:hidden justify-center gap-3 mb-3" />
      <div className="flex justify-center">
        <div className="flex justify-center">
          <p>{CurrentDateYear}</p>
          <p>&nbsp;&copy;&nbsp;</p>
          <Link
            href={footerSection.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition"
          >
            {footerSection.title}
          </Link>
          <p className="md:block hidden">&nbsp;|&nbsp;inspiré par&nbsp;</p>
          <p className="md:hidden block">&nbsp;|&nbsp;</p>
          <Link
            href={footerSection.creator}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition"
          >
            {`${footerSection.titleCreator}`}
          </Link>
        </div>
        <div className="hidden sm:block">
          {' '}
          &nbsp;|&nbsp;
          <Link
            className="text-accent duration-500"
            href="/politique-de-confidentialite"
          >
            politique de confidentialité.
          </Link>
        </div>
      </div>{' '}
      <div className="sm:hidden block mt-6">
        <Link
          className="text-accent duration-500"
          href="/politique-de-confidentialite"
        >
          - politique de confidentialité -
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
