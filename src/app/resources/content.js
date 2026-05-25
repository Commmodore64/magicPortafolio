const person = {
  firstName: "Cesar",
  lastName: "Marines",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web Developer",
  avatar: "/images/avatar.jpg",
  email: "cesarml2002@hotmail.com",
  location: "America/Chihuahua", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Spanish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
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
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Commmodore64",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/cmarines/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/SimpleCyberUser",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Full Stack Web Developer</>,
  featured: {
    display: true,
    title: (
      <>
        Get in touch: <strong className="ml-4">Email me</strong>
      </>
    ),
    href: "mailto:cesarml2002@hotmail.com",
  },
  subline: (
    <>
      I&apos;m Cesar, a Full Stack Engineer.
      <br />I specialize in building scalable, high-performance web applications
      with modern technologies.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an Engineer and currently work as a Full Stack Developer,
        passionate about architecting and developing modern web platforms using
        cutting-edge technologies. My professional journey is driven by
        technical excellence and a commitment to building the digital future
        through innovative, scalable, and high-quality software solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Mobinsa",
        timeframe: "November 2025 - Present",
        role: "Full Stack Developer & IT Specialist",
        achievements: [
          <>
            Developed and deployed a secure internal E-learning platform using
            Next.js and Synology NAS to streamline staff onboarding for new
            business systems.
          </>,
          <>
            Led the technical implementation and integration of ERP and CRM
            solutions to optimize company-wide operational workflows and data
            management.
          </>,
          <>
            Managed local network infrastructure and provided comprehensive
            technical support, ensuring high availability of internal digital
            services and hardware.
          </>,
          <>
            Implemented a passwordless Magic Link authentication system and
            custom video tracking middleware to enhance user experience and
            training analytics.
          </>,
        ],
        images: [
          {
            src: "/images/projects/project-03/cover-01.png",
            alt: "Mobinsa E-learning and Systems Implementation",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Soluciones Moviles y Comunicaciones",
        timeframe: "July 2024 - Present",
        role: "Full Stack Developer",
        achievements: [
          <>
            Design and optimize scalable architectures for government platform
            projects.
          </>,
          <>
            Design and optimize scalable architectures for government platform
            projects.
          </>,
          <>
            Manage CI/CD pipelines and implement the best practices for
            continuous integration and delivery
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Software Development and Management",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "MedicPlus",
        timeframe: "2023 - 2024",
        role: "Junior Developer",
        achievements: [
          <>
            Enhanced software performance by identifying and fixing bugs through
            testing and debugging processes.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Universidad Tecnologica de Chihuahua",
        description: <>Develop and manage software solutions efficiently.</>,
      },
      {
        name: "Cisco CCNAv7",
        description: <>Studied networking concepts and protocols.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>
            {" "}
            Make prototypes for software applications quickly and efficiently.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "MySQL",
        description: (
          <>
            Design and manage relational databases, write efficient SQL queries,
            and optimize data storage.
          </>
        ),
        images: [],
      },
      {
        title: "Next.js",
        description: (
          <>
            Building next gen apps with Next.js + TailwindCSS + Database Cloud.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { about, blog, gallery, home, newsletter, person, social, work };
