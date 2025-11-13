import './Header.scss';
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar';
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link to="/" className="logo">SHOP.CO</Link>
          

          <NavBar/>
          <SearchBar/>
          <button className="cart-btn">
            <ShoppingCart/>
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;