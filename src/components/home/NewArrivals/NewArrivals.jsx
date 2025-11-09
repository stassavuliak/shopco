import "./NewArrivals.scss";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/images/products/tshirt-black.png",
    title: "T-shirt with Tape Details",
    rating: 4.5,
    price: 120,
  },
  {
    id: 2,
    image: "/images/products/jeans.png",
    title: "Skinny Fit Jeans",
    rating: 3.5,
    price: 240,
    oldPrice: 260,
    discount: "-20%",
  },
  {
    id: 3,
    image: "/images/products/checkered-shirt.png",
    title: "Checkered Shirt",
    rating: 4.5,
    price: 180,
  },
  {
    id: 4,
    image: "/images/products/striped-tshirt.png",
    title: "Sleeve Striped T-shirt",
    rating: 4.5,
    price: 130,
    oldPrice: 160,
    discount: "-30%",
  },
];

const NewArrivals = () => {
  return (
    <section className="new-arrivals">
      <div className="container">
        <h2 className="new-arrivals__title">NEW ARRIVALS</h2>
        <div className="new-arrivals__grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card__image">
                <img src={product.image} alt={product.title} />
              </div>
              <h3 className="product-card__title">{product.title}</h3>

              <div className="product-card__rating">
                {Array.from({ length: 5 }).map((_, i) => {
                  const fullStars = Math.floor(product.rating);
                  const hasHalfStar = product.rating - fullStars >= 0.5;

                  let fillColor = "none"; // по умолчанию пустая звезда

                  if (i < fullStars) fillColor = "#fbbf24"; // полная
                  else if (i === fullStars && hasHalfStar) fillColor = "url(#half-fill)"; // половина

                  return (
                    <svg
                      key={i}
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      stroke="#fbbf24"
                      fill={fillColor}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Градиент для половины звезды */}
                      <defs>
                        <linearGradient id="half-fill">
                          <stop offset="50%" stopColor="#fbbf24" />
                          <stop offset="50%" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 1.4 8.168L12 18.896l-7.334 3.868 1.4-8.168L.132 9.211l8.2-1.193L12 .587z"
                      />
                    </svg>
                  );
                })}
                <span>{product.rating}/5</span>
              </div>

              <div className="product-card__price">
                <span className="current">${product.price}</span>
                {product.oldPrice && (
                  <>
                    <span className="old">${product.oldPrice}</span>
                    <span className="discount">{product.discount}</span>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <button className="new-arrivals__btn">View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
