"use client";

import CountUp from "react-countup";

const stats = [
  {
    num: 12,
    text: "Years of experience.",
  },
  {
    num: 26,
    text: "Projetcs Completed.",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 80911,
    text: "Code commits.",
  },
  {
    num: 12,
    text: "Years of experience",
  },
];
const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((stat, index) => {
            return (
                <div
                key={index}
                className="flex-1 flex flex-col gap-4 justify-center items-center xl:flex-row xl:justify-start"
                >
                <CountUp
                  end={stat.num}
                  duration={5}
                  delay={2}
                  className="text-black dark:text-white text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                  stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-black/80 dark:text-white/80 text-center xl:text-left`}
                >
                  {stat.text}
                </p>
                </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
