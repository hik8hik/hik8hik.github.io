"use client";

import { motion } from "framer-motion";
import {
  Database,
  DatabaseZap,
  FolderGit2,
  GitPullRequestDraft,
  Pyramid,
  SquareCode,
  SquareDashedKanban,
  Workflow,
} from "lucide-react";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

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
    "I have 12+ years of experience in the field of web development. I have worked with various clients and companies. I have a good understanding of the latest technologies and trends in the industry.",
  jobs: [
    {
      title: "Senior Developer",
      company: "Company Name",
      duration: "2018 - Present",
      description: "I am working...",
    },
    {
      title: "Frontend Developer",
      company: "Company Name",
      duration: "2015 - 2018",
      description: "I worked...",
    },
    {
      title: "Junior Developer",
      company: "Company Name",
      duration: "2012 - 2015",
      description: "I started...",
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
      title: "Master's Degree",
      university: "University Name",
      duration: "2010 - 2012",
      description: "I completed my Master's degree...",
    },
    {
      title: "Bachelor's Degree",
      university: "University Name",
      duration: "2006 - 2010",
      description: "I completed my Bachelor's degree...",
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

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="about"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value={"experience"}>Experience</TabsTrigger>
            <TabsTrigger value={"education"}>Education</TabsTrigger>
            <TabsTrigger value={"skills"}>Skills</TabsTrigger>
            <TabsTrigger value={"about"}>About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.jobs.map((job, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{job.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                          {job.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent border-accent"></span>
                          <p className="text-white/60">{job.company}</p>
                          <p className="text-white/60">{job.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.degrees.map((degree, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{degree.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold">
                          {degree.title}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent border-accent"></span>
                          <p className="text-white/60">{degree.university}</p>
                          <p className="text-white/60">{degree.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full">
              <div className=" flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold ">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {skills.categories.map((category, index) => (
                      <li
                        key={index}
                        className="hover:bg-[#232329] h-[400px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 group"
                      >
                        <div className="flex flex-row gap-[30px] justify-center">
                          <span className="text-accent group-hover:text-white">
                            {category.icon}
                          </span>
                          <span className="mt-2 group-hover:w-[6px] group-hover:h-[6px] group-hover:rounded-full group-hover:bg-accent group-hover:border group-hover:border-white transition-all duration-1000"></span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left font-bold group-hover:text-accent group-hover:tracking-widest transition-all duration-1000">
                            {category.title}
                          </h3>
                        </div>
                        <div className="flex gap-3">
                          <div className="text-white/60 grid grid-cols gap-3 col-span-1 sm:col-span-1 lg:col-span-1">
                            <ul>
                              {category.skills.map((skill, skillIndex) => (
                                <div
                                  key={skillIndex}
                                  className="flex flex-row gap-2 items-center"
                                >
                                  <div className="flex items-center gap-2">
                                    <p
                                      data-tooltip-target={skill.name}
                                      className="text-white/60 group-hover:text-accent"
                                    >
                                      {skill.icon}
                                    </p>
                                    <p
                                      data-tooltip-target={skill.name}
                                      className="text-white/60 group-hover:tracking-widest transition-all duration-1000"
                                    >
                                      {skill.name}
                                    </p>
                                  </div>
                                </div>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((info, infoIndex) => (
                    <li
                      key={infoIndex}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{info.fieldname}</span>
                      <span className="text-xl">{info.fieldvalue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
