import { createContext } from 'react';
import { IJob } from '../components/types/types';

interface ISkill {
  iconPrefix: string,
  icon: string,
  value: string,
};

interface IPersonalDetail extends ISkill {
  url?: string;
}

interface ITrainings {
  title: string;
  iconPrefix: string;
  icon: string;
  certified: boolean;
}

interface IEducation {
  startDate: string,
  endDate: string,
  university: string;
  degree: string;
  field: string;
};

interface IDataProvider {
  personalInfo: {
    profileImage: string;
    fullName: string;
    titles: string[];
    details: IPersonalDetail[];
    skills: {
      softSkills: string[];
      cloudSkills: ISkill[];
      frontEndSkills: ISkill[];
      backEndSkills: ISkill[];
      devOpsSkills: ISkill[];
      tools: ISkill[];
      os: ISkill[];
      languages: string[];
    }
  },
  trainings: ITrainings[];
  summary: string;
  eductaion: IEducation[];
  jobs: IJob[];
}

export const DataContext = createContext<IDataProvider>(undefined!);

export const DataContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const contextValue: IDataProvider = {
    personalInfo: {
      profileImage: 'profile_image.png',
      fullName: 'Vakho Papidze',
      titles: ['Full-Stack Developer', 'Tech Lead', 'Software Architect',],
      details: [
        {
          iconPrefix: 'fas',
          icon: 'location-dot',
          value: 'Tbilisi, Georgia',
        },
        {
          iconPrefix: 'fas',
          icon: 'house',
          value: 'G. Danelia st. #2, 0186',
        },
        {
          iconPrefix: 'fas',
          icon: 'cake-candles',
          value: '10 February, 1991',
        },
        {
          iconPrefix: 'fas',
          icon: 'phone',
          value: '+995 558 402 266',
        },
        {
          iconPrefix: 'fas',
          icon: 'envelope',
          value: 'v.papidze@live.com',
          url: 'mailto:v.papidze@live.com',
        },
        {
          iconPrefix: 'fab',
          icon: 'github',
          value: '@vpapidze',
          url: 'https://github.com/vpapidze',
        },
        {
          iconPrefix: 'fab',
          icon: 'linkedin',
          value: 'https://www.linkedin.com/in/vakhopapidze/',
          url: 'https://www.linkedin.com/in/vakhopapidze/',
        }
      ],
      skills: {
        softSkills: ['Leadership', 'Time Management', 'Problem Solving', 'Communication', 'Teamwork', 'Critical Thinking', 'Collaboration', 'Project Management', 'Flexibility'],
        cloudSkills: [
          {
            iconPrefix: 'fab',
            icon: 'amazon',
            value: 'AWS IAM',
          },
          {
            iconPrefix: 'fab',
            icon: 'amazon',
            value: 'TODO...',
          },
          {
            iconPrefix: 'fas',
            icon: 'g',
            value: 'Firebase',
          },
          {
            iconPrefix: 'fas',
            icon: 'cloud',
            value: 'DigitalOcean',
          }
        ],
        frontEndSkills: [
          {
            iconPrefix: 'fab',
            icon: 'js',
            value: 'javaScript',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Typescript',
          },
          {
            iconPrefix: 'fab',
            icon: 'react',
            value: 'React',
          },
          {
            iconPrefix: 'fab',
            icon: 'react',
            value: 'Redux',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'GraphQL',
          },
          {
            iconPrefix: 'fab',
            icon: 'html5',
            value: 'HTML',
          },
          {
            iconPrefix: 'fab',
            icon: 'css3',
            value: 'CSS',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Jest',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Karma',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Jasmine',
          },
          {
            iconPrefix: 'fab',
            icon: 'scss',
            value: 'SCSS',
          },
          {
            iconPrefix: 'fab',
            icon: 'twitter',
            value: 'Twitter Bootstrap',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Material UI',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Unit Testing',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Integration Testing',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Web Components',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'StensilJS',
          },
          {
            iconPrefix: 'fab',
            icon: 'js',
            value: 'ExtJs',
          },
          {
            iconPrefix: 'fab',
            icon: 'js',
            value: 'jQuery',
          },
        ],
        backEndSkills: [
          {
            iconPrefix: 'fab',
            icon: 'node',
            value: 'nodejs',
          },
          {
            iconPrefix: 'fab',
            icon: 'js',
            value: 'GraphQL',
          },
          {
            iconPrefix: 'fas',
            icon: 'a',
            value: 'Apollo Server',
          },
          {
            iconPrefix: 'fas',
            icon: 'p',
            value: 'prisma',
          },
          {
            iconPrefix: 'fab',
            icon: 'google',
            value: 'gRPC',
          },
          {
            iconPrefix: 'fas',
            icon: 'database',
            value: 'Redis',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'RabitMQ',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'C#',
          },
          {
            iconPrefix: 'fab',
            icon: 'windows',
            value: 'ASP.net',
          },
          {
            iconPrefix: 'fas',
            icon: 'database',
            value: 'T-SQL',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Integration Testing',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'Unit Testing',
          },
          {
            iconPrefix: 'fab',
            icon: 'windows',
            value: 'MS SQL Server',
          },
          {
            iconPrefix: 'fas',
            icon: 'database',
            value: 'MySQL',
          },
          {
            iconPrefix: 'fas',
            icon: 'database',
            value: 'PostgreSQL',
          },
        ],
        devOpsSkills: [
          {
            iconPrefix: 'fab',
            icon: 'jenkins',
            value: 'CI/CD',
          },
          {
            iconPrefix: 'fab',
            icon: 'docker',
            value: 'Docker',
          },
          {
            iconPrefix: 'fab',
            icon: 'docker',
            value: 'Docker Compose',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'NGINX',
          },
        ],
        tools: [
          {
            iconPrefix: 'fab',
            icon: 'github',
            value: 'Github',
          },
          {
            iconPrefix: 'fab',
            icon: 'bitbucket',
            value: 'BitBucket',
          },
          {
            iconPrefix: 'fab',
            icon: 'jenkins',
            value: 'Jenkins',
          },
          {
            iconPrefix: 'fab',
            icon: 'jira',
            value: 'Jira',
          },
          {
            iconPrefix: 'fab',
            icon: 'docker',
            value: 'Docker Compose',
          },
          {
            iconPrefix: 'fas',
            icon: 'p',
            value: 'Postman',
          },
          {
            iconPrefix: 'fab',
            icon: 'windows',
            value: 'Team Fundation Server',
          },
          {
            iconPrefix: 'fab',
            icon: 'gitlab',
            value: 'GitLab',
          },
          {
            iconPrefix: 'fas',
            icon: 'b',
            value: 'Browserstack',
          },
          {
            iconPrefix: 'fab',
            icon: 'git',
            value: 'Git',
          },
          {
            iconPrefix: 'fab',
            icon: 'figma',
            value: 'Figma',
          },
          {
            iconPrefix: 'fas',
            icon: 's',
            value: 'Storybook',
          },
          {
            iconPrefix: 'fas',
            icon: '',
            value: 'linear',
          },
        ],
        os: [
          {
            iconPrefix: 'fab',
            icon: 'macos',
            value: 'MacOS',
          },
          {
            iconPrefix: 'fab',
            icon: 'windows',
            value: 'Windows',
          },
          {
            iconPrefix: 'fab',
            icon: 'linux',
            value: 'Linux',
          },
        ],
        languages: ['English', 'Georgian', 'Russian'],
      }
    },
    trainings: [
      {
        title: 'Ultimate AWS Certified Cloud Practitioner',
        icon: 'amazon',
        iconPrefix: 'fab',
        certified: false,
      },
      {
        title: 'Next.js 14 & React - The Complete Guide',
        icon: 'js',
        iconPrefix: 'fab',
        certified: true,
      },
      {
        title: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
        icon: 'node',
        iconPrefix: 'fab',
        certified: true,
      },
      {
        title: 'React - The Complete Guide 2024 (incl. React Router & Redux)',
        icon: 'react',
        iconPrefix: 'fab',
        certified: true,
      },
      {
        title: 'React Testing with Jest and Enzyme',
        icon: 'react',
        iconPrefix: 'fab',
        certified: true,
      },
      {
        title: 'Web Components & Stencil.js - Build Custom HTML Elements',
        icon: 'w',
        iconPrefix: 'fas',
        certified: true,
      },
    ],
    summary: 'Experienced Senior Software developer with a demonstrated history of working with international teams. Profcient in an assortment of technologies, including: javascript, Typescript, React.js, node.js, GraphQL, c#, SQL, noSQL and others.',
    eductaion: [
      {
        startDate: '2014',
        endDate: '2016',
        university: 'Tbilis State University',
        degree: 'Bachelor',
        field: 'Computer Science',
      },
      {
        startDate: '2009',
        endDate: '2013',
        university: 'Georgian Techinical University',
        degree: 'Masters',
        field: 'Computer Science',
      },
    ],
    jobs: [
      {
        startDate: 'Mar 2022',
        endDate: 'Present',
        company: 'Layerise',
        title: 'Full-stack Software Developer',
        location: 'remote',
        projects: [{
          title: 'Layerise',
          description: 'The customer registration & loyalty platform for consumer brands',
          responsibilities: ['Working on SaaS application, The customer registration & loyalty platform for consumer brands.', 'Designed and developed complex front-end features using modern web development libraries and tools such as React, Typescript, GraphQL, node.js, prisma.', 'Conducted regular code reviews and provided feedback to ensure high-quality code and adherence to coding standards.', 'Collaborated with product managers, designers, and back-end developers to ensure seamless integration of front-end components into dependent distributed services.'],
          url: 'string',
        }],
        technologies: [
          {
            icon: ['fab', 'react'],
            value: 'react',
          },
          {
            icon: ['fab', 'js'],
            value: 'Typescript',
          },
          {
            icon: ['fab', 'node'],
            value: 'node.js',
          },
          {
            value: 'GraphQL',
          },
          {
            value: 'Prisma',
          },
          {
            icon: ['fas', 'database'],
            value: 'node.js',
          }
        ],
      },
      // add more 
    ],
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
};
