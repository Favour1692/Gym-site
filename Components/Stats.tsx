"use client";

import React from "react";
import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="pt-10 lg:pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2>Our Stats</h2>
        <p>Numbers don't lie!</p>
        <div className="w-[90%] md:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-4 sm:place-items-center gap-4">
          <div className="dark:text-burnt">
            <CountUp
              end={50}
              duration={4}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-crimson"
            />
            +<h3>Active members</h3>
          </div>
          <div className="text-lg dark:text-burnt">
            <CountUp
              end={10}
              duration={4}
              delay={1}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-crimson"
            />
            <h3>Certified trainers</h3>
          </div>
          <div className="text-lg dark:text-burnt">
            <CountUp
              end={12}
              duration={4}
              delay={2}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-crimson"
            />
            +<h3>Unique programs</h3>
          </div>
          <div className="text-lg dark:text-burnt">
            <CountUp
              end={92}
              duration={4}
              delay={3}
              enableScrollSpy
              scrollSpyDelay={100}
              className="text-4xl md:text-5xl text-crimson"
            />
            %<h3>Client satisfaction</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
