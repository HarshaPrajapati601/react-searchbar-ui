import React from 'react';

const SearchBar = ({ filterText, isStockOnly, onFilterTextChange,
  onInStockOnlyChange }) => {
  return (
    <form>
      <input
        onChange={(e) => onFilterTextChange(e.target.value)}
        type="text"
        placeholder="search"
        value={filterText}
      />
      <label>
        <input type="checkbox"
        onChange checked={isStockOnly} /> Only show products in
        stock
      </label>
    </form>
  );
};

export default SearchBar;
