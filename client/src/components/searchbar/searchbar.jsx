import "./searchbar.scss";
import { useState } from "react";

const types = ["buy", "rent"];

export default function Searchbar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxprice: 0,
  });

  function switchType(value) {
    setQuery((prev) => ({ ...prev, type: value }));
  }

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" name="location" placeholder="Location City" />
        <input type="text" name="minPrice" placeholder="Minimum Price" />
        <input type="text" name="maxPrice" placeholder="Maximum Price" />
        <button>
          <img src="search.png" alt="" />
        </button>
      </form>
    </div>
  );
}
