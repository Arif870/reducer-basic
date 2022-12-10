import React from "react";
import { useProducts } from "./../context/ProductProvider";
import ProductCard from "./../components/ProductCard";

const Home = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p>Loading..</p>;
  }
  if (error) {
    content = <p>Something went wrong</p>;
  }
  if (!loading && !error && products.length >= 0) {
    content = products.map(product => (
      <ProductCard product={product}></ProductCard>
    ));
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
      {content}
    </div>
  );
};

export default Home;
