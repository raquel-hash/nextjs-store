import { Description } from "app/Components/home/Description";
import { MainProducts } from "app/Components/home/MainProducts";
import { Hero } from "app/Components/home/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future World",
  description: "Welcome to the future world, an ecommerce from other century",
  keywords: ["ecommerce", "future", "world", "tecnnology"],
};

export default function Home() {
  return (
    <main>
      {/* <Hero /> */}
      {/* <Description /> */}
      <MainProducts />
    </main>
  );
}
