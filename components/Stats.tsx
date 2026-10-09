"use client";

import CountUp from "react-countup";
import { Award, Briefcase, Cpu, GitCommitHorizontal, Users } from "lucide-react";

const stats = [
  { num: 12, text: "Years of experience", icon: <Award /> },
  { num: 26, text: "Projects completed", icon: <Briefcase /> },
  { num: 8, text: "Technologies mastered", icon: <Cpu /> },
  { num: 80911, text: "Code commits", icon: <GitCommitHorizontal /> },
  { num: 42, text: "Happy clients", icon: <Users /> },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col gap-4 justify-center items-center xl:flex-row xl:justify-start"
            >
              <span className="text-[#08c67a] dark:text-accent text-2xl xl:text-3xl">
                {stat.icon}
              </span>
              <CountUp
                end={stat.num}
                duration={5}
                delay={2}
                className="text-black dark:text-white text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.text.length < 15 ? "max-w-[120px]" : "max-w-[160px]"
                } leading-snug text-black/80 dark:text-white/80 text-center xl:text-left`}
              >
                {stat.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
