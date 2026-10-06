import Image from 'next/image';

export default function About() {
  const features = [
    {
      title: 'Frontend Development',
      description: 'Building responsive, accessible web applications.',
      icon: (
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
          />
        </svg>
      ),
    },
    {
      title: 'UI Engineering',
      description: 'Turning thoughtful designs into polished interfaces.',
      icon: (
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.06 9.06 0 0112 15a9.06 9.06 0 01-6.23-.693L4.2 13.9M19.8 15.3A2.25 2.25 0 0122.5 17.5v1.875a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 19.375V17.5a2.25 2.25 0 012.7-2.2"
          />
        </svg>
      ),
    },
    {
      title: 'Creative Thinking',
      description: 'Combining creativity and technology to solve problems.',
      icon: (
        <svg
          className="w-5 h-5 text-zinc-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 border-t border-zinc-900 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto space-y-10">
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

        {/* Responsive Grid: Stacks Image first on Mobile, Side-by-Side on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-4">
          {/* Image Container: Rendered first on mobile using order-first */}
          <div className="order-first lg:order-last relative w-full max-w-md mx-auto lg:max-w-none aspect-[3/4] h-[480px] sm:h-[540px] overflow-hidden rounded-3xl border border-white/10 bg-neutral-900">
            <Image
              src="/profile.jpeg"
              alt="Babatunde Sunday"
              fill
              priority
              className="object-cover object-[center_20%]"
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
                <p className="text-xs text-white">
                  UI/UX & Creative Engineering
                </p>
              </div>
            </div>
          </div>

          {/* Text Content: Rendered second on mobile using order-last */}
          <div className="order-last lg:order-first space-y-8">
            <div className="space-y-4 text-zinc-300 text-base leading-relaxed">
              <p>
                I am Babatunde Sunday, a front-end developer, UI/UX designer,
                and brand strategist building clean, high-performance web
                applications.
              </p>
              <p>
                With an engineering background from The Polytechnic, Ibadan, I
                combine structured technical execution with a sharp eye for
                visual aesthetics and user experience.
              </p>
            </div>

            {/* Feature List Section */}
            <div className="space-y-6 pt-4 border-t border-zinc-900">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 pb-6 border-b border-zinc-900 last:border-0 last:pb-0"
                >
                  <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800 shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Education Badge */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 space-y-2">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                Education
              </span>
              <h4 className="text-base font-bold text-white">
                HND in Computer Engineering
              </h4>
              <p className="text-xs text-emerald-400 font-medium">
                Upper Credit
              </p>
              <p className="text-xs text-zinc-400">The Polytechnic, Ibadan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
