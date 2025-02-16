"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

//components
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignRight } from "lucide-react";
import { ModeToggle } from "./themeToggle";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <AlignRight className="text-[32px] text-[#08c67a] dark:text-accent" />
      </SheetTrigger>

      <SheetContent className="flex flex-col gap-4 p-8">
        {/* theme toggle */}
        <ModeToggle />
        {/* logo */}
        <div className="mt-32 mb-40 text-[#08c67a] dark:text-accent text-2xl">
          <Link href={"/"} className="flex items-center gap-2 cursor-pointer">
            <h1 className="text-4xl font-semibold cursor-pointer">
              Hik Hik <span className="text-[#08c67a] dark:text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col gap-4">
          {links.map((link, index) => {
            return (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path &&
                  "text-[#08c67a] dark:text-accent border-b-2 border-accent"
                } capitalize font-medium hover:text-[#08c67a] dark:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
