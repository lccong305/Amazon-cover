import React from "react";
import { useSelector } from "react-redux";
import LoadingSkeleton from "../commom/LoadingSkeleton";
import Card from "./Card";

const Products = () => {
  const { products, isLoading } = useSelector((state) => state.product);
  return (
    <>
      {isLoading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 gap-10 mx-auto border max-w-screen-2xl md:grid-cols-2 xl:grid-cols-4">
          {products?.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Products;
