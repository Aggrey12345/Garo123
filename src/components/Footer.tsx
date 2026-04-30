import { Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer id="contact" className="bg-black py-24 px-6 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter">
              LET'S <br /> COLLAB
            </h2>
            <div className="flex space-x-6">
              <a href="#" className="p-4 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="p-4 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors">
                <Twitter size={24} />
              </a>
              <a href="mailto:contact@magwear.com" className="p-4 border border-zinc-800 rounded-full hover:bg-zinc-900 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-12 lg:pt-10">
            <p className="text-xl text-zinc-400 max-w-sm">
              We are always looking for new creators and bold thinkers. Join the movement.
            </p>
            
            <div className="flex flex-col space-y-4 text-xs font-black uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-orange-500 transition-colors underline underline-offset-8">Press Kit</a>
              <a href="#" className="hover:text-orange-500 transition-colors underline underline-offset-8">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors underline underline-offset-8">Terms of Service</a>
            </div>
          </div>
        </div>

        <div className="mt-32 pt-12 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-600">
            © 2026 MAGWEAR. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[10px] uppercase font-bold tracking-[0.3em] text-zinc-600">
            OWNED BY AGGREY MATHIAS.
          </p>
        </div>
      </div>
    </footer>
  );
}
