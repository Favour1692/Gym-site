"use client";

import { navdata } from "@/constants";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Mode from "./Mode";
import Mobilemenu from "./Mobilemenu";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { pacifico } from "@/fonts";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setScroll(true) : setScroll(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const pathname = usePathname();

  return (
    <nav
      className={`${
        scroll
          ? `bg-fog shadow-[0_1px_2px_#333] dark:bg-charcoal dark:shadow-[0_1px_2px_#333]`
          : `bg-transparent shadow-none`
      } fixed top-0 left-0 right-0 w-full py-6 z-50 overflow-x-hidden`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div
            className={`${pacifico.className} antialiased text-lg lg:text-xl text-crimson font-medium`}
          >
            ifitness gym
          </div>
          <div className="hidden md:flex gap-12 items-center">
            <div className="flex gap-4 text-lg items-center">
              {navdata.map((data) => {
                const isActive = pathname === data.href;
                return (
                  <Link
                    key={data.id}
                    href={data.href}
                    className={`text-lg lg:text-xl text-darkblue dark:text-fog hover:text-crimson dark:hover:text-crimson transition-all duration-500 font-semibold ${
                      isActive ? `border-b-2 border-b-crimson` : `border-b-0`
                    }`}
                  >
                    {data.title}
                  </Link>
                );
              })}
            </div>

            <div className="flex gap-2">
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="md:hidden lg:flex bg-crimson hover:bg-white transition-all duration-500 dark:bg-crimson"
                >
                  JOIN US
                </Button>
              </Link>

              <Mode />
            </div>
          </div>
          <div className="md:hidden flex gap-2 items-center">
            <Mode />
            <div className="text-2xl z-100" onClick={handleClick}>
              {open ? (
                <IoClose className="text-crimson font-semibold" />
              ) : (
                <TiThMenu className="text-crimson font-semibold" />
              )}
            </div>
          </div>
        </div>
      </div>

      <Mobilemenu open={open} handleClick={handleClick} />
    </nav>
  );
};

export default Navbar;
