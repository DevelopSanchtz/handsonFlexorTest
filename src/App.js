import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import useCartTotals from './hooks/useCartTotals';
import { ProductForm, ProductTable, TotalSummary } from './components'

function App() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const { subtotal, totalDiscount, total } = useCartTotals(products);

  return (
    <div className="container mt-5">
      <button className="btn btn-primary mb-4" onClick={() => setShowForm(!showForm)}>
        Añadir nuevo producto
      </button>
      
      {showForm && (<ProductForm onAddProduct={addProduct} onCloseForm={() => setShowForm(false)} />)}

      <ProductTable products={products} />
      
      <TotalSummary subtotal={subtotal} totalDiscount={totalDiscount} total={total} />

    </div>
  );
}

export default App;