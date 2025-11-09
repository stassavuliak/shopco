import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title">Find clothes that matches your style</h1>

          <p className="hero__subtitle">
            Browse through our diverse range of meticulously crafted garments, designed
            to bring out your individuality and cater to your sense of style.
          </p>

          <button className="hero__btn btn">Shop Now</button>
        </div>

        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">200+</span>
            <span className="hero__stat-label">International Brands</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">2,000+</span>
            <span className="hero__stat-label">High-Quality Products</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">30,000+</span>
            <span className="hero__stat-label">Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
