import { ArrowDown, Download } from "lucide-react";

export default function Hero({ name, title, tagline, resumeLink }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">

        <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-4 animate-fadeUp">
          👋 Hello, I'm
        </p>

        <h1
          className="font-display text-6xl md:text-8xl font-extrabold text-white leading-none mb-4 animate-fadeUp"
          style={{ animationDelay: "0.1s" }}
        >
          {name}
        </h1>

        <h2
          className="text-2xl md:text-3xl font-semibold text-violet-300 mb-6 animate-fadeUp"
          style={{ animationDelay: "0.2s" }}
        >
          {title}
        </h2>

        <p
          className="text-[#a0a0b8] text-lg md:text-xl max-w-xl mx-auto mb-10 animate-fadeUp"
          style={{ animationDelay: "0.3s" }}
        >
          {tagline}
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeUp"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-500 hover:bg-violet-400 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105"
          >
            View My Work
          </a>
          <a
            href={resumeLink}
            className="px-8 py-3 border border-white/20 hover:border-violet-400 text-white font-semibold rounded-xl flex items-center gap-2 justify-center transition-all duration-200 hover:scale-105"
          >
            <Download size={16} /> Download CV
          </a>
        </div>
      </div>

      {/* Scroll down */}
      <a
        href="#about"
        className="absolute bottom-10 animate-bounce text-[#a0a0b8] hover:text-white"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
