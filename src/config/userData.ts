import { IDataProvider } from "../types/types";
import { profileImage } from "./images";

export const userData: IDataProvider = {
  personalInfo: {
    profileImage: profileImage,
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
        value: '@vakhopapidze',
        url: 'https://www.linkedin.com/in/vakhopapidze/',
      }
    ],
    skills: {
      softSkills: ['Leadership', 'Time Management', 'Problem Solving', 'Communication', 'Teamwork', 'Critical Thinking', 'Collaboration', 'Project Management', 'Flexibility'],
      cloudSkills: [
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS IAM' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS EC2' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS AMI' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS EBS' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS Lambda' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS API Gateway' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS RDS' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS S3' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS CloudFront' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS Cognito' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS Route53' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS DynamoDB' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS CloudWatch' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS CLI' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS SDK' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS EFS' },
        { iconPrefix: 'fab', icon: 'amazon', value: 'AWS ELB' },
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
          icon: 'sass',
          value: 'SASS',
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
      mobileSkills: [
        {
          iconPrefix: 'fab',
          icon: 'react',
          value: 'React native',
        },
        {
          iconPrefix: 'fas',
          icon: '',
          value: 'Expo',
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
          icon: 'apple',
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
      title: 'React Native - The Practical Guide',
      icon: 'react',
      iconPrefix: 'fab',
      certified: true,
    },
    {
      title: 'Ultimate AWS Certified Solutions Architect Associate SAA-C03',
      icon: 'amazon',
      iconPrefix: 'fab',
      certified: true,
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
      startDate: 'Jun 2024',
      endDate: 'Present',
      company: 'Dancodesit(Denmark)',
      title: 'Tech Lead / Full-stack Developer',
      location: 'remote',
      projects: [{
        title: 'Ryano Taxi application',
        description: 'Developing an internal taxi-style mobile app designed to track drivers\' locations, routes, and crew pickups/drop-offs in real time. This solution includes an admin panel for dispatchers, allowing them to efficiently monitor and manage driver activities, optimize routes, and ensure smooth coordination of pickups and drop-offs for the team.',
        responsibilities: [
          'Architect and develop scalable API and database services with a focus on high performance and low latency.',
          'Design resilient, fault-tolerant systems using microservices, cloud infrastructure, and distributed systems.',
          'Implement load balancing, and monitoring to ensure high availability and reliability.',
          'Designing, developing, and maintaining web and mobile applications using React and React Native',
          'Troubleshooting and debugging issues to ensure optimal performance',
          'Participating in code reviews and providing constructive feedback',
          'Mentoring junior developers and helping them grow their skills',
          'Working closely with designers and project managers to deliver high-quality products on time.',
        ],
        url: '',
      }],
      technologies: [
        {
          icon: ['fab', 'js'],
          value: 'Nest.js',
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
          value: 'Redis',
        },
        {
          icon: ['fas', 'database'],
          value: 'PostgreSQL',
        },
        {
          icon: ['fab', 'react'],
          value: 'Next.js',
        },
        {
          icon: ['fab', 'react'],
          value: 'react',
        },
        {
          icon: ['fab', 'react'],
          value: 'react-native',
        },
      ],
    },
    {
      startDate: 'Mar 2022',
      endDate: 'Jun 2024',
      company: 'Layerise',
      title: 'Full-stack Software Developer',
      location: 'remote',
      projects: [{
        title: 'Layerise',
        description: 'The customer registration & loyalty platform for consumer brands',
        responsibilities: ['Working on SaaS application, The customer registration & loyalty platform for consumer brands.', 'Designed and developed complex front-end features using modern web development libraries and tools such as React, Typescript, GraphQL, node.js, prisma.', 'Conducted regular code reviews and provided feedback to ensure high-quality code and adherence to coding standards.', 'Collaborated with product managers, designers, and other developers to ensure seamless integration of front-end components into dependent distributed services.'],
        url: '',
      }],
      technologies: [
        {
          icon: ['fab', 'react'],
          value: 'react',
        },
        {
          icon: ['fab', 'react'],
          value: 'react-native',
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
          value: 'PostgreSQL',
        },
        {
          icon: ['fab', 'figma'],
          value: 'Figma',
        }
      ],
    },
    {
      startDate: 'Sep 2021',
      endDate: 'Feb 2022',
      company: 'Better Collective',
      title: 'Front-end Developer',
      location: 'remote',
      projects: [{
        title: 'Sportsbook ADS managment tool',
        responsibilities: ['Develop proiect from scratch for top-notch dynamic web components', 'Writing unit/e2e tests', 'Creating reusable, pixel-perfect components with StencilJs', 'Creating communication bridge between dynamic components and Back-end services', 'Code reviews']
      }],
      technologies: [
        {
          icon: ['fab', 'js'],
          value: 'Typescript',
        },
        {
          icon: ['fab', 'js'],
          value: 'StensilJs',
        },
        {
          value: 'Web Components',
        },
        {
          icon: ['fab', 'html5'],
          value: 'HTML',
        },
        {
          icon: ['fab', 'css3'],
          value: 'CSS',
        },
      ],
    },
    {
      startDate: 'Apr 2021',
      endDate: 'Dec 2022',
      company: 'Valor Software',
      title: 'Full-stack Developer',
      location: 'remote',
      projects: [{
        title: 'Terminus Website Chat',
        description: 'Website chat allows site visitors to chat with company representatives just by activating the chat window available on the site. Typically, this window starts out as an icon at one of the lower corners of the screen, and expands when the icon is clicked.',
        responsibilities: [
          "Work as a contractor on the client's website chat application.",
          "Add new features to the chat and chat bot management system.",
          "Implement new AWS Lambda functions.",
          "Incorporate gRPC methods for adding and updating functionality.",
          "Conduct unit testing using Jest and React Testing Library.",
          "Architect and deploy new microservices, enriching the application's architecture and paving the way for future scalability.",
          "Address bug fixes and perform code reviews."
        ],
        url: 'https://terminus.com/website-chat/',
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
          icon: ['fas', 'database'],
          value: 'MySQL',
        },
        {
          icon: ['fab', 'google'],
          value: 'gRPC',
        },
        {
          icon: ['fab', 'amazon'],
          value: 'AWS Lambda',
        },
        {
          icon: ['fab', 'amazon'],
          value: 'AWS DynamoDB',
        },
        {
          icon: ['fab', 'amazon'],
          value: 'AWS EBS',
        }
      ],
    },
    {
      startDate: 'Jul 2017',
      endDate: 'Feb 2021',
      company: 'Aurea Software',
      title: 'Front-end Developer',
      location: 'remote',
      projects: [
        {
          title: 'Advanced Ideation feature',
          description: 'Developing new features for B2B software - "Jive software", such are Theme, Plugins, Tiles and etc. Setup CI/CD pipeline and Testing environment',
          responsibilities: [
            "Create UI Application using React.js + Redux.",
            "Develop Idea Form builder and Idea Management Page.",
            "Design and implement Idea List monitoring Page and related functionalities.",
            "Conduct regular code reviews for team members who are not React experts and provide constructive feedback.",
            "Coach non-React expert team members on best practices to achieve better results in their pull requests (PRs).",
            "Prepare CI/CD pipelines in Jenkins."
          ],
        },
        {
          title: 'Mega Menu feature',
          responsibilities: [
            "Create Configuration page for Menu: General settings page, Main Navigation, and dropdown menu layout settings page.",
            "Develop Nested menu items creation page (4 levels).",
            "Design Nested dropdown menu layout.",
            "Add Accessibility features.",
            "Optimize code for old browsers.",
            "Prepare CI/CD pipelines in Jenkins."
          ],
        },
        {
          title: 'Forms and Surveys App',
          responsibilities: [
            "Update legacy software UI from CSS to SCSS.",
            "Update legacy software UI from HTML to HTML5.",
            "Make old software (only IE compatible) compatible with modern browsers using JavaScript.",
            "Integrate new APIs."
          ],
        }
      ],
      technologies: [
        {
          icon: ['fab', 'angular'],
          value: 'Angular'
        },
        {
          icon: ['fab', 'react'],
          value: 'React.js'
        },
        {
          icon: ['fab', 'react'],
          value: 'Redux'
        },
        {
          icon: ['fas', 'js'],
          value: 'Typescript'
        },
        {
          icon: ['fab', 'jenkins'],
          value: 'Jenkins'
        },
        {
          value: 'Maven'
        },
        {
          icon: ['fab', 'java'],
          value: 'Java'
        },
        {
          icon: ['fas', 'database'],
          value: 'PostgreSQL'
        },
      ],
    },
    {
      startDate: 'Oct 2015',
      endDate: 'Jan 2017',
      company: 'English Book Georgia',
      title: 'Team Lead',
      location: 'remote',
      projects: [{
        title: 'Intranet aplication for university students',
        responsibilities: [
          "Develop the Application Architecture.",
          "Coordinate with the project manager for effective communication.",
          "Design and implement the frontend of the site using AngularJS, jQuery, and underscore.js.",
          "Develop the backend and web services.",
          "Implement OAuth2 services for enhanced security.",
          "Design the Database Architecture.",
          "Conduct thorough testing of the application and oversee bug fixes.",
          "Perform bug fixes and conduct further testing using NUnit, Karma, and Jasmine.",
        ],
      }],
      technologies: [
        {
          icon: ['fab', 'angular'],
          value: 'Angular'
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
          icon: ['fas', 'database'],
          value: 'MSSQL',
        },
        {
          icon: ['fas', 'database'],
          value: 'Redis',
        },
        {
          value: 'RabbitMQ',
        },
      ],
    },
    {
      startDate: 'Jan 2016',
      endDate: 'Aug 2017',
      company: 'Betlive',
      title: 'Full-stack Developer',
      location: 'onsite',
      projects: [{
        title: 'Online Sportsbook',
        description: 'Online sportsbook is a website or platform that allows users to place bets on various sports events. These platforms provide a convenient way for sports enthusiasts to wager on their favorite teams or players.',
        responsibilities: ['Designed ASP.NET/MVC architecture for sportsbook web and mobile versions. Established server-side layers for seamless data retrieval, transmission, and storage.', 'Implemented SignalR with web sockets and long polling for real-time updates.', 'Ensured dynamic client-side updates for different data types.', 'Retrieved data from MSSQL/NoSQL (Redis/RabbitMQ) and transmitted it to the client using SignalR.', 'Conducted bug fixes and app testing using NUnit, QUnit, and Jasmine.', 'Implement Micro Services using C# & RabbitMQ', 'Implement Cache server using Redis'],
        url: 'https://www.betlive.com/',
      }],
      technologies: [
        {
          icon: ['fab', 'angular'],
          value: 'Angular'
        },
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
          icon: ['fas', 'database'],
          value: 'MSSQL',
        },
        {
          value: 'C#',
        },
        {
          value: 'ASP.NET',
        },
        {
          icon: ['fas', 'database'],
          value: 'Redis',
        },
        {
          value: 'RabbitMQ',
        },
      ],
    },
    {
      startDate: 'Mar 2013',
      endDate: 'Jan 2016',
      company: 'Europebet (Steady Logic)',
      title: 'Full-stack Developer',
      location: 'onsite',
      projects: [
        {
          title: 'Online Sportsbook',
          description: 'Online sportsbook is a website or platform that allows users to place bets on various sports events. These platforms provide a convenient way for sports enthusiasts to wager on their favorite teams or players.',
          responsibilities: ['Designed ASP.NET/MVC architecture for sportsbook web and mobile versions. Established server-side layers for seamless data retrieval, transmission, and storage.', 'Implemented SignalR with web sockets and long polling for real-time updates.', 'Ensured dynamic client-side updates for different data types.', 'Retrieved data from MSSQL/NoSQL (Redis/RabbitMQ) and transmitted it to the client using SignalR.', 'Conducted bug fixes and app testing using NUnit, QUnit, and Jasmine.', 'Implement Micro Services using C# & RabbitMQ', 'Implement Cache server using Redis'],
          url: 'https://www.europebet.com',
        },
        {
          title: 'Keno',
          description: 'Keno is a popular gambling game that is often played in casinos, as well as in some state lotteries. It is a game of chance where players select numbers from a pool, typically ranging from 1 to 80.',
          responsibilities: ['Designed ASP.NET/MVC architecture for Keno web and mobile versions.', 'Implemented SignalR with web sockets and long polling for real-time updates.', 'Ensured dynamic client-side updates for different data types.', 'Conducted bug fixes and app testing using NUnit, QUnit.', 'Implement Cache server using Redis'],
          url: 'https://www.europebet.com/en/games/virtual-games/keno-classic',
        },
      ],
      technologies: [
        {
          icon: ['fab', 'angular'],
          value: 'Angular'
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
          icon: ['fas', 'database'],
          value: 'MSSQL',
        },
        {
          value: 'C#',
        },
        {
          value: 'ASP.NET',
        },
        {
          icon: ['fas', 'database'],
          value: 'Redis',
        },
        {
          value: 'RabbitMQ',
        },
      ],
    },
    {
      startDate: ' Apr 2011',
      endDate: 'Mar 2013',
      company: 'MSG',
      title: '.NET-Developer',
      location: 'onsite',
      projects: [{
        title: 'Web sites',
        description: 'Developing B2C Web-sites',
        responsibilities: [
          'Creating Mysql/Mssql Databse architecture',
          'Asp.net Mvc Application architecture', 'Creating Cms, with bootstrap.',
          'Creating Htm5/canvas Games, and interactive apps',
          'Bug Fixes',
          'Integrate Several apis (Facebook, Payment systems)',
          'Wordpress/Drupal'
        ],
      }],
      technologies: [
        {
          icon: ['fas', 'database'],
          value: 'MYSQL'
        },
        {
          icon: ['fab', 'windows'],
          value: 'Asp.net'
        },
        {
          icon: ['fab', 'html5'],
          value: 'HTML'
        },
        {
          icon: ['fab', 'css3'],
          value: 'css'
        },
        {
          icon: ['fab', 'js'],
          value: 'javascript'
        },
        {
          icon: ['fab', 'js'],
          value: 'jQuery'
        },
      ],
    },
    {
      startDate: 'Sep 2010',
      endDate: 'Jul 2012',
      company: 'Studio Lemons',
      title: 'Full-stack Developer',
      location: 'onsite',
      projects: [{
        title: 'Web sites',
        description: 'Developing B2C Web-sites',
        responsibilities: [
          'Creating Mysql Databse architecture',
          'Creating websates with PHP, javascript and jQuery',
          'Bug Fixes',
          'Integrate Several apis (Facebook, Payment systems)',
        ],
      }],
      technologies: [
        {
          icon: ['fas', 'database'],
          value: 'MYSQL'
        },
        {
          icon: ['fab', 'php'],
          value: 'php'
        },
        {
          icon: ['fab', 'html5'],
          value: 'HTML'
        },
        {
          icon: ['fab', 'css3'],
          value: 'css'
        },
        {
          icon: ['fab', 'js'],
          value: 'javascript'
        },
        {
          icon: ['fab', 'js'],
          value: 'jQuery'
        },
      ],
    }
  ],
};
