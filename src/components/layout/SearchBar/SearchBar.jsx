import { Search } from "lucide-react";
import "./SearchBar.scss";

const SearchBar = () => {
  const handleSearch = () => {
    console.log("Search clicked!");
  };

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <button
        type="submit"
        className="search-bar__btn"
        aria-label="Search"
        onClick={handleSearch}
      >
        <Search/>
      </button>
      <input
        type="text"
        placeholder="Search for products..."
        className="search-bar__input"
      />
    </form>
  );
};

export default SearchBar;
