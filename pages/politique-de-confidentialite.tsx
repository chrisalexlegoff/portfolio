import { SEO } from '../components';
import { Layout } from '../containers';
import PolitiqueDeCookies from '../containers/PolitiqueDeCookies';
import { seoData } from '../utils/portfolio';

const PolitiqueDeConfidentialite = () => {
  return (
    <>
      <SEO {...seoData} />
      <Layout>
        <PolitiqueDeCookies />
      </Layout>
    </>
  );
};

export default PolitiqueDeConfidentialite;
