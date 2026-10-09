"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// components
import { Eye, Github } from "lucide-react";
import WorkSliderButtons from "@/components/WorkSliderButtons";
import { projects } from "../data/data";

type Tech = { name: string; usage?: string };

const TechList = ({ items }: { items: Tech[] }) => (
  <ul className="flex flex-wrap gap-x-4 gap-y-2">
    {items.map((tech, index) => (
      <li
        key={index}
        className="text-black/70 dark:text-white/70 text-sm xl:text-base"
      >
        {tech.name}
        {tech.usage && (
          <span className="ml-1 align-sub text-xs text-[#08c67a] dark:text-accent">
            ·{tech.usage}
          </span>
        )}
      </li>
    ))}
  </ul>
);

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
            <div className="w-full">
              {/* outline num */}
              <div className="text-8xl font-extrabold text-outline transition-all duration-500">
                {activeProject.num}
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-[#08c67a] dark:text-accent capitalize">
                {activeProject.title}
              </h2>

              {/* category */}
              <p className="mt-1 text-xs uppercase tracking-[3px] text-black/50 dark:text-white/50">
                {activeProject.category}
              </p>

              {/* description */}
              <p className="mt-4 text-lg text-black dark:text-white opacity-80">
                {activeProject.description}
              </p>

              {/* stacks */}
              {activeProject.frontend?.length > 0 && (
                <div className="mt-5">
                  <p className="text-[11px] uppercase tracking-[3px] text-black/40 dark:text-white/40 mb-2">
                    Frontend
                  </p>
                  <TechList items={activeProject.frontend} />
                </div>
              )}

              {activeProject.backend?.length > 0 && (
                <div className="mt-4">
                  <p className="text-[11px] uppercase tracking-[3px] text-black/40 dark:text-white/40 mb-2">
                    Backend
                  </p>
                  <TechList items={activeProject.backend} />
                </div>
              )}

              {/* divider */}
              <div className="border-t border-black/20 dark:border-white/20 w-full mt-6" />

              {/* buttons */}
              <div className="flex gap-4 mt-4">
                <Link
                  href={activeProject.github || "https://github.com/hik8hik"}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${activeProject.title} source on GitHub`}
                  className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-accent group transition-all duration-500"
                >
                  <Github className="text-white group-hover:text-primary" />
                </Link>

                {activeProject.link && (
                  <Link
                    href={activeProject.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open live demo of ${activeProject.title}`}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-accent group transition-all duration-500"
                  >
                    <Eye className="text-white group-hover:text-primary" />
                  </Link>
                )}

                {activeProject.backendGithub && (
                  <Link
                    href={activeProject.backendGithub}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${activeProject.title} backend on GitHub`}
                    className="flex items-center justify-center w-12 h-12 rounded-full bg-black/20 hover:bg-accent group transition-all duration-500"
                  >
                    <Github className="text-white group-hover:text-primary" />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              className="h-[320px] xl:h-[480px] mb-12"
              onSlideChange={(swiper) =>
                setActiveProject(projects[swiper.activeIndex])
              }
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="relative h-[320px] xl:h-[460px] w-full mb-12 flex justify-center items-center bg-pink-50/10 rounded-xl overflow-hidden">
                    {/* overlay for image-only slides */}
                    {!project.link && (
                      <div className="absolute inset-0 bg-black/10 z-10 rounded-xl" />
                    )}

                    <div className="relative h-full w-full">
                      {project.link ? (
                        <div className="w-full h-full">
                          <iframe
                            src={project.link}
                            className="w-full h-full border-none"
                            title={`${project.title} preview`}
                            allowFullScreen
                            style={{
                              width: "1920px",
                              height: "1080px",
                              transform: "scale(0.25)",
                              transformOrigin: "top left",
                            }}
                          />
                        </div>
                      ) : (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(min-width: 1280px) 50vw, 100vw"
                          className="rounded-xl object-cover"
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}

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
