import React from "react";
import "./filter.scss";

export default function Filter() {
  return (
    <div className="filter">
      <h1>
        Search results for <b>London</b>
      </h1>
      <div className="top">
        <div className="item">
          <label htmlFor="city">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
          />
        </div>
      </div>
      <div className="bottom">
        <div className="item">
          <label htmlFor="type">Location</label>
          <select name="type" id="type">
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="type">Property</label>
          <select name="property" id="property">
            <option value="">any</option>
            <option value="studio">studio</option>
            <option value="house">house</option>
            <option value="land">land</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="minPrice">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
        <label htmlFor="maxPrice">Max Price</label>
          <input
            type="number"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
          />
        </div>
        <div className="item">
          <label htmlFor="bedroom">Bedrooms</label>
          <input
            type="number"
            id="bedroom"
            name="bedroom"
            placeholder="any"
          />
        </div>
        <button>
          <img src="/search.png" alt="" />
        </button>
      </div>
    </div>
  );
}
