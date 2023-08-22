import Hero from "./components/Hero"
import DoubleFeature from "./components/DoubleFeature"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="sans-serif min-h-screen mx-auto text-center">
      <Hero />

      <main>
        <DoubleFeature />
      </main>

      <Footer />
    </div>
  );
}
