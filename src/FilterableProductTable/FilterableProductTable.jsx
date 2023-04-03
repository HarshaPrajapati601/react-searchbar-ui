import React, { useState } from 'react';
import ProductTable from '../FilterableProductTable/ProductTable/ProductTable';
import SearchBar from '../FilterableProductTable/SearchBar';

const FilterableProductTable = ({ products }) => {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div>
      <SearchBar
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
      <ProductTable
        filterText={filterText}
        inStockOnly={inStockOnly}
        products={products}
      />
    </div>
  );
};

export default FilterableProductTable;
