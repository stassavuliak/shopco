import "./Footer.scss";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";

import visa from "@/assets/images/payments/visa.svg";
import mastercard from "@/assets/images/payments/mastercard.svg";
import paypal from "@/assets/images/payments/paypal.svg";
import applepay from "@/assets/images/payments/applepay.svg";
import googlepay from "@/assets/images/payments/googlepay.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
        <div className="footer__about">
          <h2 className="footer__logo">SHOP.CO</h2>

          <p className="footer__text">
            We have clothes that suits your style and which you're proud to wear.
            From women to men.
          </p>

          <div className="footer__socials">
            <a href="#!"><Twitter/></a>
            <a href="#!"><Facebook/></a>
            <a href="#!"><Instagram/></a>
            <a href="#!"><Github/></a>
          </div>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <h4>Company</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Features</a></li>
              <li><a href="#">Works</a></li>
              <li><a href="#">Career</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Help</h4>
            <ul>
              <li><a href="#">Customer Support</a></li>
              <li><a href="#">Delivery Details</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>FAQ</h4>
            <ul>
              <li><a href="#">Account</a></li>
              <li><a href="#">Manage Deliveries</a></li>
              <li><a href="#">Orders</a></li>
              <li><a href="#">Payments</a></li>
            </ul>
          </div>

          <div className="footer__column">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Free eBooks</a></li>
              <li><a href="#">Development Tutorial</a></li>
              <li><a href="#">How to – Blog</a></li>
              <li><a href="#">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>
        </div>

        <div className="footer__bottom">
          <p>Shop.co © 2000-2023, All Rights Reserved</p>

          <div className="footer__payments">
            <img src={visa} alt="Visa" />
            <img src={mastercard} alt="Mastercard" />
            <img src={paypal} alt="PayPal" />
            <img src={applepay} alt="Apple Pay" />
            <img src={googlepay} alt="Google Pay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
