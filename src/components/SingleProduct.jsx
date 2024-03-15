import { useState, useEffect } from "react";
import { getSingleProduct } from "../api";
import { useParams } from "react-router";
import ProductCard from "./ProductCard";

const singleProduct = () => {
  const [product, setProduct] = useState(null);
  const { productId } = useParams();

  useEffect(() => {
    const fetchSingleProduct = async () => {
      const product = await getSingleProduct(productId);
      setProduct(product);
    };
    fetchSingleProduct();
  }, [productId]);
  return product && <ProductCard product={product} isSingle />;
};

export default singleProduct;
