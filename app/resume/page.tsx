"use client";

import { motion } from "framer-motion";

// components
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// data
import { about, education, experience, skills } from "../data/data";

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
                        className="bg-[#232329] h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
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
