import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';
import { Menu, X, Code2 } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Home', path: '/' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <div className="fixed w-full top-4 z-50 px-4 md:px-8 flex justify-center">
      <nav className="flex justify-between items-center w-full max-w-[1280px] px-6 py-4 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent italic inline-block w-[200px]">CESAR CASTRO</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'font-medium transition-colors cursor-pointer',
                location.pathname === link.path ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-slate-300 hover:text-blue-300'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[80px] left-4 right-4 md:hidden bg-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-4 flex flex-col space-y-2">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                'block py-3 px-4 text-base font-medium rounded-xl text-center',
                location.pathname === link.path
                  ? 'bg-blue-500/20 text-blue-400'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
