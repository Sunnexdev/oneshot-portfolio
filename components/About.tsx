import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 border-t border-zinc-900 bg-zinc-950"
    >
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Subtitle Line */}
        <div className="flex items-center space-x-3 text-xs tracking-widest text-zinc-500 uppercase font-semibold">
          <span className="w-8 h-[1px] bg-zinc-700" />
          <span>A Little About Me</span>
        </div>

        {/* Section Headline */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Beyond the{' '}
          <span className="font-serif italic font-normal text-zinc-400">
            code.
          </span>
        </h2>

        {/* Image Card Container */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-zinc-800/80 bg-zinc-900/60 shadow-2xl">
          {/* Main Photo */}
          <div className="relative w-full h-[420px] sm:h-[520px]">
            <Image
              src="/profile.jpeg"
              alt="Babatunde Sunday"
              fill
              className="object-cover object-center"
              priority
            />

            {/* Gradient Overlay for Readable Text */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent" />
          </div>

          {/* Overlaid Bottom Text (Left Side) */}
          <div className="absolute bottom-6 left-6 sm:left-8 z-10 space-y-1">
            <span className="text-[10px] sm:text-xs tracking-widest text-zinc-400 uppercase font-bold">
              THE DEVELOPER
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Babatunde Sunday
            </h3>
          </div>

          {/* Floating Badge (Bottom Right) */}
          <div className="absolute bottom-6 right-6 z-10 bg-zinc-900/90 border border-zinc-800 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl space-y-0.5">
            <span className="text-[9px] sm:text-[10px] tracking-widest text-zinc-400 uppercase font-bold block">
              CURRENTLY EXPLORING
            </span>
            <p className="text-xs sm:text-sm font-semibold text-white">
              UI/UX & Creative Engineering
            </p>
          </div>
        </div>

        {/* Detailed Bio & Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
            <p>
              I am a front-end developer, UI/UX designer, and brand strategist
              building clean, high-performance web applications.
            </p>
            <p>
              With an engineering background from The Polytechnic, Ibadan, I
              combine structured technical execution with a sharp eye for visual
              aesthetics and user experience.
            </p>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-3">
            <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Education
            </span>
            <h4 className="text-base font-bold text-white">
              HND in Computer Engineering
            </h4>
            <p className="text-xs text-emerald-400 font-medium">Upper Credit</p>
            <p className="text-xs text-zinc-400">The Polytechnic, Ibadan</p>
          </div>
        </div>
      </div>
    </section>
  );
}
