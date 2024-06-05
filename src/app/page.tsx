import { Desccription } from "app/Components/home/Description";
import { MainProducts } from "app/Components/home/MainProducts";
import { Hero } from "app/Components/home/hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Desccription />
      <MainProducts />
    </main>
  );
}
