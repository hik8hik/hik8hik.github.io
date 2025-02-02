import {
  Pyramid,
  SquareCode,
  Database,
  DatabaseZap,
  FolderGit2,
  GitPullRequestDraft,
  SquareDashedKanban,
  Workflow,
  MapPinMinus,
  MessageCircle,
  Phone,
} from "lucide-react";

/*  SERVICES: data ======================================================================================= */
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "We develop native and hybrid mobile apps for iOS and Android platforms.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description: "We design user-friendly, clean and modern interfaces.",
  },
  {
    num: "04",
    title: "Prototyping",
    description:
      "We create interactive prototypes to validate ideas and products.",
  },
  {
    num: "05",
    title: "Quality Assurance",
    description:
      "We provide QA services to ensure the highest quality of our products.",
  },
];

/* Resume: data ======================================================================================= */
// about data
const about = {
  title: "About Me",
  description: "I am a developer with 12+ years of experience.",
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Hik Hik",
    },
    {
      fieldname: "Location",
      fieldvalue: "*** ***",
    },
    {
      fieldname: "YOB",
      fieldvalue: "1998",
    },
    {
      fieldname: "Degree",
      fieldvalue: "Master",
    },
    {
      fieldname: "Experience",
      fieldvalue: "12+ Years.",
    },
    {
      fieldname: "Phone",
      fieldvalue: "*** ***",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "*** ***",
    },
    {
      fieldname: "Email",
      fieldvalue: "hik8hik@gmail.com",
    },
    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 12+ years of experience in the field of tech. I have worked with various clients and companies. I have a good understanding of the latest technologies and trends in the industry.",
  jobs: [
    {
      title: "Senior Developer",
      company: "*** ***",
      duration: "2020 - Present",
      description: "I am working...",
    },
    {
      title: "Geneal IT Manager",
      company: "Tanay Telesystems",
      duration: "2019 - 2020",
      description:
        "Database management. Server setup. Manage the company's website. Fullstack development.",
    },
    {
      title: "Junior Developer",
      company: "German Kenya Sauages",
      duration: "2016 - 2018",
      description:
        "Email server setup. Indoor Invoice & Order Management System. Manage the company's website.",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "I have completed my Master's degree in Computer Science. I have a good understanding of the latest technologies and trends in the industry.",
  degrees: [
    {
      title: "NetApp ONTAP 9.7",
      university: "Flackbox",
      duration: "Ongoing...",
      description: "Studying[20%]",
    },
    {
      title: "Cisco CCNA 200-301",
      university: "Flackbox",
      duration: "Ongoing...",
      description: "Studying",
    },
    {
      title: "Master's Degree",
      university: "*** ***",
      duration: "2020 - 2024",
      description: "Computer Science",
    },
    {
      title: "Bachelor's Degree",
      university: "*** ***",
      duration: "2016 - 2020",
      description: "Computer Science",
    },
  ],
};

// skills data

const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My Skills",
  description:
    "I have a good understanding of the latest technologies and trends in the industry. I have worked with various clients and companies. I have a good understanding of the latest technologies and trends in the industry.",
  categories: [
    {
      icon: <Pyramid />,
      title: "Frontend",
      skills: [
        { icon: <SquareCode />, name: "HTML", shortdescription: "HTML5" },
        { icon: <SquareCode />, name: "CSS", shortdescription: "CSS3" },
        { icon: <SquareCode />, name: "JavaScript", shortdescription: "ES6" },
        { icon: <SquareCode />, name: "React", shortdescription: "React.js" },
        { icon: <SquareCode />, name: "Vue", shortdescription: "Vue.js" },
        {
          icon: <SquareCode />,
          name: "Angular",
          shortdescription: "Angular.js",
        },
      ],
    },
    {
      icon: <GitPullRequestDraft />,
      title: "Backend",
      skills: [
        {
          icon: <Workflow />,
          name: "Node.js",
          shortdescription: "Node.js from Node.js Foundation",
        },
        {
          icon: <Workflow />,
          name: "Express",
          shortdescription: "Express.js from Express.js Foundation",
        },
        {
          icon: <Workflow />,
          name: "Django",
          shortdescription: "Django from Django Software Foundation",
        },
        {
          icon: <Workflow />,
          name: "Flask",
          shortdescription: "Flask from Pallets Projects",
        },
        {
          icon: <Workflow />,
          name: "Ruby on Rails",
          shortdescription: "Ruby on Rails from Rails Core Team",
        },
      ],
    },
    {
      icon: <DatabaseZap />,
      title: "Database",
      skills: [
        {
          icon: <Database />,
          name: "Firebase",
          shortdescription: "Firebase from Google",
        },
        {
          icon: <Database />,
          name: "MongoDB",
          shortdescription: "MongoDB from MongoDB Inc.",
        },
        {
          icon: <Database />,
          name: "MySQL",
          shortdescription: "MySQL from Oracle",
        },
        {
          icon: <Database />,
          name: "PostgreSQL",
          shortdescription:
            "PostgreSQL from PostgreSQL Global Development Group",
        },
        {
          icon: <Database />,
          name: "SQLite",
          shortdescription: "SQLite from SQLite Consortium",
        },
      ],
    },
    {
      icon: <SquareDashedKanban />,
      title: "Others",
      skills: [
        {
          icon: <FolderGit2 />,
          name: "Git",
          shortdescription:
            "Git is a version control system that tracks changes and facilitates collaboration in software projects.",
        },
        {
          icon: <FolderGit2 />,
          name: "Docker",
          shortdescription:
            "Docker is a platform for developing, shipping, and running applications.",
        },
        {
          icon: <FolderGit2 />,
          name: "Kubernetes",
          shortdescription:
            "Kubernetes is an open-source container-orchestration system for automating application deployment, scaling, and management.",
        },
        {
          icon: <FolderGit2 />,
          name: "AWS",
          shortdescription:
            "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
        },
        {
          icon: <FolderGit2 />,
          name: "GCP",
          shortdescription:
            "Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, file storage, and YouTube.",
        },
        {
          icon: <FolderGit2 />,
          name: "Azure",
          shortdescription:
            "Microsoft Azure, commonly referred to as Azure, is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
        },
      ],
    },
  ],
};

/* WORK: data */
const projects = [
  {
    num: "01",
    title: "Sky Field Aerotech",
    category: "fullstack",
    description:
      "Sky Field is a company using drones to help farmers in Kenya.",
    stack: [
      { name: "Next.js", usage: "Frontend" },
      { name: "TypeScript", usage: "Frontend" },
      { name: "Tailwind CSS", usage: "Frontend" },
      { name: "Node.js", usage: "Backend" },
      { name: "MongoDB", usage: "Database" },
    ],
    image: "assets/work/thumb1.png",
    link: "https://skyfieldaerotech-webclient.vercel.app/",
    github: "https://github.com/hik8hik/skyfieldaerotech_webclient",
  },
  {
    num: "02",
    title: "Portfolio",
    category: "frontend",
    description: "My personal portfolio website",
    stack: [
      { name: "Next.js", usage: "Frontend" },
      { name: "TypeScript", usage: "Frontend" },
      { name: "Tailwind CSS", usage: "Frontend" },
    ],
    image: "assets/work/thumb1.png",
    link: "https://hik8hik.github.io",
    github: "https://github.com/hik8hik/hik8hik.github.io",
  },
  {
    num: "03",
    title: "Financial Dashboard",
    category: "fullstack",
    description: "A financial dashboard for tracking expenses, income, etc.",
    stack: [
      { name: "Next.js", usage: "Frontend" },
      { name: "TypeScript", usage: "Frontend" },
      { name: "Tailwind CSS", usage: "Frontend" },
      { name: "Node.js", usage: "Backend" },
      { name: "MongoDB", usage: "Database" },
    ],
    image: "assets/work/finsgram_landing.png",
    link: "https://finsgram-d21a2.web.app",
    github: "",
  },
  {
    num: "04",
    title: "RN Finance App",
    category: "mobile",
    description: "A finance app built with React Native",
    stack: [
      { name: "React Native", usage: "Frontend" },
      { name: "TypeScript", usage: "Frontend" },
      { name: "Tailwind CSS", usage: "Frontend" },
      { name: "Node.js", usage: "Backend" },
      { name: "MongoDB", usage: "Database" },
      { name: "Expo", usage: "Mobile" },
    ],
    image: "assets/work/thumb3.png",
    link: "",
    github: "",
  },
  {
    num: "05",
    title: "Hospital Management",
    category: "fullstack",
    description: "A hospital management system",
    stack: [
      { name: "HTML5", usage: "Frontend" },
      { name: "CSS3", usage: "Frontend" },
      { name: "JavaScript", usage: "Frontend" },
      { name: "SQL", usage: "Backend" },
      { name: "PHP", usage: "Backend" },
    ],
    image: "assets/work/hms2020php.png",
    link: "",
    github: "",
  },
];

/* CONTACT: data ======================================================================================= */
const info = [
  {
    icon: <Phone />,
    title: "Skype",
    data: "live:.cid.1b4b4b4b4b4b4b4b",
    href: "",
    target: "_blank",
  },
  {
    icon: <Phone />,
    title: "Phone",
    data: "(123) 456-7890",
    href: "tel:1234567890",
    target: "_self",
  },
  {
    icon: <MessageCircle />,
    title: "Email",
    data: "hik8hik@gmail.com",
    href: "mailto:hik8hik@gmail.com",
    target: "_self",
  },
  {
    icon: <MapPinMinus />,
    title: "Address",
    data: "1234 Main St, City, State 12345",
    href: "http://maps.google.com/?q=1234 Main St, City, State 12345",
    target: "_blank",
  },
];

export { services, about, experience, education, skills, projects, info };
