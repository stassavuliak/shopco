import './Header.scss';
import NavBar from '../NavBar/NavBar'
import SearchBar from '../SearchBar/SearchBar';
import { ShoppingCart } from "lucide-react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <a href="#!" className="logo">SHOP.CO</a>

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