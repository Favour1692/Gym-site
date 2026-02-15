"use client";

import Link from "next/link";
import { navdata } from "@/constants";
import { usePathname } from "next/navigation";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
import { MobileMenuProps } from "@/type";

const Mobilemenu = ({ open, handleClick }: MobileMenuProps) => {
  const pathname = usePathname();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="md:hidden fixed inset-0 z-50 overflow-x-hidden max-w-full"
        >
          {/* backdrop blur */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"
            onClick={handleClick}
          />
          {/* menu panel */}
          <div className="pt-15 absolute top-0 left-0 w-full h-[40vh] bg-burntblue text-fog shadow-lg flex flex-col gap-8 pl-6 sm:pl-8 z-20 font-semibold">
            {navdata.map((data) => {
              const isActive = pathname === data.href;
              return (
                <Link
                  key={data.id}
                  href={data.href}
                  onClick={handleClick}
                  className={`${
                    isActive
                      ? `text-crimson font-semibold text-lg`
                      : `text-fog font-semibold text-lg`
                  }  `}
                >
                  {data.title}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Mobilemenu;
