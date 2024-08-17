import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Merch from "./components/Merch";
import Tickets from "./components/Tickets";

export default function Home() {
  return (
    <main className="flex flex-col justify-start px-[150px] pt-[50px] gap-20">
      <Hero />
      <Tickets />
      <Merch />
      <Footer />
    </main>
  );
}
