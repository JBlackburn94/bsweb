import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Merch from "./components/Merch";
import Tickets from "./components/Tickets";

export default function Home() {
  return (
    <main className="flex flex-col justify-start px-[120px] pt-10 gap-10">
      <Hero />
      <Tickets />
      <Merch />
      <Footer />
    </main>
  );
}
