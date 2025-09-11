import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ExperienceTimeline({ data = [] }) {
  // -- refs & progress
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // -- rail progress
  const lineProgress = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      ref={containerRef}
      className="relative max-w-5xl mx-auto"
      aria-roledescription="timeline"
    >
      {/* -- rail (center on mobile, left on md+) */}
      <div
        className="
          absolute top-0 bottom-0 w-[3px]
          left-1/2 -translate-x-1/2
          md:left-7 md:translate-x-0
          bg-gradient-to-b from-accent2/25 to-accent2/25
        "
        aria-hidden="true"
      >
        <motion.div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent1 to-accent2 origin-top"
          style={{ scaleY: lineProgress }}
        />
      </div>

      {/* -- items */}
      <div className="space-y-10 sm:space-y-12 md:space-y-16 pl-0 md:pl-4">
        {data.map((item, index) => {
          // -- dot scale
          const dotProgress = useTransform(
            scrollYProgress,
            [index / Math.max(1, data.length), (index + 0.5) / Math.max(1, data.length)],
            [0, 1]
          );

          return (
            <motion.div
              key={`${item.title}-${index}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, margin: "-120px" }}
              className="relative"
              role="group"
              aria-label={`${item.year || ""} ${item.month || ""} — ${item.title}`}
            >
              <div
                className="
                  grid grid-cols-1 md:grid-cols-[auto_1fr] md:items-start
                  gap-4 md:gap-6
                "
              >
                {/* -- dot + date (center on mobile) */}
                <div
                  className="
                    flex md:block items-center justify-center
                    md:justify-start
                  "
                >
                  <div className="flex items-center md:items-start">
                    {/* -- dot */}
                    <motion.div
                      className="
                        relative w-6 h-6 flex items-center justify-center
                        translate-x-0 md:translate-x-0
                        -ml-[1px] md:ml-0
                      "
                      style={{ scale: dotProgress }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      aria-hidden="true"
                    >
                      <motion.div
                        className="
                          w-5 h-5 bg-gradient-to-r from-accent1 to-accent2
                          rounded-full border-2 border-white shadow-lg z-10
                        "
                        animate={{
                          boxShadow: [
                            "0 0 0 0 rgba(255,138,101,0.35)",
                            "0 0 0 8px rgba(255,138,101,0.10)",
                            "0 0 0 0 rgba(255,138,101,0.0)",
                          ],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 1.2,
                          delay: index * 0.25,
                        }}
                      />
                    </motion.div>
                  </div>
                </div>

                {/* -- card */}
                <article
                  className="
                    flex flex-col md:flex-row w-full items-stretch
                    bg-gradient-to-br from-white to-gray-50
                    rounded-xl shadow-lg border border-gray-200
                    overflow-hidden hover:shadow-xl
                    transition-all duration-300 hover:-translate-y-1
                    group
                  "
                >
                  {/* -- media */}
                  <div className="relative w-full md:w-56 md:shrink-0 md:self-stretch
                    h-40 sm:h-48 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  {/* -- body */}
                  <div className="p-5 sm:p-6">
                    {/* -- meta */}
                    <div className="flex text-xs sm:text-sm text-gray-500">
                      <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{item.duration}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-accent2 transition-colors duration-300">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-semibold mb-2 text-gray-800 transition-colors duration-300">
                      {item.at}
                    </p>

                    <p className="text-gray-600 text-sm sm:text-[15px] mb-4">
                      {item.description}
                    </p>

                    {/* -- tags */}
                    {Array.isArray(item.tech) && item.tech.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {item.tech.map((tech, techIndex) => (
                          <span
                            key={`${tech}-${techIndex}`}
                            className="
                              px-2.5 py-1 text-[11px] md:text-xs font-medium bg-putih text-dark border border-gray-300 rounded-full transition-colors duration-200 hover:bg-accent2 hover:border-accent1 hover:text-white select-none
                            "
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* -- reduce motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>
    </div>
  );
}
