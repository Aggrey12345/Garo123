import { useDarkMode } from './hooks/useDarkMode';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collection } from './components/Collection';
import { About } from './components/About';
import { Footer } from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useDarkMode();

  const toggleDark = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-500 font-sans selection:bg-orange-500 selection:text-white">
      <Navbar isDark={isDark} toggleDark={toggleDark} />
      <main>
        <Hero />
        <Collection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
