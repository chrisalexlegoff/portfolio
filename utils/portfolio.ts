import {
  ExperienceSectionType,
  HeroSectionType,
  ProjectsSectionType,
} from '../types/sections';
import { resumeFileName } from './config';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks = {
  facebook: 'https://www.facebook.com/christophe.legoff.739',
  instagram: 'https://www.instagram.com/chrisalexlegoff/',
  twitter: 'https://twitter.com/chrisalexlegoff',
  github: 'https://github.com/chrisalexlegoff',
  linkedin: 'https://www.linkedin.com/in/chrisalexlegoff/',
};

export const author = {
  name: 'Christophe Le Goff',
  email: 'contact@christophe-le-goff.com',
};

export const seoData = {
  title: 'Christophe Le Goff | Full-Stack Développeur',
  description:
    'Christophe Le Goff est un développeur freelance full stack spécialisé dans la conception de sites web et applications en javascript - typescript.',
  author: author.name,
  image: `${process.env.NEXT_PUBLIC_URL}/portfolio.png`,
  url: 'https://christophe-le-goff.fr/',
  keywords: [
    'Christophe',
    'Christophe Le Goff',
    '@chrisalexlegoff',
    'chrisalexlegoff',
    'Portfolio',
    'Christophe Portfolio ',
    'Christophe Le Goff Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection = {
  navLinks: [
    { name: 'A propos', url: '/#about' },
    { name: 'Compétences', url: '/#skills' },
    { name: 'Expérience', url: '/#experience' },
    { name: 'Projets', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ],
  cta: {
    title: 'Mon CV',
    url: `/${resumeFileName}`,
  },
};

// Hero Section

export const heroSection: HeroSectionType = {
  subtitle: 'Bonjour, mon nom est',
  title: 'Christophe Le Goff.',
  tagline: 'Conception de sites web et applications en full ',
  description:
    "Je suis un développeur freelance web Full Stack passionné ayant une expérience dans la création de sites web et applications avec les framework React.js, Next.js, ExpressJS, le CMS HeadLess Strapi et l'administration de bases de données.",
  specialText:
    'Actuellement disponible pour un poste à distance ou présentiel - hybride Hauts de France',
  // either button or simple text (information)
  cta: {
    title: 'Voir mon CV',
    link: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// About Section

export const aboutSection = {
  title: 'A propos de moi',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title:
      'Voici quelques framework et outils avec lesquels je travaille en ce moment:',
    items: [
      'NextJs',
      'TailwindCSS',
      'PostgreSQL',
      'Strapi',
      'TypeScript',
      'ReactJs',
    ],
  },
  img: '/christophe-le-goff.jpg',
};

// Skills Section

export const skillsSection = {
  title: 'Mon expertise',
  skills: [
    {
      title: 'Développement frontend',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Construire des applications web avec le framework NextJS (ReactJS)',
        'Construire des sites web responsives avec le framework TailwindCSS',
        'Mise en place du SSR - SSG en optimisant le SEO',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        {
          name: 'html-5',
          icon: 'vscode-icons:file-type-html',
          officialLink: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
        },
        {
          name: 'CSS-3',
          icon: 'vscode-icons:file-type-css',
          officialLink: 'https://developer.mozilla.org/fr/docs/Web/CSS',
        },
        // { name: 'sass', icon: 'vscode-icons:file-type-sass' },
        {
          name: 'javaScript',
          icon: 'vscode-icons:file-type-js-official',
          officialLink: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
        },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
          officialLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'github',
          icon: 'ion:logo-github',
          officialLink: 'https://github.com/',
        },
        // { name: 'python', icon: 'vscode-icons:file-type-python' },
        {
          name: 'nodejs',
          icon: 'logos:nodejs-icon',
          officialLink: 'https://nodejs.org/about/',
        },
        {
          name: 'reactjs',
          icon: 'logos:react',
          officialLink: 'https://fr.reactjs.org/',
        },
        {
          name: 'nextjs',
          icon: 'logos:nextjs-icon',
          officialLink: 'https://nextjs.org/',
        },
        {
          name: 'tailwindcss',
          icon: 'logos:tailwindcss-icon',
          officialLink: 'https://tailwindcss.com/',
        },
        {
          name: 'redux',
          icon: 'logos:redux',
          officialLink: 'https://redux.js.org/',
        },
        // { name: 'database', icon: 'vscode-icons:file-type-sql' },
        // { name: 'jest', icon: 'vscode-icons:file-type-jest' },
      ],
    },
    {
      title: 'Développement backend',
      lottie: {
        light: '/lotties/backend.json',
        dark: '/lotties/backend-dark.json',
      },
      points: [
        "Mise en place d'API RESTful via le 'Headless CMS' Strapi (NodeJs)",
        "Mise en place d'API via le framework ExpressJS (NodeJs)",
        "Développement, test via l'application postman et déploiement",
      ],
      softwareSkills: [
        {
          name: 'strapi',
          icon: 'logos:strapi-icon',
          officialLink: 'https://strapi.io/',
        },
        {
          name: 'nodejs',
          icon: 'logos:nodejs-icon',
          officialLink: 'https://nodejs.org/about/',
        },
        {
          name: 'express',
          icon: 'simple-icons:express',
          officialLink: 'https://expressjs.com/fr/',
        },
        {
          name: 'javaScript',
          icon: 'vscode-icons:file-type-js-official',
          officialLink: 'https://developer.mozilla.org/fr/docs/Web/JavaScript',
        },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
          officialLink: 'https://www.typescriptlang.org/',
        },
        {
          name: 'postman',
          icon: 'logos:postman-icon',
          officialLink: 'https://www.postman.com/',
        },
      ],
    },
    {
      title: 'Base de données',
      lottie: {
        light: '/lotties/database.json',
        dark: '/lotties/database-dark.json',
      },
      points: [
        'Externalisation des données back via SGBDR',
        'Spécialisé manipulation données via PostgreSQL',
        'Gestion complète en ligne de commandes (PSQL)',
      ],
      softwareSkills: [
        {
          name: 'postgresql',
          icon: 'logos:postgresql',
          officialLink: 'https://www.postgresql.org/',
        },
        {
          name: 'mysql',
          icon: 'vscode-icons:file-type-mysql',
          officialLink: 'https://www.mysql.com/fr/',
        },
        {
          name: 'graphql',
          icon: 'vscode-icons:file-type-graphql',
          officialLink: 'https://graphql.org/',
        },
      ],
    },
    {
      title: 'Administration réseaux',
      lottie: {
        light: '/lotties/vps-servers.json',
        dark: '/lotties/vps-servers-dark.json',
      },
      points: [
        'Mise en place de serveur non gérés de A à Z',
        "Déploiement d'applications web via PM2 (NodeJs) - Nginx",
        'Gestion complète à distance en lignes de commandes (linux)',
      ],
      softwareSkills: [
        {
          name: 'linux',
          icon: 'flat-color-icons:linux',
          officialLink: 'https://fr.wikipedia.org/wiki/Linux',
        },
        {
          name: 'arch-linux',
          icon: 'file-icons:arch-linux',
          officialLink: 'https://archlinux.fr/',
        },
        {
          name: 'réseau',
          icon: 'mdi:server-network',
          officialLink: 'https://fr.wikipedia.org/wiki/Serveur_informatique',
        },
        {
          name: 'nodejs',
          icon: 'logos:nodejs-icon',
          officialLink: 'https://nodejs.org/about/',
        },
        {
          name: 'pm2',
          icon: 'logos:pm2-icon',
          officialLink: 'https://pm2.keymetrics.io/',
        },
        {
          name: 'nginx',
          icon: 'logos:nginx',
          officialLink: 'https://www.nginx.com/',
        },
      ],
    },
  ],
};

// Experience Section

export const experienceSection: ExperienceSectionType = {
  title: "J'y ai travaillé",
  experiences: [
    {
      company: 'DualDclic',
      companyUrl: 'https://dualdclic.fr/',
      role: 'Développeur | fondateur',
      started: 'juin 2021',
      upto: "Aujourd'hui",
      tasks: [
        "Fondateur de l'agence dualdclic, spécialisée dans la création d'applications web et de visuels.",
        'Développeur full stack en collaboration avec une designer.',
        'éventail complet, full code ou CMS (WordPress).',
        "Travail en équipe à distance, à l'écoute et désireuse de satisfaire les clients.",
      ],
    },
    {
      company: 'Adapeco',
      companyUrl: 'https://adapeco.com/',
      role: 'Formateur digital',
      started: 'Juillet 2021',
      upto: 'Décembre 2021',
      tasks: [
        'Formateur pour adultes.',
        'Préparation du Titre Professionnel Concepteur(trice) Développeur(se) d’Applications.',
        'Préparation du Titre Professionnel Concepteur(trice) Designer(euse) UI (User Interface).',
      ],
    },
    {
      company: 'Insy2s',
      companyUrl: 'https://insy2s.com/',
      role: 'Développeur front',
      started: 'Mars 2021',
      upto: 'Juin 2021',
      tasks: [
        'Développeur Javascript ReactJS.',
        "Testing et refonte d'une application de gestion administrative pour les cartes grises.",
        'Travail en methode Agile complet.',
      ],
    },
    {
      company: 'Min. Armées',
      companyUrl: 'https://www.defense.gouv.fr/',
      role: 'Chef de centre | formateur',
      started: 'Janvier 2000',
      upto: 'Septembre 2020',
      tasks: [
        'Responsable du parc informatique.',
        'Formateur de moniteurs.',
        'Gestion de personnels, véhicules et infrastructure.',
        'Insertion de jeunes de 18 à 25 ans en décrochage scolaire et/ou social.',
      ],
    },
  ],
};

// Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'Mes projets',
  projects: [
    {
      name: 'DualDclic',
      url: 'https://dualdclic.fr/',
      repo: 'https://github.com/chrisalexlegoff/dualdclic.fr',
      img: `/dualdclic.webp`,
      year: 2022,
      tags: ['Strapi', 'Tailwind', 'NextJS'],
    },
    {
      name: 'Lilou Snow | en cours',
      url: 'https://lilousnow.fr/',
      repo: 'https://github.com/chrisalexlegoff/LilouSnow-Front',
      img: `/lilousnow.png`,
      year: 2023,
      tags: ['NextJs', 'Strapi', 'Tailwind'],
    },
    {
      name: 'Portfolio',
      url: 'https://christophe-le-goff.fr/',
      repo: 'https://github.com/chrisalexlegoff/portfolio',
      img: `/portfolio.png`,
      year: 2023,
      tags: ['Nextjs', 'Tailwind'],
    },
  ],
};

// Contact Section

export const contactSection = {
  title: 'Entrez en contact',
  subtitle: 'Qui est le suivant',
  paragraphs: [
    "Je suis actuellement à la recherche d'un poste à distance, présentiel - hybride dans les Hauts de France ou de nouvelles opportunités.",
    "Que vous ayez un projet à mettre en place ou que vous souhaitiez simplement dire bonjour, n'hésitez pas !",
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'lucide:twitter',
      url: socialLinks.twitter,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
    {
      icon: 'lucide:facebook',
      url: socialLinks.facebook,
    },
  ],
};

// Footer Section

export const footerSection = {
  title: 'Christophe Le Goff',
  titleCreator: 'Vatsal Singh',
  link: 'https://github.com/chrisalexlegoff/portfolio',
  creator: 'https://github.com/vatsalsinghkv/portfolio-website',
};
