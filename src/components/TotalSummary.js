import React from 'react';

const TotalSummary = ({ subtotal, totalDiscount, total }) => {
  return (
    <div>
      <p><strong>Subtotal:</strong> ${subtotal}</p>
      <p><strong>Total Descuentos:</strong> ${totalDiscount}</p>
      <p><strong>Total a Pagar:</strong> ${total}</p>
    </div>
  );
}

export default TotalSummary;
