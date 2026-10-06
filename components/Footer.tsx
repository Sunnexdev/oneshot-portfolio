export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-zinc-900 text-center text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} All rights reserved.</p>
        <p className="text-zinc-600">Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
