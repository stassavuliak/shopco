import { useLocation } from "react-router-dom";
import { products } from "../data/products";

const Shop = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const category = params.get("category");

  const filteredProducts = category
    ? products.filter((p) =>
        p.category.toLowerCase() === category.toLowerCase()
      )
    : products;

  return (
    <section className="shop">
      <div className="container">
        <h2 className="shop__title">
          {category ? `Showing: ${category}` : "All Products"}
        </h2>
        {/* тут можно использовать ProductSection или ProductGrid */}
      </div>
    </section>
  );
};

export default Shop;
