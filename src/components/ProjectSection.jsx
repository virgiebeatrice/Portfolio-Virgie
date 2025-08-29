import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { projects } from "../data/project";

export default function ProjectSection() {
  // -- embla setup
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    inViewThreshold: 0.7,
    dragFree: true,
  });

  // -- ui state
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  // -- actions
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i) => emblaApi && emblaApi.scrollTo(i), [emblaApi]);

  // -- onSelect
  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  // -- mount handlers
  useEffect(() => {
    if (!emblaApi) return;

    const handleWheel = (e) => {
      e.preventDefault();
      const amt = (e.deltaX !== 0 ? e.deltaX : e.deltaY) / 2;
      emblaApi.scrollBy(amt);
    };

    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });

    const container = emblaApi.rootNode();
    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // -- keyboard (←/→)
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "ArrowRight") scrollNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [scrollPrev, scrollNext]);

  return (
    <section
      id="project"
      className=
      "relative overflow-hidden py-14 sm:py-20 lg:py-14 px-4 sm:px-6 md:px-8 lg:px-16"
    >
      {/* header */}
      <div className="max-w-7xl w-full mx-auto relative z-10 text-center mb-10 md:mb-12">
        <span className="inline-block text-[11px] sm:text-xs font-semibold text-primary2 tracking-[0.18em] uppercase">
          Project
        </span>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          My <span className="bg-gradient-to-r from-primary2 to-purple-600 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          A selection of projects showcasing my skills and experience in web development.
        </p>
      </div>

      {/* carousel */}
      <div
        ref={emblaRef}
        className="overflow-hidden select-none py-2 sm:py-3 cursor-grab active:cursor-grabbing max-w-7xl w-full mx-auto"
      >
        <div className="flex -ml-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="pl-4 flex-[0_0_92%] xs:flex-[0_0_80%] sm:flex-[0_0_55%] lg:flex-[0_0_33%] xl:flex-[0_0_28%]"
            >
              <article className="h-full flex flex-col bg-putih rounded-3xl border border-gray-200 shadow-md hover:shadow-lg transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden">
                {/* image */}
                <div className="relative h-48 sm:h-56 md:h-60 overflow-hidden rounded-t-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                  {project.role && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-accent2 text-white text-[11px] font-medium rounded-full shadow-md">
                        {project.role}
                      </span>
                    </div>
                  )}
                </div>

                {/* body */}
                <div className="p-5 sm:p-6 flex-grow">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2.5">{project.title}</h3>
                  <p className="text-gray-700 text-sm md:text-[15px] mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech?.map((tech, i) => (
                      <span
                        key={`${project.id}-${tech}-${i}`}
                        className="px-2.5 py-1 text-[11px] md:text-xs font-medium bg-putih text-dark border border-gray-300 rounded-full transition-colors duration-200 hover:bg-accent2 hover:border-accent1 hover:text-white select-none"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* action */}
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 w-full justify-center px-4 py-2.5 rounded-lg font-medium bg-accent2 text-white hover:bg-accent2/80 transition-all duration-200 group"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* controls */}
      <div className="max-w-7xl w-full mx-auto mt-6 md:mt-8 flex items-center justify-between gap-4">
        {/* dots */}
        <div className="flex items-center gap-2">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                i === selectedIndex
                  ? "bg-accent2 scale-110"
                  : "bg-dark/20 hover:bg-accent2/60"
              }`}
            />
          ))}
        </div>

        {/* counter */}
        <div className="text-xs md:text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
          <span className="text-accent2 font-bold">{selectedIndex + 1}</span> /{" "}
          {scrollSnaps.length || projects.length}
        </div>

        {/* arrows */}
        <div className="flex gap-2">
          <button
            onClick={scrollPrev}
            disabled={!prevBtnEnabled}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
              prevBtnEnabled
                ? "bg-accent2 text-white hover:bg-accent2/80"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={!nextBtnEnabled}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors duration-200 cursor-pointer ${
              nextBtnEnabled
                ? "bg-accent2 text-white hover:bg-accent2/80"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
