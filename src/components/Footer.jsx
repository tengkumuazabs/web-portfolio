export default function Footer() {
  return (
    <footer className="mt-16 py-6 text-center text-sm text-muted border-t border-white/10">
      <p>© {new Date().getFullYear()}</p>
      <p className="mt-1">Built with React, Tailwind, and Framer Motion</p>
    </footer>
  );
}