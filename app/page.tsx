"use client";

import { Download } from "lucide-react";

//components
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-between items-center h-full xl:flex-row xl:pt-8 xl:pb-28">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-black dark:text-white">
              Software Developer
            </span>
            <h1 className="h1 mb-6 text-black dark:text-white">
              Hello I &apos; m <br />{" "}
              <span className="text-[#08c67a] dark:text-accent">Hik Hik</span>
            </h1>
            <p className="max-w-[500px] text-black dark:text-white">
              I specialize in creating elegant and seamless digital experiences,
              with expertise in a wide range of programming languages and
              technologies.
            </p>

            {/* btn & soxials */}
            <div className="flex flex-col gap-4 mt-8 xl:flex-row xl:gap-8">
              <a href="/app/files/03c22v.pdf" download="03c22v.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <Download className="text-xl" />
                </Button>
              </a>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles={"flex gap-6 flex-wrap"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-[#08c67a] dark:text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
