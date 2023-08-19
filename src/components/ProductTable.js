import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Descripcion</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Descuento</th>
        </tr>
      </thead>
      <tbody>
        {products.map((prod, index) => (
          <tr key={index}>
            <td>{prod.id}</td>
            <td>{prod.description}</td>
            <td>{prod.quantity}</td>
            <td>{prod.price}</td>
            <td>{prod.discount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
