import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6 bg-white dark:bg-black">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs uppercase tracking-widest font-black text-orange-500 mb-4 block">
              EST. 2026 / BY AGGREY MATHIAS
            </span>
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tighter uppercase dark:text-white">
              STEP IN <br /> 
              <span className="text-outline-dark dark:text-outline-light text-transparent">FUTURE</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="max-w-md text-gray-600 dark:text-gray-400 text-lg leading-relaxed"
          >
            Magwear isn't just a brand. It's a statement of movement. 
            Engineered for the streets, designed for the bold.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex space-x-4"
          >
            <button className="bg-black dark:bg-white text-white dark:text-black px-10 py-5 font-black uppercase text-xs tracking-widest flex items-center group transition-transform active:scale-95">
              Explore Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop" 
            alt="Magwear Hero Sneaker" 
            className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.35)] dark:drop-shadow-[0_35px_35px_rgba(255,165,0,0.2)]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-orange-500 text-white p-8 rounded-full hidden md:block">
            <span className="text-4xl font-black italic">MGR-01</span>
          </div>
        </motion.div>
      </div>

      {/* Brand Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-black dark:bg-white text-white dark:text-black py-4 overflow-hidden hidden md:block">
        <div className="flex whitespace-nowrap animate-marquee font-black uppercase text-xs tracking-[0.5em]">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-12">Magwear Technical Footwear — Est. 2026 — Aggrey Mathias — Movement is Liberty</span>
          ))}
        </div>
      </div>

      <style>{`
        .text-outline-dark {
          -webkit-text-stroke: 2px #000;
        }
        .text-outline-light {
          -webkit-text-stroke: 2px #fff;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
