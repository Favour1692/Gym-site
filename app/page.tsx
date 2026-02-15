import { anton } from "@/fonts";
import { Button } from "@/components/ui/button";
import { landingBg, benefits, offerbg, overlay } from "@/constants";
import { Card, CardContent } from "@/components/ui/card";
import { FaCheck } from "react-icons/fa";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";

{
  /* <div className="flex gap-4">
              <FaClock className="text-xl md:text-2xl text-crimson" />
              <h3 className="">open early, close late</h3>
            </div> */
}

const Home = () => {
  return (
    <section className="overflow-x-hidden">
      {/* hero section */}
      <div className="w-full h-screen bg-[url('/mobile.webp')] lg:bg-[url('/landing.webp')] bg-cover bg-no-repeat bg-center">
        <div className="w-full h-full bg-[#333]/30">
          <div className="max-w-7xl mx-auto px-4 h-full flex flex-col gap-4 justify-center items-center text-fog text-center">
            <div>
              <p className="uppercase text-lg" data-aos="fade-up">
                your fitness family
              </p>
              <h1
                className="capitalize text-fog"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Transform your body. Empower your mind
              </h1>
            </div>

            <p
              className="text-lg md:text-xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Join a community that pushes limits, builds confidence and
              transforms lives. Starting fresh or leveling up, whatever level of
              fitness you're at, your journey begins here.
            </p>
            <div className="flex gap-4 mt-2 mx-auto xl:mx-0 items-center">
              <Link href="/contact">
                <Button
                  data-aos="fade-right"
                  data-aos-delay="300"
                  className="text-fog border border-crimson bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog transition-all duration-500 text-semibold hover:text-charcoal py-4 capitalize"
                >
                  join now
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  className="font-semibold bg-fog hover:bg-burntblue hover:text-fog text-charcoal py-4 transition-all duration-200"
                  data-aos="fade-left"
                  data-aos-delay="300"
                >
                  <span>Learn More</span>
                  <FaArrowRightLong />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* about section */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div
              className="flex flex-col gap-4 items-start"
              data-aos="fade-right"
            >
              <div>
                <h2 data-aos="fade-up">who we are</h2>
                <h3 data-aos="fade-right" data-aos-delay="100">
                  commited to fitness that lasts a lifetime
                </h3>
              </div>

              <p data-aos="fade-up" data-aos-delay="200">
                We're not just a gym, we're a community. Our mission is to help
                you train with purpose, push your limits, and become your
                strongest self inside and out. Come sweat with us, grow with us
                and become the strongest, fittest and best version of yourself
              </p>
              <div className="text-left">
                <Link href="/about">
                  <Button
                    data-aos="fade-right"
                    data-aos-delay="300"
                    className="border border-crimson bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog transition-all duration-500 text-semibold hover:text-charcoal capitalize"
                  >
                    learn more
                  </Button>
                </Link>
              </div>
            </div>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image
                src="/about.webp"
                alt="lady in gym"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* quick benefits section */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 data-aos="fade-up">our programs</h2>
            <h3
              className="capitalize"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Find the Right Fit for You
            </h3>
          </div>

          <p data-aos="fade-up" data-aos-delay="100">
            Discover a variety of workouts tailored to every fitness level and
            designed to keep you motivated, challenged, and on track toward your
            goals. Our programs are designed to challenge your body, strengthen
            your mind, and keep you motivated every step of the way.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-4">
            {benefits.map((data) => (
              <Card
                key={data.id}
                className="h-full flex flex-col justify-center items-center border-burntblue dark:border-darkblue rounded-xl"
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <CardContent className="flex flex-col gap-2 items-center">
                  <div className="text-xl md:text-2xl text-crimson">
                    {data.icon}
                  </div>
                  <h3 className="text-base">{data.title}</h3>
                  <p className="text-center">{data.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* our programs */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center pt-4">
            {/* image */}
            <div className="mx-auto">
              <Image
                src="/program.webp"
                alt="people working out"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-right"
              ></Image>
            </div>

            {/* text */}
            <div className="flex flex-col gap-4">
              <p data-aos="fade-up" data-aos-delay="100">
                At our gym, we offer a variety of workout programs designed to
                help you reach your goals and stay motivated. From strength and
                conditioning to HIIT and cardio burnouts, our sessions are built
                to challenge and inspire. You'll also find functional mobility,
                yoga and group fitness classes for a balanced approach, along
                with personal training and nutrition coaching to keep your
                progress on track inside and outside the gym.
              </p>

              <Link href={"/programs"} className="text-left">
                <Button
                  variant="outline"
                  className="border border-crimson bg-crimson dark:bg-crimson hover:bg-fog dark:hover:bg-fog hover:text-charcoal transition-all duration-500 uppercase font-semibold mx-auto"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* stats section */}
      <Stats />

      {/* testimonials section */}
      <Testimonials />

      {/* Limited offer section */}
      <div className="mt-10 lg:mt-20" style={offerbg}>
        <div className="w-full h-full py-10 px-4 sm:px-6 lg:px-8 bg-charcoal/40 text-fog">
          <div className="max-w-7xl mx-auto">
            <h2 className="capitalize text-darkblue">new member offer</h2>
            <div className="flex flex-col gap-2 justify-center text-fog">
              <p>
                Level up for less. Commit to ifitness gym today at a discounted
                price. We're not just offering a membership, we're starting a
                movement. Enjoy exclusive access to our programs, expert
                coaching, and next-level community. For new members, we offer
                these at a fraction of the price. This isn't your someday. This
                is your now.
              </p>
              <div>
                <h3>Join now and enjoy:</h3>
                <div className="flex gap-4">
                  <p className="">
                    A reduced monthly rate during your first 3 months
                  </p>
                  <IoIosCheckmarkCircle className="text-crimson text-xl" />
                </div>
                <div className="flex gap-4">
                  <p className="">
                    A complimentary personal training intro session
                  </p>
                  <IoIosCheckmarkCircle className="text-crimson text-xl" />
                </div>
                <div className="flex gap-4">
                  <p className="">
                    Special access to a members-only beginner bootcamp
                  </p>
                  <IoIosCheckmarkCircle className="text-crimson text-xl" />
                </div>
                <div className="flex gap-4">
                  <p className="">
                    Free entry to one of our signature group classes
                  </p>
                  <IoIosCheckmarkCircle className="text-crimson text-xl" />
                </div>
                <div className="flex gap-4">
                  <p className="">A post-workout smoothie on us</p>
                  <IoIosCheckmarkCircle className="text-crimson text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* schedule section */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div className="space-y-2">
              <h2>gym class schedule</h2>
              <p>
                Explore our weekly class schedule and find the perfect workout
                that fits your lifestyle. Whether you&apos;re into high-energy
                HIIT, calming yoga, or strength training, we&apos;ve got
                something for everyone. Our certified trainers lead structured
                sessions throughout the week, offering options for all fitness
                levels. Check the schedule below and plan your next workout with
                us.
              </p>
            </div>

            {/* image */}
            <div className="mx-auto">
              <Image
                src="/schedule.png"
                alt="training schedule table"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* newsletter */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="capitalize">Subscribe to our newsletter</h2>
          <p>
            Fuel your fitness journey with expert tips, exclusive offers, class
            updates, and community events—delivered straight to your inbox, no
            spam.
          </p>
          <div className="flex py-4">
            <input
              type="email"
              placeholder="enter your email"
              id="email"
              autoComplete="true"
              className="w-[40%] p-2 text-crimson border border-burntblue dark:border-darkblue"
            />
            <button type="submit" className="py-2 px-3 bg-crimson">
              Submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// bg-[url('/shattered-dark.png')] dark:bg-[url(/shattered.png)] bg-repeat

export default Home;
