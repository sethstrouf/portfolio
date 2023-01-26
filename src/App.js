import Hero from "./components/Hero"
import DoubleFeature from "./components/DoubleFeature"
import Footer from "./components/Footer"
import ThreeColumnCard from "./components/ThreeColumnCard";

export default function App() {
  return (
    <div className="min-h-screen mx-auto text-center">
      <Hero />

      <main>
        <DoubleFeature />
        <ThreeColumnCard />
      </main>

      <Footer />
    </div>
  );
}
