import ProductSection from "../../ui/ProductSection/ProductSection";
import { products } from "../../../data/products";

const NewArrivals = () => {
  const newArrivals = products.slice(0, 4);

  return (
    <ProductSection title="NEW ARRIVALS" products={newArrivals} />
  );
};

export default NewArrivals;
