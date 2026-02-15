import Link from "next/link";
import { pacifico, staatliches } from "@/fonts";
import { socials, navdata } from "@/constants";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className={`${staatliches} bg-fog dark:bg-charcoal`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4">
            <span className={`${pacifico.className} antialiased text-2xl`}>
              ifitness gym
            </span>
            <p>
              Dedicated to your fitness journey. Expert guidance, proven results
              and a space to thrive.
            </p>
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  className="text-lg hover:text-contrast active:text-contrast"
                >
                  {social.logo}
                </Link>
              ))}{" "}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold md:text-center">
              Quick Links
            </h4>
            <div className="flex flex-col gap-4 md:mx-auto">
              {navdata.map((data) => (
                <Link
                  key={data.id}
                  href={data.href}
                  className="hover:text-contrast hover:font-semibold active:text-contrast"
                >
                  {data.title}
                </Link>
              ))}{" "}
              privacy
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Stay Updated</h4>
            <p>
              Subscribe to get updates and information delivered to your inbox
            </p>
            <div className="flex flex-col mr-6 md:mr-0 sm:w-[70%] md:w-full sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="your email"
                name="email address"
                autoComplete="on"
              />
              <Button className="w-fit">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-4 border-t border-contrast/30 text-center text-sm">
          <div className="flex flex-col gap-2">
            <p>
              &copy; {new Date().getFullYear()} ifitness gym. All rights
              reserved
            </p>
            <p>site created by Favour😊</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
