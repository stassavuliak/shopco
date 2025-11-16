import "./Newsletter.scss";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter__inner">
        <h2 className="newsletter__title">
          Stay upto date about <br /> our latest offers
        </h2>

        <form className="newsletter__form">
          <div className="newsletter__input-wrapper">
            <Mail size={18} className="newsletter__icon" />
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter__input"
            />
          </div>

          <button type="submit" className="newsletter__btn">
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
