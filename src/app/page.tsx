import { Description } from "app/Components/home/Description";
import { MainProducts } from "app/Components/home/MainProducts";
import { Hero } from "app/Components/home/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <Description />
      <MainProducts />
    </main>
  );
}
