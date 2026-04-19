export default function About({ text }) {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Left: Decorative heading */}
        <div className="relative">
          <span className="font-display text-[160px] font-extrabold text-white/5 leading-none select-none absolute -top-8 -left-4">
            01
          </span>
          <div className="relative z-10">
            <p className="text-violet-400 text-sm font-medium tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
              Crafting digital<br />experiences with care.
            </h2>
          </div>
        </div>

        {/* Right: Bio + Stats */}
        <div>
          {text.split("\n").map((para, i) => (
            <p key={i} className="text-[#a0a0b8] text-lg leading-relaxed mb-4">
              {para}
            </p>
          ))}

          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { value: "Fresher", label: "Experience" },
              { value: "1+", label: "Projects" },
              { value: "Learning", label: "Status" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
              >
                <p className="font-display text-3xl font-bold text-violet-400">
                  {stat.value}
                </p>
                <p className="text-xs text-[#a0a0b8] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}