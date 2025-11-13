import Hero from "../components/home/Hero/Hero";
import Brands from "../components/home/Brands/Brands";
import ProductSection from "../components/ui/ProductSection/ProductSection";
import { products } from "../data/products";

const Home = () => {
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <>
      <Hero />
      <Brands />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <ProductSection title="Top Selling" products={topSelling} />
    </>
  );
};

export default Home;
