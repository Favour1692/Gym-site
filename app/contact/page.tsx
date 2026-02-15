import { FaClock, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Form from "@/components/Form";
import { Card, CardContent } from "@/components/ui/card";
import FAQ from "@/components/FAQ";
import Link from "next/link";

const Contact = () => {
  return (
    <section className="overflow-x-hidden">
      {/* contact form */}
      <div className="pt-[8vh] md:pt-[10vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1>contact us</h1>
          <div className="flex flex-col gap-4">
            <h2>contact form</h2>
            <Form />
          </div>
        </div>
      </div>

      <div className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="w-[90%] lg:w-[80%] mx-auto">
          <Card>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <h2 className="flex gap-3">
                    {" "}
                    <FaClock /> <span>opening hours</span>
                  </h2>
                  <ul className="space-y-2">
                    <li>Mondays - Fridays: 5:30 AM - 9:00 PM</li>
                    <li>Saturdays: 7:00 AM - 9:00 PM</li>
                    <li>Sunday: 12:00 PM - 6:00 PM</li>
                  </ul>
                </div>
                <div>
                  <h2>reach out to us</h2>
                  <ul className="space-y-2">
                    <li>
                      phone: <Link href="tel: +1 234 567">+1 234 567</Link>
                    </li>
                    <li>
                      email:{" "}
                      <Link href="mailto: ifitgym@gmail.com">
                        ifitgym@gmail.com
                      </Link>
                    </li>
                    <li>
                      <div className="flex gap-2">
                        <FaFacebookF className="text-crimson text-2xl" />
                        <FaInstagram className="text-crimson text-2xl" />
                        <FaXTwitter className="text-crimson text-2xl" />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          <p className="my-4">
            Need help planning your visit? Drop by anytime during staffed hours,
            or shoot us a message for more info on peak times and class
            schedules.
          </p>
        </div>
      </div>

      {/* faq section */}
      <div className="pt-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* faq */}
            <FAQ />

            {/* image */}
            <div className="order-1 lg:order-2">
              <Image
                src="/contact.webp"
                alt="lady in gym"
                width={500}
                height={333}
                className="rounded-[50px] mx-auto"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
