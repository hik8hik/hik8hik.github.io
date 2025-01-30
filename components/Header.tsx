import Link from "next/link";

// components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import { ModeToggle } from "./themeToggle";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white dark:text-primary">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold cursor-pointer text-black dark:text-white">
            Hik Hik <span className="text-[#08c67a] dark:text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
          <ModeToggle />
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
