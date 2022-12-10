import React from "react";
import { useProducts } from "./../context/ProductProvider";
import ProductCard from "./../components/ProductCard";

const TopRated = () => {
  const {
    state: { products },
  } = useProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-14 mx-auto my-10">
      {products
        .filter(toprated => toprated.rating >= 4)
        .map(product => (
          <ProductCard product={product}></ProductCard>
        ))}
    </div>
  );
};

export default TopRated;
