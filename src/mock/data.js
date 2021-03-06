import { nanoid } from 'nanoid';

// HERO DATA
export const heroData = {
    name: 'Yves Molina',
    status: 'Développeur web et mobile',
  };
  
  // ABOUT DATA
export const aboutData = {
    img: 'profile.jpg',
    paragraphOne: 'Je suis actuellement en formation professionnalisante à "LDNR Formations" pour obtenir un titre professionnel de niveau III Développeur Web et Web mobile. Je poursuis mes études en Pré-Msc à Epitech dès Septembre 2021, et je recherche une Alternance à partir de Janvier 2022.',
    paragraphTwo: 'Je vais suivre un stage de développement web de juin à août 2021. Cette première expérience professionnelle en entreprise me permettra de rejoindre une équipe agile et mettre en application mes acquis et les enrichir au travers de missions techniques.',
    resume: 'https://drive.google.com/file/d/1Tp8XmUnywjwgN3ArAbFY-fcfdG7NChP4/view',
    projects: 'Projets',
  };
  
  // PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Portfolio Gatsby/React.js',
    info: 'Site vitrine monopage présentant mon parcours, mes objectifs professionnels et mes projets.',
    info2: 'Site web créé avec Gatsby JS, stylisé avec Boostrap v4.6 et du SCSS personnalisé. La vitesse de chargement de la page et des images est optimisée par la gestion de fichiers gatsby.\n Site 100% responsive.',
    url: 'https://ymolina.com/',
    repo: 'https://github.com/YvesMolina/Portfolio',
  },
  /* Free space for future projects to come... (My next work in progress is a Java Financial Web application !)
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/YvesMolina',
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/YvesMolina/PortFolio',
  },*/
];

// CONTACT DATA
export const contactData = {
  cta: 'Vous souhaitez travailler avec moi ? N\'hésitez pas, contactez moi !',
  btn: 'YvesTMolina@gmail.com',
  email: 'yvestmolina@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/yves-molina/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/YvesMolina',
    },
  ],
};
