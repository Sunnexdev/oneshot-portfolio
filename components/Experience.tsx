const experiences = [
  {
    role: 'Freelance Front-End Developer & UI Designer',
    company: 'Independent Practice',
    period: '2024 — Present',
    description:
      'Designing and building custom client web applications, developing UI component libraries, creating brand identity assets, and optimizing web performance.',
  },
  {
    role: 'Front-End Developer & Marketing Designer',
    company: 'Bantumarketing Agency',
    period: '2023 — 2024',
    description:
      'Collaborated on web design and campaign collateral, delivering responsive landing pages, branding visuals, and user interface layouts.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Experience
          </h2>
          <p className="text-zinc-400 mt-2">
            Professional experience and project engagements.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 border-l-2 border-emerald-500/30 space-y-1"
            >
              <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                {exp.period}
              </span>
              <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
              <p className="text-sm font-medium text-zinc-400">{exp.company}</p>
              <p className="text-sm text-zinc-400 pt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
