import ProductCard from "../../ui/ProductCard/ProductCard";
import "./ProductSection.scss";

const ProductSection = ({ title, products }) => {
  return (
    <section className="product-section">
      <div className="container">
        <h2 className="product-section__title">{title}</h2>

        <div className="product-section__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="product-section__button">
          <button className="view-all-btn">View All</button>
        </div>
      </div>
    </section>
  )
}

export default ProductSection