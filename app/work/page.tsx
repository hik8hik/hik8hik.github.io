"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

//components
import { Eye, Github } from "lucide-react";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import { projects } from "../data/data";

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="w-full xl:w-[50%]">
              {/* outline num */}
              <div className="text-8xl font-extrabold text-outline text-transparent dark-text-outline dark:text-outline dark:group-hover:text-outline-hover transition-all duration-500">
                {activeProject.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-[#08c67a] group-hover:text-[#08c67a] dark:text-accent transition-all duration-500 capitalize">
                {activeProject.category} Project
              </h2>

              {/* project description */}
              <p className="mt-4 text-lg text-black dark:text-white opacity-70">
                {activeProject.description}
              </p>
              {/* stack */}
              <ul className="xl:flex gap-4 w-full mt-4 flex-wrap flex-col grid grid-cols-2">
                {activeProject.stack.map((tech, index) => (
                  <li
                    key={index}
                    className="text-black dark:text-white opacity-70 text-md xl:text-xl"
                  >
                    {tech.name}|
                    <span className="align-subscript text-xs text-[#08c67a] dark:text-accent">
                      .{tech.usage}
                    </span>
                  </li>
                ))}
              </ul>
              {/* divider */}
              <div className="border-t border-black dark:border-white w-full"></div>
              {/* buttons */}
              <div className="flex gap-4 mt-4">
                <Link
                  href={
                    activeProject.link
                      ? activeProject.link
                      : "https://github.com/hik8hik"
                  }
                  target="_blank"
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 text-white font-bold text-lg transition-all duration-500"
                >
                  <Github className="text-white" />
                </Link>
                <Link
                  href={activeProject.github ? activeProject.github : "#"}
                  target={activeProject.github ? "_blank" : "_self"}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 text-white font-bold text-lg transition-all duration-500"
                >
                  <Eye className="text-white" />
                </Link>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className={` ${
                activeProject.link ? "h-[270px] w-[480px]" : "h-[520px]"
              } mb-12`}
              onSlideChange={(swiper) =>
                setActiveProject(projects[swiper.activeIndex])
              }
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div
                    className={`${
                      project.link ? "h-[270px] w-[480px]" : "h-[460px]"
                    } relative h-[270px] w-[480px] mb-12 flex justify-center items-center bg-pink-50/20`}
                  >
                    {/* overlay */}
                    {!project.link && (
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/11 z-10 rounded-xl"></div>
                    )}
                    {/* image */}
                    <div className="relative h-full w-full">
                      {project.link ? (
                        <div className="w-full h-screen">
                          <iframe
                            src={project.link} // Replace with the URL you want to render
                            className="w-full h-full border-none"
                            title="Embedded Website"
                            allowFullScreen
                            style={{
                              width: "1920px", // Render as a desktop screen width
                              height: "1080px", // Render as a desktop screen height
                              transform: "scale(0.25)", // Scale down to fit inside the div
                              transformOrigin: "top left",
                            }}
                          ></iframe>
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-xl object-cover"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderButtons
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconStyles="text-white"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
