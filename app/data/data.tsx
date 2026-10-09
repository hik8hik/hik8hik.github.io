import {
  Pyramid,
  SquareCode,
  Database,
  DatabaseZap,
  FolderGit2,
  GitPullRequestDraft,
  SquareDashedKanban,
  Workflow,
  MapPin,
  Mail,
  Phone,
  Video,
} from "lucide-react";

/*  SERVICES ============================================================ */
const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "Websites and web apps that serve as powerful marketing tools and deliver memorable brand experiences.",
  },
  {
    num: "02",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android, built with React Native and Expo.",
  },
  {
    num: "03",
    title: "UI/UX Design",
    description:
      "Clean, accessible and modern interfaces — designed and shipped in the same codebase.",
  },
  {
    num: "04",
    title: "Backend & APIs",
    description:
      "REST and serverless APIs, authentication, databases and the plumbing that keeps products running.",
  },
  {
    num: "05",
    title: "Quality Assurance",
    description:
      "Automated tests, linting and pre-commit hooks so shipping is safe and boring.",
  },
];

/*  RESUME ============================================================== */
const about = {
  title: "About Me",
  description:
    "I'm a full-stack developer with 12+ years of experience building products for the web and mobile.",
  info: [
    { fieldname: "Name", fieldvalue: "Hik Hik" },
    { fieldname: "Location", fieldvalue: "Nairobi, Kenya" },
    { fieldname: "YOB", fieldvalue: "1998" },
    { fieldname: "Degree", fieldvalue: "Master's" },
    { fieldname: "Experience", fieldvalue: "12+ Years" },
    { fieldname: "Phone", fieldvalue: "+254 *** *** ***" },
    { fieldname: "Nationality", fieldvalue: "Kenyan" },
    { fieldname: "Email", fieldvalue: "hik8hik@gmail.com" },
    { fieldname: "Freelance", fieldvalue: "Available" },
  ],
};

const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 12+ years of experience in tech, working with clients and companies across web, mobile and infrastructure.",
  jobs: [
    {
      title: "Senior Developer",
      company: "*** ***",
      duration: "2020 - Present",
      description:
        "Leading full-stack delivery for web and mobile products, from architecture to production.",
    },
    {
      title: "General IT Manager",
      company: "Tanay Telesystems",
      duration: "2019 - 2020",
      description:
        "Database management, server setup, company website and full-stack development.",
    },
    {
      title: "Junior Developer",
      company: "German Kenya Sausages",
      duration: "2016 - 2018",
      description:
        "Email server setup, indoor invoice & order management system, company website.",
    },
  ],
};

const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description:
    "A computer science foundation backed by continuous, hands-on certification work.",
  degrees: [
    {
      title: "NetApp ONTAP 9.7",
      university: "Flackbox",
      duration: "Ongoing",
      description: "Storage & data management — 20% complete",
    },
    {
      title: "Cisco CCNA 200-301",
      university: "Flackbox",
      duration: "Ongoing",
      description: "Networking fundamentals",
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

const skills = {
  icon: "/assets/resume/skills.svg",
  title: "My Skills",
  description:
    "A working toolkit spanning frontend, backend, data and infrastructure — picked to ship real products.",
  categories: [
    {
      icon: <Pyramid />,
      title: "Frontend",
      skills: [
        { icon: <SquareCode />, name: "HTML", shortdescription: "HTML5" },
        { icon: <SquareCode />, name: "CSS", shortdescription: "CSS3" },
        { icon: <SquareCode />, name: "JavaScript", shortdescription: "ES6+" },
        { icon: <SquareCode />, name: "React", shortdescription: "React.js" },
        { icon: <SquareCode />, name: "Next.js", shortdescription: "Next.js 15" },
        { icon: <SquareCode />, name: "Vue", shortdescription: "Vue.js" },
      ],
    },
    {
      icon: <GitPullRequestDraft />,
      title: "Backend",
      skills: [
        { icon: <Workflow />, name: "Node.js", shortdescription: "Node.js" },
        { icon: <Workflow />, name: "Express", shortdescription: "Express.js" },
        { icon: <Workflow />, name: "Django", shortdescription: "Django" },
        { icon: <Workflow />, name: "Flask", shortdescription: "Flask" },
        { icon: <Workflow />, name: "Ruby on Rails", shortdescription: "Rails" },
      ],
    },
    {
      icon: <DatabaseZap />,
      title: "Database",
      skills: [
        { icon: <Database />, name: "Firebase", shortdescription: "Firebase" },
        { icon: <Database />, name: "MongoDB", shortdescription: "MongoDB" },
        { icon: <Database />, name: "MySQL", shortdescription: "MySQL" },
        { icon: <Database />, name: "PostgreSQL", shortdescription: "Postgres" },
        { icon: <Database />, name: "SQLite", shortdescription: "SQLite" },
      ],
    },
    {
      icon: <SquareDashedKanban />,
      title: "Others",
      skills: [
        { icon: <FolderGit2 />, name: "Git", shortdescription: "Version control" },
        { icon: <FolderGit2 />, name: "Docker", shortdescription: "Containers" },
        { icon: <FolderGit2 />, name: "Kubernetes", shortdescription: "Orchestration" },
        { icon: <FolderGit2 />, name: "AWS", shortdescription: "Amazon Web Services" },
        { icon: <FolderGit2 />, name: "GCP", shortdescription: "Google Cloud" },
        { icon: <FolderGit2 />, name: "Azure", shortdescription: "Microsoft Azure" },
      ],
    },
  ],
};

/*  WORK =============================================================== */
/*
 * Each project declares frontend and backend separately so the Work page
 * can list them under clear headings. Update the tech arrays with the real
 * stacks when you get a chance — placeholders are sensible defaults.
 */
const projects = [
  {
    num: "01",
    title: "Sniffle",
    category: "fullstack",
    description:
      "A modern, data-driven web app with a dedicated frontend and a companion API backend.",
    frontend: [
      { name: "Next.js", usage: "Framework" },
      { name: "TypeScript", usage: "Language" },
      { name: "Tailwind CSS", usage: "Styling" },
    ],
    backend: [
      { name: "Node.js", usage: "Runtime" },
      { name: "REST API", usage: "Interface" },
    ],
    image: "assets/work/thumb1.png",
    link: "https://miniature-sniffle-iota.vercel.app",
    github: "https://github.com/hik8hik/miniature-sniffle-frontend",
    backendGithub: "https://github.com/hik8hik/miniature-sniffle-data",
  },
  {
    num: "02",
    title: "Sniffle Data",
    category: "backend",
    description:
      "The data and API service that powers Sniffle — records, queries and persistence.",
    frontend: [],
    backend: [
      { name: "Node.js", usage: "Runtime" },
      { name: "REST API", usage: "Interface" },
      { name: "MongoDB", usage: "Database" },
    ],
    image: "assets/work/thumb2.png",
    link: "https://miniature-sniffle-data.vercel.app",
    github: "https://github.com/hik8hik/miniature-sniffle-data",
    backendGithub: "",
  },
  {
    num: "03",
    title: "Octo Bassoon",
    category: "fullstack",
    description:
      "A full-stack web application with a clean interface and a companion backend service.",
    frontend: [
      { name: "Next.js", usage: "Framework" },
      { name: "TypeScript", usage: "Language" },
      { name: "Tailwind CSS", usage: "Styling" },
    ],
    backend: [
      { name: "Node.js", usage: "Runtime" },
      { name: "PostgreSQL", usage: "Database" },
    ],
    image: "assets/work/thumb3.png",
    link: "https://redesigned-octo-bassoon.vercel.app",
    github: "https://github.com/hik8hik/redesigned-octo-bassoon",
    backendGithub: "",
  },
];

/*  CONTACT ============================================================ */
const info = [
  {
    icon: <Video />,
    title: "Skype",
    data: "live:.cid.1b4b4b4b4b4b4b4b",
    href: "skype:live:.cid.1b4b4b4b4b4b4b4b?chat",
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
    icon: <Mail />,
    title: "Email",
    data: "hik8hik@gmail.com",
    href: "mailto:hik8hik@gmail.com",
    target: "_self",
  },
  {
    icon: <MapPin />,
    title: "Address",
    data: "Nairobi, Kenya",
    href: "https://maps.google.com/?q=Nairobi,+Kenya",
    target: "_blank",
  },
];

export { services, about, experience, education, skills, projects, info };
