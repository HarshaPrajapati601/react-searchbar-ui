import * as React from 'react';
import './style.css';
import FilterableProductTable from './src/FilterableProductTable/FilterableProductTable.jsx';
import MovingDot from './src/MovingDot'

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
export default function App() {
  return (
    <div style={{marginTop: 40}}>
      <MovingDot />

      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}
