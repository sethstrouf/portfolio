import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Hero />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
