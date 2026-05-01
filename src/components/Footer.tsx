// Note: Re-import icons correctly
import { Linkedin as LinkedinIcon, Mail as MailIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-auto bg-transparent relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-8">
      <div className="py-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          <a
            href="https://www.linkedin.com/in/césar-castro-5aa74189"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-400 transition-colors"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="mailto:cesargcm@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span className="sr-only">Email</span>
            <MailIcon className="w-5 h-5" />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} Cesar Castro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
