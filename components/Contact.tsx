'use client';

import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const contactEmail = 'sunnexsnare19@gmail.com';
  const [status, setStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'
  >('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(
          data.error || 'Something went wrong. Please try again.',
        );
      }

      setStatus('success');
      form.reset();
    } catch (err: unknown) {
      setStatus('error');
      const msg =
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.';
      setErrorMessage(msg);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 border-t border-zinc-900 bg-zinc-950"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-zinc-400 mt-2">
            Have a project in mind or want to collaborate? Send me a message.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">
              Let&apos;s talk about your project
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I am available for freelance work, web development projects, UI/UX
              design, and branding consultations.
            </p>

            <div className="space-y-4 pt-4">
              <a
                href={`mailto:${contactEmail}`}
                className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-emerald-500/40 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                    Email Me
                  </span>
                  <p className="text-white font-medium text-sm group-hover:text-emerald-400 transition-colors">
                    {contactEmail}
                  </p>
                </div>
              </a>

              <div className="flex items-center space-x-4 p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">
                    Location
                  </span>
                  <p className="text-white font-medium text-sm">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-zinc-900/30 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Tell me about your project..."
                className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 text-zinc-950 font-semibold text-sm hover:bg-emerald-400 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              <span>
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </span>
              <Send size={16} />
            </button>

            {status === 'success' && (
              <p className="text-emerald-400 text-xs font-medium mt-2">
                Message sent successfully!
              </p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-xs font-medium mt-2">
                {errorMessage || 'Something went wrong. Please try again.'}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
