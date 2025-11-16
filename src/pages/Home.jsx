import Hero from "../components/home/Hero/Hero";
import Brands from "../components/home/Brands/Brands";
import ProductSection from "../components/ui/ProductSection/ProductSection";
import { products } from "../data/products";
import Devider from "../components/ui/Devider/Devider";
import BrowseByStyle from "../components/home/BrowseByStyle/BrowseByStyle";
import Testimonials from "../components/home/Testimonials/Testimonials";
import Newsletter from "../components/layout/Newsletter/Newsletter";
import Footer from "../components/layout/Footer/Footer";

const Home = () => {
  const newArrivals = products.slice(0, 4);
  const topSelling = products.slice(4, 8);

  return (
    <>
      <Hero />
      <Brands />
      <ProductSection title="New Arrivals" products={newArrivals} />
      <Devider/>
      <ProductSection title="Top Selling" products={topSelling} />
      <BrowseByStyle />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
