import { InlineCode } from '@/once-ui/components';

const person = {
  firstName: 'Alejandro',
  lastName: 'Villanueva',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'Web Developer',
  avatar: '/images/avatar.png',
  location: 'Seattle, WA', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ['English'], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/aavillanueva6',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/alejandro-a-villanueva/',
  },
  {
    name: 'Email',
    icon: 'email',
    link: 'mailto:aavillanueva6@gmail.com',
  },
];

const home = {
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Web Developer</>,
  subline: (
    <>
      Hey there! I'm Alejandro - I am an experienced process engineer in
      biotech, but after hours you'll find me diving into software engineering
      and teaching myself to code.
    </>
  ),
};

const about = {
  label: 'About',
  title: 'About me',
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://calendly.com/aavillanueva6/30min',
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Seattle-based developer Alejandro brings a distinctive background
        bridging biotechnology and software development, with a first-principles
        approach to solving complex technical challenges in web development. His
        12-year foundation in chemical engineering has shaped his methodical
        problem-solving style, particularly in identifying and preemptively
        addressing potential failure points. Transitioning to web development,
        Alejandro remains driven by his passion for creating direct, meaningful
        impact through technology, carrying forward his focus on optimizing user
        experiences and building robust solutions. His experience in highly
        regulated environments with critical safety considerations brings a
        unique perspective to developing maintainable, user-centric web
        applications.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: 'Work Experience',
    experiences: [
      {
        company: 'AGC Biologics',
        timeframe: '2019 - 2024',
        role: 'Global Process Engineer',
        achievements: [
          <>
            Project Manager for $5MM facility upgrade project, managed
            construction, equipment and facility qualification and validation.
            Delivered project through various challenges including workforce
            reduction that impacted a significant portion of the project team
          </>,
          <>
            Led development of Global Engineering Standards for applicable
            engineering areas (Commissioning and Qualification, Equipment
            Specifications)
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
      {
        company: 'Eli Lilly and Company',
        timeframe: '2013 - 2019',
        role: 'Senior Process Engineer',
        achievements: [
          <>
            Served as a mentor to less experienced engineers and scientists in
            applying data monitoring/visualization tools; maintaining compliance
            with global standards; and consistently utilizing good engineering
            practices.
          </>,
          <>
            Led process engineering initiatives that delivered $10-150K in
            annual savings per project while achieving 95%+ uptime at critical
            manufacturing bottlenecks through enhanced equipment reliability and
            optimized operations.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: 'Studies',
    institutions: [
      {
        name: 'Purdue University',
        description: <>Bachelor of Science in Chemical Engineering.</>,
      },
      // {
      //   name: 'Build the Future',
      //   description: <>Studied online marketing and personal branding.</>,
      // },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: 'Technical skills',
    skills: [
      {
        title: 'TypeScript / JavaScript',
        description: (
          <>
            Proficient in developing full-stack web applications with
            TypeScript/JavaScript, implementing type-safe architectures and
            modern development practices to ensure code maintainability and
            reliability.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          // {
          //   src: '/images/projects/project-01/cover-02.jpg',
          //   alt: 'Project image',
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        title: 'React',
        description: (
          <>
            Demonstrated expertise in React development, implementing complex
            component architectures, state management solutions, and custom
            hooks to create high-performance user interfaces.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'Next.js',
        description: (
          <>
            Proficient in building performant web applications with Next.js,
            leveraging its server-side rendering, dynamic routing, and built-in
            API capabilities to create seamless user experiences.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'Node.js and Express',
        description: (
          <>
            Extensive experience in designing and implementing scalable
            server-side applications using Node.js and Express, developing
            RESTful APIs and integrating robust middleware solutions.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: 'SQL and NoSQL',
        description: (
          <>
            Proven track record in architecting and implementing database
            solutions across SQL and NoSQL platforms, optimizing data models for
            performance, scalability, and integrity.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },

      {
        title: 'Bootstrap',
        description: (
          <>
            Proficient in utilizing Bootstrap framework for mobile-first
            development, implementing responsive design patterns and component
            libraries to ensure consistent cross-device user experiences.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: 'Blog',
  title: 'Writing about things I find interesting',
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: 'Work',
  title: 'My projects',
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: 'Gallery',
  title: 'My photo gallery',
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: '/images/gallery/img-01.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-02.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-03.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-04.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-05.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-06.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-07.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-08.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-09.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-10.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-11.jpg',
      alt: 'image',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/img-12.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-13.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/img-14.jpg',
      alt: 'image',
      orientation: 'horizontal',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
