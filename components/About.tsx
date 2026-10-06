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
        {/* Container with portrait aspect ratio and controlled height */}
        <div className="relative w-full max-w-md mx-auto aspect-[3/4] h-[450px] md:h-[550px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
          <Image
            src="/profile.jpeg" // replace with your photo path
            alt="Babatunde Sunday"
            fill
            priority
            className="object-cover object-[center_20%] scale-100"
          />

          {/* Badges Overlay */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-2 z-10">
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                THE DEVELOPER
              </p>
              <h3 className="text-sm font-semibold text-white">
                Babatunde Sunday
              </h3>
            </div>
            <div className="bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10">
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">
                CURRENTLY EXPLORING
              </p>
              <p className="text-xs text-white">UI/UX & Creative Engineering</p>
            </div>
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
