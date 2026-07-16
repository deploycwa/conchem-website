import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Problems from "../components/sections/Problems";
import FeaturedProducts from "../components/sections/FeaturedProducts";
import WhyConchem from "../components/sections/WhyConchem";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <Hero />
      <Problems />
      <FeaturedProducts />
      <WhyConchem />
      <Footer />
    </main>
  );
}