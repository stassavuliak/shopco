import "./Brands.scss";

import versace from "@/assets/images/brands/versace.svg";
import zara from "@/assets/images/brands/zara.svg";
import gucci from "@/assets/images/brands/gucci.svg";
import prada from "@/assets/images/brands/prada.svg";
import calvin from "@/assets/images/brands/calvin.svg";

const Brands = () => {
  const logos = [
    { src: versace, alt: "Versace" },
    { src: zara, alt: "Zara" },
    { src: gucci, alt: "Gucci" },
    { src: prada, alt: "Prada" },
    { src: calvin, alt: "Calvin Klein" },
  ];

  return (
    <section className="brands">
      <div className="container">
        <div className="brands__container">
          {logos.map((logo) => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="brands__logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
