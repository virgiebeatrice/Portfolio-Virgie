import React from "react";
import { ExperienceTimeline } from "./ExperienceTimeline";
import { experiences } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="
        py-14 sm:py-20 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-16
        scroll-mt-28
      "
      aria-labelledby="experience-heading"
    >
      {/* -- header */}
      <div className="max-w-6xl w-full mx-auto text-center mb-12 sm:mb-16">
        <span className="inline-block text-[11px] sm:text-xs font-semibold text-primary2 tracking-[0.18em] uppercase">
          Experience
        </span>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          My <span className="bg-gradient-to-r from-primary2 to-purple-600 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A timeline of my professional journey, showcasing my growth and achievements in the tech industry.
        </p>
      </div>

      {/* -- timeline */}
      <div className="max-w-6xl w-full mx-auto">
        <ExperienceTimeline data={experiences} />
      </div>
    </section>
  );
}
