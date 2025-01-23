"use client";

import {
  Coffee,
  CoffeeIcon,
  Dribbble,
  Github,
  Linkedin,
  PalmtreeIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";

const socials = [
  { icon: <Github />, link: "https://github.com/hik8hik" },
  { icon: <Linkedin />, link: "https://www.linkedin.com/in/hik8hik" },
  { icon: <Twitter />, link: "https://x.com/hik_8_hik" },
  { icon: <Youtube />, link: "https://youtube.com/@hikhik" },
  { icon: <CoffeeIcon />, link: "https://www.buymeacoffee.com/hik8hik" },
  { icon: <PalmtreeIcon />, link: "https://www.patreon.com/hik8hik" },
  { icon: <Dribbble />, link: "https://dribbble.com/hik8hik" },
];
interface SocialProps {
  containerStyles: string;
  iconStyles: string;
}

const Social = ({ containerStyles, iconStyles }: SocialProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, indx) => {
        return (
          <Link
            key={indx}
            target="_blank"
            href={social.link}
            className={iconStyles}
          >
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
