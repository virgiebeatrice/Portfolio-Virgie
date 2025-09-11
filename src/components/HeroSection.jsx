import React from "react";
import { motion } from "framer-motion";

/* -- variants */
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.12 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 60, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const sparkle = {
  animate: { scale: [1, 1.2, 1], opacity: [0.4, 1, 0.4], transition: { duration: 2.2, repeat: Infinity, ease: "easeInOut" } },
};


export default function HeroSection() {
  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <main
      id="hero"
      className="
        relative overflow-hidden
        min-h-[calc(100vh-4rem)]           
        sm:min-h-[calc(100vh-5.5rem)]      
        flex items-center justify-center
        pt-24 sm:pt-28
        scroll-mt-28
      "
    >
      {/* -- deco  */}
      <motion.div
        variants={sparkle}
        animate="animate"
        className="hidden sm:block absolute top-[22%] left-[18%] w-3 h-3 bg-white rounded-full opacity-60"
      />
      <motion.div
        variants={sparkle}
        animate="animate"
        className="hidden sm:block absolute top-[30%] right-[22%] w-2 h-2 bg-white rounded-full opacity-40"
        transition={{ delay: 0.4 }}
      />
      <motion.div
        variants={sparkle}
        animate="animate"
        className="hidden sm:block absolute bottom-[26%] left-[28%] w-4 h-4 bg-white rounded-full opacity-30"
        transition={{ delay: 0.9 }}
      />

      {/* -- container */}
      <motion.section
        className="relative z-10 w-full max-w-7xl px-5 sm:px-8 lg:px-12 xl:px-20"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="min-h-[70vh] md:min-h-[78vh] flex flex-col items-center justify-center text-center">
          {/* -- greeting */}
          <motion.div variants={fadeInUp} className="mb-4 sm:mb-5">
            <span
              className="
                inline-block px-4 py-2 rounded-full border
                text-xs sm:text-sm md:text-base font-medium
                bg-dark/30 border-dark/40 backdrop-blur-sm text-dark
              "
            >
              👋 Hello, Welcome to my Portfolio
            </span>
          </motion.div>

          {/* -- title */}
          <motion.h1
            variants={fadeInUp}
            className="
              font-black font-second leading-[1.05]
              text-4xl xs:text-[2.6rem] sm:text-6xl lg:text-7xl
              tracking-tight mb-4 sm:mb-6
            "
          >
            <span className="block text-dark">Where ideas meet code</span>
            <span className="block text-primary">and technology </span>
            <span className="block text-secondary">meets people.</span>
          </motion.h1>

          {/* -- subtitle */}
          <motion.p
            variants={fadeInUp}
            className="
              text-[0.95rem] sm:text-base md:text-lg lg:text-xl
              text-dark/80 leading-relaxed
              max-w-[46ch] sm:max-w-2xl md:max-w-5xl mx-auto mb-6 sm:mb-8
              px-1
            "
          >
            More than just writing code, I believe in crafting experiences that inspire and empower people. From intelligent data-driven systems to intuitive mobile apps and modern web platforms, I thrive on merging technology with leadership and storytelling making ideas not only work, but shine.
          </motion.p>

          {/* -- ctas */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 w-full sm:w-auto">
            <motion.a
              href="https://www.linkedin.com/in/virgie-beatrice-a13167280/"
              target="_blank"
              className="
                w-full sm:w-auto text-center
                bg-primary2 text-white px-7 sm:px-8 py-3 rounded-full font-semibold
                shadow-lg hover:bg-primary2/90 transition-all duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-primary2/30
                hover:scale-[1.02] active:scale-95
              "
            >
              Let's Connect
            </motion.a>

            <motion.a
              href="#project"
              onClick={handleClick("project")}
              className="
                w-full sm:w-auto text-center
                bg-dark/10 border-2 border-dark/15 hover:border-dark/35
                backdrop-blur-sm text-dark px-7 sm:px-8 py-3 rounded-full font-semibold
                hover:bg-dark/15 transition-all duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-dark/30
                hover:scale-[1.02] active:scale-95
              "
            >
              My Project
            </motion.a>
          </motion.div>

          {/* -- scroll indicator  */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.6 }}
            className="hidden sm:block absolute bottom-6 sm:bottom-1 left-1/2 -translate-x-1/2"
          >
            <motion.div
              className="flex flex-col items-center text-dark"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[10px] sm:text-xs font-medium mb-2">Scroll to explore</span>
              <div className="w-0.5 h-4 bg-gradient-to-b from-dark to-dark rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* -- motion-reduce */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-remove-motion] { animation: none !important; transition: none !important; }
        }
      `}</style>
    </main>
  );
}
