import Image from "next/image";

const Programs = () => {
  return (
    <section className="overflow-x-hidden">
      <div className="pt-[8vh] md:pt-[10vh] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1>our programs</h1>
          <div className="mt-4">
            <h2>programs for everyone</h2>
            <p className="text-balance">
              If you're here to build muscle, boost your stamina, drop a few
              pounds, or just feel better in your skin, we've got a program
              tailored for you. Each one is guided by experienced coaches and
              built to keep you motivated from day one.
            </p>
          </div>

          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* text */}
            <div className="flex flex-col gap-4 justify-center">
              <h3>our programs are designed to:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li className="marker:text-darkblue marker:text-2xl">
                  Meet you where you are, beginner or advanced
                </li>
                <li className="marker:text-darkblue marker:text-2xl">
                  Mix structure with flexibility so your routine works for you
                </li>
                <li className="marker:text-darkblue marker:text-2xl">
                  Keep training fresh with variety, challenges, and progression
                </li>
                <li className="marker:text-darkblue marker:text-2xl">
                  Support your goals with coaching, community, and care
                </li>
              </ul>
              <p>
                No generic plans, no guesswork. Just intentional training that
                gets results.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0">
              <Image
                src="/program2.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto rounded-[50%] lg:rounded-[50px] mx-auto lg:mx-0 shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2>program categories</h2>

          {/* strenght training */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div className="lg:order-2">
              <h3>strength training</h3>
              <p>
                Build muscle, boost confidence, and push past your limits. From
                foundational lifts to advanced techniques, our strength programs
                are designed to help you lift smarter, get stronger, and feel
                unstoppable.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0 lg:order-1">
              <Image
                src="/strenght.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>

          {/* mobility */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div>
              <h3>mobility and recovery</h3>
              <p>
                Train hard, recover harder. Stay flexible, prevent injuries, and
                improve overall movement with guided mobility sessions that
                leave you feeling recharged, not rundown.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0">
              <Image
                src="/mobility.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>

          {/* HIIT */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div className="lg:order-2">
              <h3>High-Intensity Intervals (HIIT)</h3>
              <p>
                Fat-burning focused and fast-paced, our HIIT workouts are short,
                sharp, and effective—perfect for breaking a sweat and torching
                calories without the time commitment.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0 lg:order-1">
              <Image
                src="/hiit.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>

          {/* coaching */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div>
              <h3>personal coaching</h3>
              <p>
                One-on-one sessions with certified coaches who tailor every
                workout to your needs, whether you're just starting out or
                training for something big.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0">
              <Image
                src="/coaching.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>

          {/* group */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div className="lg:order-2">
              <h3>group fitness</h3>
              <p>
                Sweat together, grow together. Feel the energy of the room with
                classes that turn effort into community. Think bootcamps, dance
                cardio, circuits, and more-fun workout activities.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0 lg:order-1">
              <Image
                src="/group.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>

          {/* nutrition */}
          <div className="pt-10 lg:pt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* text */}
            <div>
              <h3>nutrition and lifestyle coaching</h3>
              <p>
                Fitness doesn't stop at the gym. Learn how to fuel your body,
                form sustainable habits, and create balance in your routine with
                practical, personalized guidance.
              </p>
            </div>
            {/* image */}
            <div className="px-4 lg:px-0">
              <Image
                src="/nutrition.webp"
                alt="working out in gym"
                width={500}
                height={333}
                className="w-full sm:w-[80%] lg:w-[90%] h-auto mx-auto lg:mx-0 rounded-[50%] lg:rounded-[50px] shadow-[0_0_10px_#03486e] dark:shadow-[0_0_20px_#0568a6] object-cover"
                data-aos="zoom-in-left"
              ></Image>
            </div>
          </div>
        </div>
      </div>

      {/* faq and accordion here */}
    </section>
  );
};

export default Programs;
