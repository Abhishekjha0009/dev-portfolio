export default function Navbar({ name }) {
  const links = ["About", "Skills", "Projects", "Contact"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f13]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <span className="font-display text-xl font-bold text-white tracking-tight">
          {name}<span className="text-violet-400">.</span>
        </span>

        {/* Nav Links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-[#a0a0b8] hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block px-4 py-2 text-sm bg-violet-500 hover:bg-violet-400 text-white rounded-lg transition-colors duration-200"
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
}
