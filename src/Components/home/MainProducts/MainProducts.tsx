// "use client";

const getProducts = async () => {
  const response = await fetch(
    `${process.env.SHOPIFY_HOSTNAME}/admin/api/2024-10/products.json`,
    {
      headers: new Headers({
        "X-Shopify-Access-Token": process.env.SHOPIFY_API_KEY || "",
      }),
    }
  );
  const data = await response.json();
  return data;
};

export const MainProducts = async () => {
  // console.log("variable de entorno", process.env.NEXT_PUBLIC_SHOPIFY_HOSTNAME);
  const products = await getProducts();
  console.log(products);
  return (
    <section>
      <h1>Main Products</h1>
    </section>
  );
};
