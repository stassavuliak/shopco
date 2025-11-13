import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductSection from "../components/ui/ProductSection/ProductSection";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Product not found</h2>;
  }

  return (
    <section style={{ padding: "80px 0" }}>
      <div className="container">
        <h1>{product.title}</h1>
        <img
          src={product.image}
          alt={product.title}
          style={{ width: "300px", borderRadius: "12px", marginTop: "20px" }}
        />
        <p style={{ marginTop: "20px", fontSize: "18px" }}>
          <strong>Price:</strong> ${product.price}
        </p>
      </div>

      <ProductSection
        title="You Might Also Like"
        products={products.slice(0, 4)}
      />
    </section>
  );
};

export default ProductDetails;
