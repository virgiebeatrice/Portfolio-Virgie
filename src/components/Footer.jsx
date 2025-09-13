import logo from "../assets/piaijeii.png";

export default function Footer() {
  /* -- data */
  const hrefLinkedin = "https://www.linkedin.com/in/virgie-beatrice-a13167280/";
  const hrefGithub = "https://github.com/virgiebeatrice";
  const hrefInstagram = "https://www.instagram.com/virgiebeatrice/";
  
  /* -- actions */
  const handleClick = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
  return (
    <footer className=" bg-gradient-to-b from-white/95 to-secondary/20 backdrop-blur-sm shadow-md text-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        {/* -- top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* -- brand */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Virgie Beatrice"
                className="w-12 h-12 object-cover rounded-lg"
              />
              <span className="text-lg font-semibold text-dark">
                Virgie Beatrice
              </span>
            </div>
          </div>

          {/* -- nav */}
          <nav aria-label="Footer" className="sm:mx-auto">
            <h3 className="text-sm font-semibold text-black mb-3">
              Navigate
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#hero"
                  onClick={handleClick("hero")}
                  className="rounded hover:text-black text-dark"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={handleClick("about")}
                  className="rounded hover:text-black text-dark"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#project"
                  onClick={handleClick("project")}
                  className="rounded hover:text-black text-dark"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  onClick={handleClick("experience")}
                  className="rounded hover:text-black text-dark"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skill"
                  onClick={handleClick("skill")}
                  className="rounded hover:text-black text-dark"
                >
                  Skills
                </a>
              </li>
            </ul>
          </nav>

          {/* -- connect */}
          <div className="md:justify-self-end">
            <h3 className="text-sm font-semibold text-black mb-3">
              Connect
            </h3>
            <ul className="flex items-center gap-3">
              <li>
                <a
                  href={hrefGithub}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2 rounded-md"
                >
                  {/* -- github */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.85 10.95c.57.1.78-.25.78-.56v-2.1c-3.19.69-3.86-1.37-3.86-1.37-.52-1.31-1.27-1.66-1.27-1.66-1.04-.71.08-.69.08-.69 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.73 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.6.23 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.04.77 2.11v3.12c0 .31.2.67.78.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" clipRule="evenodd"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={hrefLinkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2 rounded-md "
                >
                  {/* -- linkedin */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.5h5V24H0V8.5zm8.5 0H13v2.03h.07c.63-1.2 2.17-2.39 4.46-2.39 4.77 0 5.64 3.08 5.64 7.11V24h-5v-6.9c0-1.85-.03-4.22-2.66-4.22-2.66 0-3.07 2.02-3.07 4.08V24h-5V8.5z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href={hrefInstagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2 rounded-md "

                >
                  {/* -- instagram */}
                  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 3.5a5.5 5.5 0 1 1 0 11.001A5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 12 16a3.5 3.5 0 0 0 0-7zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/>
                  </svg>
                </a>
              </li>
            </ul>

            {/* -- email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=virgielimbong@gmail.com"
              className="inline-flex items-center gap-2 mt-4 px-3 py-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300"
              target="_blank"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.35l-10 5.9-10-5.9V6Zm0 2.58V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.58l-9.34 5.51a2 2 0 0 1-2.32 0L2 8.58Z"/>
              </svg>
              Email me
            </a>
          </div>
        </div>

        {/* -- bottom */}
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 Virgie Beatrice. All rights reserved.</p>

        </div>
      </div>
    </footer>
  );
}
