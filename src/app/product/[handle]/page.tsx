import { ProductView } from "app/Components/product/ProductView";
import { getProducts } from "app/services/shopify/products";
import { redirect } from "next/navigation";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  //   console.log(id, "id");
  const products = await getProducts(id);
  //   console.log(products);
  const product = products[0];

  if (!id) {
    redirect("/store");
  }

  return <ProductView product={product} />;
}
