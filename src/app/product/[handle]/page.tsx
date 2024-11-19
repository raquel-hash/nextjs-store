import { ProductView } from "app/Components/product/ProductView";
import { getProducts } from "app/services/shopify/products";

interface ProductPageProps {
  searchParams: {
    id: string;
  };
}

export default async function ProductPage({ searchParams }: ProductPageProps) {
  const id = searchParams.id;
  console.log(id, "id");
  const products = await getProducts(id);
  console.log(products);
  const product = products[0];

  return <ProductView product={product} />;
}
