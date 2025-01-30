"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              pathname === link.path &&
              "text-[#08c67a] dark:text-accent border-b-2 border-accent"
            } capitalize font-medium  hover:text-[#08c67a] dark:hover:text-accent transition-all ${
              pathname !== link.path && "text-black dark:text-white"
            }`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
