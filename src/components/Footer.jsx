import { Github, Linkedin, Heart } from "lucide-react";

export default function Footer({ name, github, linkedin }) {
  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <p className="text-[#a0a0b8] text-sm flex items-center gap-1">
          Built with{" "}
          <Heart size={14} className="text-violet-400" fill="currentColor" />{" "}
          by <span className="text-white font-medium">{name}</span>{" "}
          &copy; {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0b8] hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a0a0b8] hover:text-violet-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
}
