import { ChevronDown } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item nav__dropdown">
          <button className="nav__link">
            Shop
            <ChevronDown/>
          </button>

          {/* submenu */}
          <ul className="nav__submenu">
            <li><a href="#">Clothing</a></li>
            <li><a href="#">Shoes</a></li>
            <li><a href="#">Accessories</a></li>
            <li><a href="#">Home & Lifestyle</a></li>
          </ul>
        </li>

        <li className="nav__item"><a href="#" className="nav__link">On Sale</a></li>
        <li className="nav__item"><a href="#" className="nav__link">New Arrivals</a></li>
        <li className="nav__item"><a href="#" className="nav__link">Brands</a></li>
      </ul>
    </nav>
  )
}

export default NavBar