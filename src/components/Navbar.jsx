import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/piaijeii.png";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "project", label: "Project" },
  { id: "experience", label: "Experience" },
  { id: "skill", label: "Skill" },
];

export default function Navbar() {
  // -- state
  const [active, setActive] = useState(null);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastY = useRef(0);

  // -- actions
  const closeMenu = () => setOpen(false);
  const handleClick = (id) => (e) => {
    e.preventDefault();
    setHidden(true);
    closeMenu();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // -- scroll spy + hide on scroll
  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id);
    const getActive = () => {
      const offset = 100;
      const scrollY = window.pageYOffset;
      const goingDown = scrollY > lastY.current;
      const delta = Math.abs(scrollY - lastY.current);
      if (scrollY > 120 && goingDown && delta > 4) setHidden(true);
      else if (!goingDown && delta > 4) setHidden(false);
      lastY.current = scrollY;

      let current = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop - offset;
        if (scrollY >= top) current = id;
      }
      setActive(current);
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    window.addEventListener("resize", getActive);
    return () => {
      window.removeEventListener("scroll", getActive);
      window.removeEventListener("resize", getActive);
    };
  }, []);

  // -- responsive close
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 640) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // -- esc close
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // -- helpers
  const underlineClass = (id) =>
    `absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-primary2 to-primary transition-all duration-200 ${
      active === id && id !== "hero" ? "w-full opacity-100" : "w-0 opacity-0"
    }`;

  return (
    <motion.nav
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed top-2 left-1/2 -translate-x-1/2 z-[60] w-full max-w-[1400px] px-3 sm:px-6 overflow-hidden"
    >
      {/* -- bar */}
      <motion.div
        animate={{ y: hidden ? -80 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 320, damping: 26 }}
        className="
          flex items-center justify-between rounded-2xl 
          bg-gradient-to-br from-white/95 to-secondary/10 backdrop-blur-sm shadow-md
          px-4 py-2                
          sm:px-8 sm:py-4          
          text-primary
        "
      >
        {/* -- logo */}
        <a
          href="#hero"
          onClick={handleClick("hero")}
          className="flex items-center gap-2 font-second text-primary hover:text-secondary transition-colors"
        >
          <img className="w-8 h-8 sm:w-9 sm:h-9" src={logo} alt="Virgie Beatrice" />
          <div className="hidden sm:flex flex-col leading-none font-bold">
            <span>Virgie</span>
            <span>Beatrice</span>
          </div>
        </a>

        {/* -- desktop nav */}
        <ul className="hidden sm:flex gap-6 md:gap-8 font-semibold">
          {NAV_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`relative pb-1 cursor-pointer select-none transition-colors ${
                active === item.id && item.id !== "hero"
                  ? "text-primary"
                  : "hover:text-secondary"
              }`}
            >
              <a href={`#${item.id}`} onClick={handleClick(item.id)}>
                {item.label}
              </a>
              <span className={underlineClass(item.id)} />
            </li>
          ))}
        </ul>

        {/* -- burger */}
        <button
          className="
            sm:hidden size-10 inline-flex items-center justify-center 
            bg-transparent p-0 rounded-full
            active:scale-[0.98] transition
          "
          aria-label="Toggle menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {/* -- icon */}
          <div className="relative w-6 h-6">
            {/* Top line */}
            <span className={`
              absolute left-1/2 top-1/2 block w-6 h-0.5 
              -translate-x-1/2 -translate-y-1/2 
              bg-gray-800 rounded-full 
              transition-all duration-300 ease-in-out origin-center
              ${open 
                ? "rotate-45 translate-y-0" 
                : "-translate-y-2"
              }
            `} />
            
            {/* Middle line */}
            <span className={`
              absolute left-1/2 top-1/2 block w-6 h-0.5 
              -translate-x-1/2 -translate-y-1/2 
              bg-gray-800 rounded-full 
              transition-all duration-300 ease-in-out
              ${open ? "opacity-0 scale-0" : "opacity-100 scale-100"}
            `} />
            
            {/* Bottom line */}
            <span className={`
              absolute left-1/2 top-1/2 block w-6 h-0.5 
              -translate-x-1/2 -translate-y-1/2 
              bg-gray-800 rounded-full 
              transition-all duration-300 ease-in-out origin-center
              ${open 
                ? "-rotate-45 translate-y-0" 
                : "translate-y-2"
              }
            `} />
          </div>
        </button>
      </motion.div>

      {/* -- drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            key="drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="sm:hidden mt-2 px-3"
          >
            <div className="rounded-2xl bg-white/95 backdrop-blur-md shadow-lg p-2">
              <ul className="flex flex-col divide-y divide-black/5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={handleClick(item.id)}
                      className={`flex items-center justify-between py-3 px-3 rounded-xl text-base font-medium active:scale-[0.99] transition ${
                        active === item.id && item.id !== "hero"
                          ? "text-primary"
                          : "text-gray-800"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`ml-3 h-[2px] rounded-full bg-gradient-to-r from-primary2 to-primary transition-all ${
                          active === item.id && item.id !== "hero"
                            ? "w-6 opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
