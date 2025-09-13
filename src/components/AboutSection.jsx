import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import ImageCard from "./ImageCard";
import Photo1 from "../assets/820DD6E5-29A4-48C5-98C5-B0C41DA99877.JPG";
import Photo2 from "../assets/WhatsApp Image 2025-09-11 at 19.36.37_0c3b99aa.jpg";
import Photo3 from "../assets/WhatsApp Image 2025-09-11 at 19.36.36_77dfe397.jpg";

/* -- data */
const profileImages = [
  Photo1,
  Photo2,
  Photo3,
];
const aboutmeText = "I’m a curious and creative developer who loves exploring machine learning, data science, mobile apps, and UI/UX design. I enjoy solving problems, whether it’s something big or just the little everyday stuff and turning them into simple meaningful solutions. For me, tech isn’t just about coding, it’s about making life a bit better (and more fun)";
const WORDS = ["Machine Learning", "Data Science", "Mobile Development", "UI/UX Design", "Problem Solving"];
const hrefLinkedin = "https://www.linkedin.com/in/virgie-beatrice-a13167280/";
const hrefGithub = "https://github.com/virgiebeatrice";
const hrefCv = "https://drive.google.com/file/d/1WwAv6l1m7JUCZ4YuhndWVmVMrAV9QMXB/view?usp=sharing";

/* -- motion variants */
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { delayChildren: 0.2, staggerChildren: 0.1 } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function AboutSection() {
  /* -- refs & state */
  const constraintsRef = useRef(null);
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <section
      id="about"
      className="
        relative overflow-hidden
        scroll-mt-28
        py-14 sm:py-20 lg:py-24
        px-4 sm:px-6 md:px-8 lg:px-16
      "
      aria-labelledby="about-heading"
    >

      {/* -- section header */}
      <div className="max-w-6xl mx-auto text-center mb-12 sm:mb-16">
        <span className="inline-block text-[11px] sm:text-xs font-semibold text-primary2 tracking-[0.18em] uppercase">
          About
        </span>
        <h2
          id="about-heading"
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-3 sm:mb-4"
        >
          About <span className="bg-gradient-to-r from-primary2 to-primary bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Get to know me and my journey as a developer.
        </p>
      </div>

      {/* -- content card */}
      <motion.div
        className="
          relative z-10
          w-full max-w-6xl mx-auto
          grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12
          bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50
          px-5 sm:px-8 md:px-10 lg:px-12
          py-8 sm:py-10 md:py-12
        "
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* -- image column */}
        <motion.div
          className="order-2 lg:order-1 flex flex-col items-center lg:items-start"
          variants={fadeInLeft}
        >
          {/* -- image frame */}
          <motion.div
            className="
              relative
              w-[min(88vw,320px)] h-[420px]
              sm:w-[min(70vw,340px)] sm:h-[460px]
              md:w-[360px] md:h-[500px]
              lg:w-[380px] lg:h-[520px]
            "
            ref={constraintsRef}
            variants={fadeInUp}
            aria-label="Profile images carousel"
          >
            {/* -- carousel */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg">
              <AnimatePresence initial={false}>
                <ImageCard
                  key={imageIndex}
                  image={profileImages[imageIndex]}
                  index={imageIndex}
                  setIndex={setImageIndex}
                  totalImages={profileImages.length}
                  frontCard={true}
                />
                <ImageCard
                  key={(imageIndex + 1) % profileImages.length}
                  image={profileImages[(imageIndex + 1) % profileImages.length]}
                  frontCard={false}
                />
              </AnimatePresence>
            </div>

            {/* -- dots */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
              {profileImages.map((_, i) => (
                <motion.button
                  key={i}
                  className={`size-2.5 rounded-full transition-all duration-300 ${
                    i === imageIndex ? "bg-accent2 scale-110" : "bg-dark/20"
                  }`}
                  onClick={() => setImageIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            {/* -- drag hint */}
            <motion.div
              className="hidden sm:block absolute -bottom-12 left-0 right-0 text-center text-dark/50 text-sm font-medium"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              ← Drag to change photo →
            </motion.div>
          </motion.div>
        </motion.div>

        {/* -- text column */}
        <motion.div className="order-1 lg:order-2" variants={fadeInRight}>
          {/* -- heading + typewriter */}
          <div className="mb-6 md:mb-8">
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-dark leading-tight"
              variants={fadeInUp}
            >
              Hi, I'm <span className="text-accent2">Virgie Beatrice</span>
            </motion.h3>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-dark mt-3 sm:mt-4 font-medium"
              variants={fadeInUp}
            >
              I'm passionate about{" "}
              <span className="text-accent2 font-semibold">
                <Typewriter
                  words={WORDS}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>
            </motion.p>

            <motion.p
              className="
                text-[0.95rem] sm:text-base md:text-lg text-dark
                leading-relaxed mt-5 md:mt-6
                text-justify md:text-left
              "
              variants={fadeInUp}
            >
              {aboutmeText}
            </motion.p>
          </div>

          {/* -- actions */}
          <motion.div className="flex flex-wrap gap-3 sm:gap-4" variants={fadeInUp}>
            {/* -- linkedin */}
            <motion.a
              href={hrefLinkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 sm:px-6 py-2.5 rounded-full
                bg-accent2 text-white font-semibold
                shadow-lg hover:shadow-xl hover:bg-accent2/90
                transition-all duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-acbg-accent2/30
                hover:scale-[1.02] active:scale-95
              "
              aria-label="Open LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              <span>LinkedIn</span>
            </motion.a>

            {/* -- github */}
            <motion.a
              href={hrefGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 sm:px-6 py-2.5 rounded-full
                bg-dark text-white font-semibold
                shadow-lg hover:shadow-xl hover:bg-dark/90
                transition-all duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-dark/30
                hover:scale-[1.02] active:scale-95
              "
              aria-label="Open GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </motion.a>

            {/* -- cv */}
            <motion.a
              href={hrefCv}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-5 sm:px-6 py-2.5 rounded-full
                bg-secondary text-white font-semibold
                shadow-lg hover:shadow-xl hover:bg-secondary/90
                transition-all duration-200
                focus:outline-none focus-visible:ring-4 focus-visible:ring-sebg-secondary/30
                hover:scale-[1.02] active:scale-95
              "
              aria-label="Download CV"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span>Open CV</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* -- reduce-motion */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; transition-duration: 0.001ms !important; }
        }
      `}</style>
    </section>
  );
}
