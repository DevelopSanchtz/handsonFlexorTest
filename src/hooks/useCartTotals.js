import { useMemo } from 'react';

const useCartTotals = (products) => {
  const subtotal = useMemo(() => 
    products.reduce((acc, prod) => acc + prod.price * prod.quantity, 0), 
    [products]
  );

  const totalDiscount = useMemo(() => 
    products.reduce((acc, prod) => acc + Number(prod.discount), 0), 
    [products]
  );

  const total = useMemo(() => subtotal - totalDiscount, [subtotal, totalDiscount]);

  return { subtotal, totalDiscount, total };
}

export default useCartTotals;