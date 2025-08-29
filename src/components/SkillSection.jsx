import React, { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";
import {skills} from "../data/skill"; 


/* -- fallback logo */
const onImgError = (e) => {
  e.currentTarget.src =
    "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='sans-serif' font-size='10'%3Elogo%3C/text%3E%3C/svg%3E";
};

/* -- logo card */
function LogoCard({ img, name, isHovered, onHover, onLeave }) {
  return (
    <div
      className="relative group cursor-pointer"
      onMouseEnter={() => onHover(name)}
      onMouseLeave={onLeave}
    >
      
      {/* -- card */}
      <div
        className={`relative flex flex-col items-center justify-center
        px-4 py-5 sm:px-5 sm:py-6
        bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg
        transition-all duration-500 hover:bg-white/10 hover:border-white/20
        ${isHovered ? "scale-110 shadow-xl shadow-blue-500/10" : "scale-100"}`}
      >
        {/* -- logo */}
        <div className="relative mb-2 sm:mb-3">
          <div
            className={`absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-md transition-opacity duration-500 ${
              isHovered ? "opacity-10" : "opacity-0"
            }`}
          />
          <img
            src={img}
            alt={name}
            onError={onImgError}
            draggable={false}
            className="w-10 h-10 sm:w-14 sm:h-14 object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <span className="text-xs sm:text-sm font-medium text-slate-800 transition-colors duration-300 group-hover:text-blue-600">
          {name}
        </span>
      </div>
    </div>
  );
}

export default function SkillSection() {
  /* -- state */
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [speed1, setSpeed1] = useState(38); // -- marquee speed row 1
  const [speed2, setSpeed2] = useState(38); // -- marquee speed row 2
  const [play, setPlay] = useState(true);   // -- reduce motion

  /* -- mount fade-in */
  useEffect(() => setIsVisible(true), []);

  /* -- responsive speed */
  useEffect(() => {
    const apply = () => {
      const w = window.innerWidth;
      // -- lebih pelan di mobile biar smooth
      setSpeed1(w < 640 ? 26 : w < 1024 ? 34 : 40);
      setSpeed2(w < 640 ? 26 : w < 1024 ? 34 : 40);
    };
    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  /* -- prefers-reduced-motion */
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => setPlay(!m.matches);
    handler();
    m.addEventListener?.("change", handler);
    return () => m.removeEventListener?.("change", handler);
  }, []);

  /* -- derived */
  const reversed = [...skills].reverse();

  return (
    <section
      id="skill"
      className={`relative py-16 sm:py-20 lg:py-24 overflow-hidden transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* -- heading */}
        <header className="text-center mb-12 sm:mb-16">
          <span className="inline-block text-[11px] sm:text-xs font-semibold text-primary2 tracking-[0.18em] uppercase">
            Skill
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
          >
            Skills & <span className="bg-gradient-to-r from-primary2 to-purple-600 bg-clip-text text-transparent">Technology</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            A showcase of my technical skills and the tools I use to create impactful digital solutions.
          </p>
        </header>

        {/* -- marquee wrapper */}
        <div className="relative mb-12 sm:mb-16">
          {/* -- row 1 */}
          <div className="mb-8 sm:mb-10 relative">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 opacity-30" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 opacity-30" />
            <Marquee speed={speed1} gradient={false} pauseOnHover play={play} className="py-3 sm:py-4">
              <div className="flex items-center gap-5 sm:gap-8 px-2 sm:px-4">
                {skills.map((skill, i) => (
                  <LogoCard
                    key={`row1-${i}-${skill.name}`}
                    img={skill.img}
                    name={skill.name}
                    isHovered={hoveredSkill === skill.name}
                    onHover={setHoveredSkill}
                    onLeave={() => setHoveredSkill(null)}
                  />
                ))}
              </div>
            </Marquee>
          </div>

          {/* -- row 2 (reverse) */}
          <div className="mt-8 sm:mt-10 relative">
            <div className="absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10 opacity-30" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10 opacity-30" />
            <Marquee direction="right" speed={speed2} gradient={false} pauseOnHover play={play} className="py-3 sm:py-4">
              <div className="flex items-center gap-5 sm:gap-8 px-2 sm:px-4">
                {reversed.map((skill, i) => (
                  <LogoCard
                    key={`row2-${i}-${skill.name}`}
                    img={skill.img}
                    name={skill.name}
                    isHovered={hoveredSkill === skill.name}
                    onHover={setHoveredSkill}
                    onLeave={() => setHoveredSkill(null)}
                  />
                ))}
              </div>
            </Marquee>
          </div>
        </div>

        {/* -- skills grid (pills) */}
        <div className="text-center">
          <h3 className="text-sm sm:text-base font-medium text-slate-700 mb-6 sm:mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 max-w-3xl mx-auto">
            {Array.from(new Set(skills.map((s) => s.name))).map((name, i) => (
              <div
                key={`pill-${i}`}
                className="px-3.5 sm:px-4 py-2 sm:py-2.5 text-[11px] md:text-xs font-medium bg-putih text-dark border border-gray-300 rounded-xl transition-colors duration-200 hover:bg-accent2 hover:border-accent1 hover:text-white select-none"
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* -- reduce motion hard stop for CSS animations */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse-slow { animation: none !important; }
        }
      `}</style>
    </section>
  );
}