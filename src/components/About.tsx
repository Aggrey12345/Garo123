import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden relative">
      {/* Background Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.02] dark:opacity-[0.05]">
          <span className="text-[30vw] font-black uppercase whitespace-nowrap">MATHIAS</span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="aspect-square bg-gray-200 dark:bg-zinc-800 overflow-hidden shadow-2xl relative group rounded-2xl"
          >
            <img 
              src="/aggrey.jpg"
              alt="Aggrey Mathias" 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 border-2 border-black/10 dark:border-white/10 m-4 rounded-xl pointer-events-none group-hover:m-2 transition-all duration-500" />
          </motion.div>

          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs font-black text-orange-500 tracking-widest uppercase">The Founder</span>
              <div className="flex items-center gap-6">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-orange-500 flex-shrink-0 shadow-xl"
                >
                  <img 
                    src="/aggrey.jpg" 
                    alt="Aggrey Mathias" 
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h2 className="text-6xl font-black uppercase tracking-tighter dark:text-white leading-none">
                  Aggrey <br /> Mathias
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-lg font-medium italic">
              <p>
                "Magwear started as a sketch in a notebook. Today, it represents the intersection of performance engineering and urban rebellion."
              </p>
              <p className="not-italic text-base">
                Aggrey's vision for Magwear was clear from day one: create footwear that doesn't just look good, but feels like an extension of the human spirit. With an obsession for material science and a deep respect for streetwear culture, he has built a community of individuals who refuse to be stationary.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 border-t border-gray-200 dark:border-zinc-800 pt-12">
              <div>
                <p className="text-2xl font-black dark:text-white">12+</p>
                <p className="text-xs uppercase text-gray-500 mt-2">Original Silhouettes</p>
              </div>
              <div>
                <p className="text-2xl font-black dark:text-white">Worldwide</p>
                <p className="text-xs uppercase text-gray-500 mt-2">Community Driven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
