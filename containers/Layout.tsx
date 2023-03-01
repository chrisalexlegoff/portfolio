import React from 'react';
import { ReadingProgress } from '../components';
import Consent from '../components/consent';
import Email from './Email';
import Footer from './Footer';
import Navbar from './Navbar';
import Social from './Social';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Layout = ({ children, className = '' }: Props) => {
  const target = React.createRef<HTMLDivElement>();
  return (
    <div ref={target}>
      <Navbar />
      <ReadingProgress target={target} />
      <main
        className={`mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`}
      >
        {children}
      </main>
      <Footer />
      <Social />
      <Email />
      <Consent />
    </div>
  );
};

export default Layout;
