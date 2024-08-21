import Hero from "./components/Hero";
import Merch from "./components/Merch";
import Tickets from "./components/Tickets";

export default function Home() {
  return (
    <main className="flex flex-col justify-start px-5 lg:px-[150px] pt-[100px] lg:pt-[50px] gap-20">
      <Hero />
      <Merch />
      <Tickets />
    </main>
  );
}
