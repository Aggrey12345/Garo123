import { motion } from 'motion/react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  isDark: boolean;
  toggleDark: () => void;
}

export function Navbar({ isDark, toggleDark }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Collection', href: '#collection' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-bottom border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter dark:text-white uppercase"
        >
          Magwear<span className="text-orange-500">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-xs uppercase tracking-widest font-semibold hover:text-orange-500 transition-colors dark:text-gray-400 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
          >
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDark}>
            {isDark ? <Sun size={20} className="text-white" /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="dark:text-white" /> : <Menu className="dark:text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white dark:bg-black border-t dark:border-zinc-900 border-gray-100 flex flex-col p-6 space-y-6"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold uppercase dark:text-white"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
