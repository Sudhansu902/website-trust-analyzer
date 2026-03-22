const Footer = () => {
  return (
    <footer
      id="footer"
      className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-sm text-slate-400"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-200">Website Trust Analyzer</p>
          <p>Built with React, Tailwind, Framer Motion, Express, and Axios.</p>
        </div>
        <div className="flex gap-4">
          <a
            className="transition hover:text-white"
            href="https://your-app.onrender.com"
            target="_blank"
            rel="noreferrer"
          >
            Backend
          </a>
          <a
            className="transition hover:text-white"
            href="https://vercel.com"
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

