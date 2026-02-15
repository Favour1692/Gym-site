import Image from "next/image";

const About = () => {
  return (
    <section className="overflow-x-hidden">
      {/* our story */}
      <div className="pt-[8vh] md:pt-[10vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="">about us</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* text */}
            <div
              className="flex flex-col gap-4 items-start"
              data-aos="fade-right"
            >
              <div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  our story
                </h2>
                <h3>our journey to redefine fitness</h3>
              </div>

              <p data-aos="fade-up" data-aos-delay="400">
                From Day One, It Was Never Just About Reps. We started this gym
                with a simple belief: fitness should feel like coming home. It
                should challenge you, uplift you, and bring you into a community
                that celebrates every drop of effort. What began as a small
                training space with a big dream has grown into a vibrant hub for
                people of all walks: newbies, heavy lifters, runners, yogis, and
                everyone in between. We believe strength comes in many forms;
                persistence, progress, and showing up even when it's hard.
                That's the energy we've built this place on. More than just
                equipment or classes, we're a space where people show up for
                themselves—and for each other. This is more than a gym. This is
                your start line. And we can't wait to see how far you'll go.
              </p>
            </div>
            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image
                src="/story.webp"
                alt="lady in gym"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_15px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* our mission */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* image */}
            <div className="mx-auto lg:mx-0 order-2 lg:order-1">
              <Image
                src="/mission.webp"
                alt="lady in gym"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>

            {/* text */}
            <div
              className="flex flex-col gap-4 items-start order-1 lg:order-2"
              data-aos="fade-right"
            >
              <div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  our mission
                </h2>
                <h3>driven by purpose</h3>
              </div>

              <p data-aos="fade-up" data-aos-delay="400">
                We're here to make fitness feel less intimidating and more like
                coming home. With expert coaching, supportive energy, and real
                results, we help people build strength that lasts inside and
                out.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our vision */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* text */}
            <div
              className="flex flex-col gap-4 items-start"
              data-aos="fade-right"
            >
              <div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  our vision
                </h2>
                <h3>shaping a future where everyone thrives in fitness</h3>
              </div>

              <p data-aos="fade-up" data-aos-delay="400">
                We envision a vibrant space where confidence is cultivated,
                limits are tested, and every win, big or small, is celebrated.
                From first-timers to long-timers, we're building a culture where
                progress is personal and everyone belongs.
              </p>
            </div>

            {/* image */}
            <div className="mx-auto lg:mx-0">
              <Image
                src="/vision.webp"
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

      {/* our team */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* image */}
            <div className="mx-auto lg:mx-0 order-2 lg:order-1">
              <Image
                src="/team.webp"
                alt="3 fitness coaches"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>

            {/* text */}
            <div
              className="flex flex-col gap-4 items-start order-1 lg:order-2"
              data-aos="fade-right"
            >
              <div>
                <h2 data-aos="fade-up" data-aos-delay="200">
                  meet our team
                </h2>
                <h3>driven by passion</h3>
              </div>

              <p data-aos="fade-up" data-aos-delay="400">
                More than trainers, we're your fitness family. Behind every rep
                and every milestone is a team that lives and breathes this
                lifestyle. Our coaches don't just guide you through workouts,
                they bring knowledge, accountability, and contagious energy into
                every session.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* our space */}
      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2>our space</h2>
          <div className="lg:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center py-10">
            {/* image1 */}
            <div className="">
              <Image
                src="/space1.webp"
                alt="our empty gym"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>

            {/* image2 */}
            <div className="">
              <Image
                src="/space2.webp"
                alt="our empty gym"
                width={500}
                height={333}
                className="rounded-2xl shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6]"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
