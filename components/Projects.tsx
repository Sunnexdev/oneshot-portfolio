'use client';

import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'Bantumarketing Agency Projects',
    period: '2023 — 2024',
    description:
      'Collaborated on web development and marketing design initiatives, building responsive web pages, optimizing front-end assets, and creating marketing collateral for digital campaigns.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Front-End Dev', 'Marketing Design'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Jerimic Studio',
    period: '2024',
    description:
      'Multi-page photography portfolio featuring custom video players, responsive review carousels, accordion components, and Formspree contact integration.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Formspree'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Web Asset Optimizer Pipeline',
    period: '2024',
    description:
      'Automated batch processing pipeline utilizing Node.js and sharp to convert high-res studio assets into modern, lightweight WebP formats.',
    tags: ['Node.js', 'sharp', 'Git'],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 mt-2">
            A selection of client work, agency experience, and web development
            projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-emerald-400 tracking-wider uppercase">
                    {project.period}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4 text-sm font-medium">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-1.5 text-emerald-400 hover:underline"
                  >
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-1.5 text-zinc-400 hover:text-white"
                  >
                    <span>Code</span>
                    <Code size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
