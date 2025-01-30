"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

// data
import { services } from "../data/data";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col py-12 xl:py-0 justify-center">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 gap-{60px} md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col gap-6 group p-4 h-full"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent dark-text-outline dark:text-outline dark:group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href="/services"
                    className="w-[70px] h-[70px] rounded-full bg-primary dark:bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <ArrowDownRight className="text-white dark:text-primary text-3xl" />
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-black group-hover:text-[#08c67a] dark:text-white transition-all duration-500">
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-black/60 dark:text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-black/20 dark:border-white/20 w-full mt-auto"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
