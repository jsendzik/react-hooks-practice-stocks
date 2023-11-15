import React, { useState } from "react";

function SearchBar({ stocks, setStocks, originalStocks }) {
  const [selectedType, setSelectedType] = useState("");

  function filterStocks(e) {
    const type = e.target.value;

    if (type === selectedType) {
      setSelectedType("");
      setStocks(originalStocks);
    } else {
      const updatedStocks = originalStocks.filter((stock) => stock.type === type);
      setSelectedType(type);
      setStocks(updatedStocks);
    }
  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={filterStocks} value={selectedType}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
