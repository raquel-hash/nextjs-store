import { ProductsWrapper } from "app/Components/Store/ProductsWrapper";
import { getProducts } from "app/services/shopify";

interface CategoryProps {
  params: {
    categories: string[];
    searchParams?: string;
  };
}
export default async function Category(props: CategoryProps) {
  const products = await getProducts();
  // console.log(props);
  const { categories } = props.params;
  // throw new Error("Error: Boom!");
  // console.log(categories);
  // return <h1>Categoria dinamica: {categories} </h1>;
  return <ProductsWrapper products={products} />;
}
