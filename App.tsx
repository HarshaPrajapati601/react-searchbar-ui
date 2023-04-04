import * as React from 'react';
import './style.css';
import FilterableProductTable from './src/FilterableProductTable/FilterableProductTable.jsx';
import MovingDot from './src/MovingDot';
import LazyLoad from './src/LazyLoad';
import Loading from './src/Loading';
// To lazy load a com

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' },
];
export default function App() {
  const [click, setClick] = React.useState(false);
  return (
    <div style={{ marginTop: 40 }}>
      <MovingDot />

      <FilterableProductTable products={PRODUCTS} />
      <button onClick={() => setClick(true)}>Click me </button>
      {click && (
        <React.Suspense fallback={<Loading />}>
          <h2>Preview</h2>
          <LazyLoad />
        </React.Suspense>
      )}
    </div>
  );
}
