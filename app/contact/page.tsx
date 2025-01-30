"use client";

import { motion } from "framer-motion";

//components
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// data
import { info } from "../data/data";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-[#08c67a] dark:text-accent">
                Inquire, Get Quote Or Just Hire Me{" "}
              </h3>
              {/* brief */}
              <p className="text-white/60">
                Fill out the form and I will get back to you as soon as
                possible.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="name" placeholder="Name" />
                <Input type="email" placeholder="Email" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="webdev">Web Development</SelectItem>
                    <SelectItem value="uiuxdesign">UI/UX Design</SelectItem>
                    <SelectItem value="seo">SEO</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* text-area */}
              <Textarea placeholder="Draft your message here." />
              {/* button */}
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((info, infoIndex) => (
                <a key={infoIndex} href={info.href} target={info.target}>
                  <li className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#29292c] text-[#08c67a] dark:text-accent rounded-xl flex items-center justify-center">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-black/60 dark:text-white/60">{info.title}</p>
                      <h3 className="text-black dark:text-white text-xl">{info.data}</h3>
                    </div>
                  </li>
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
