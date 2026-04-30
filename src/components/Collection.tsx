import { motion } from 'motion/react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  tag: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Aero Stealth M1",
    price: "$220",
    tag: "New Arrival",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1925&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cream Drift Low",
    price: "$180",
    tag: "Minimalist",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Neon Runner X-3",
    price: "$250",
    tag: "Future Tech",
    image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop"
  }
];

export function Collection() {
  return (
    <section id="collection" className="py-32 px-6 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="space-y-4">
            <span className="text-xs font-black text-orange-500 tracking-widest uppercase">The Gallery</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter dark:text-white">
              S/S 2026 <br /> <span className="text-gray-400">Drops</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-500 dark:text-zinc-500 text-sm italic">
            "Pushing the boundaries of footwear through technical innovation and aesthetic purity."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {products.map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100 dark:bg-zinc-900 mb-8 border border-transparent dark:border-zinc-800 transition-colors group-hover:border-orange-500/50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-black text-white px-3 py-1 text-[10px] uppercase font-bold tracking-widest">
                    {product.tag}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-tight dark:text-white group-hover:text-orange-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mt-2">{product.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
