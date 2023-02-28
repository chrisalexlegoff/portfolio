import { HeroImage, ListItem, Wrapper, Link } from '../components';
import { aboutSection, author } from '../utils/portfolio';
import { getId } from '../utils/helper';
import { useEffect, useState } from 'react';

const About = () => {
  const { title, img, list } = aboutSection;
  // To avoid hydration error
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <Wrapper id="about">
      <h2 className="heading-secondary">{title}</h2>
      <main className="flex gap-16 items-center lg:items-start flex-col lg:flex-row">
        <div className="space-y-4 lg:w-3/5">
          <p>
            Je m'appelle Christophe Le Goff, un développeur freelance full stack
            javascript, passionné, ouvert à tous les défis.
          </p>
          <p>
            Désireux de partager mes compétences, je suis le fondateur de
            l'agence{' '}
            {/* idk why using Link component here giving hydration failed error */}
            <Link
              href="https://dualdclic.fr/"
              target="_blank"
              className="text-accent"
            >
              DualDclic
            </Link>
            , en collaboration avec{' '}
            <Link
              href="https://sabrina-dossantos.fr/"
              target="_blank"
              className="text-accent"
            >
              Sabrina Dos Santos
            </Link>{' '}
            créatrice de site web et print.
          </p>
          <p>
            Mon objectif actuel est d'augmenter mon champ d'action en apprenant
            le développement mobile - React Native et de trouver un poste à
            distance ou présentiel - hybride dans les Hauts de France.
          </p>

          {list && (
            <>
              <p>{list.title}</p>
              <ul className="text-sm gap-1 grid grid-cols-2 w-2/3">
                {list.items.map((item) => (
                  <ListItem key={getId()}>{item}</ListItem>
                ))}
              </ul>
            </>
          )}
        </div>
        <HeroImage src={img} alt={author.name} />
      </main>
    </Wrapper>
  ) : (
    <></>
  );
};

export default About;
