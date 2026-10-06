const skillCategories = [
  {
    title: 'Front-End Development',
    skills: [
      'HTML5',
      'CSS3 / Tailwind CSS',
      'JavaScript (ES6+)',
      'React',
      'Next.js',
    ],
  },
  {
    title: 'UI/UX & Design',
    skills: [
      'Figma / Wireframing',
      'User Interface Design',
      'Responsive Layouts',
      'Prototyping',
    ],
  },
  {
    title: 'Branding & Tools',
    skills: ['Brand Identity Design', 'Git & GitHub', 'Node.js', 'VS Code'],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 border-t border-zinc-900 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-zinc-400 mt-2">
            Technologies, design tools, and frameworks I work with daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6"
            >
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-zinc-300">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
