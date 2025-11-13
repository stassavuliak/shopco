import ProductSection from "../../ui/ProductSection/ProductSection";
import { products } from "../../../data/products";

const TopSelling = () => {
  const topSelling = products.slice(4, 8);
  
  return (
    <ProductSection title="TOP SELLING" products={topSelling} />
  );
};

export default TopSelling;