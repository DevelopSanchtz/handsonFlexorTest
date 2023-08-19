import React, { useState } from 'react';

const ProductForm = ({ onAddProduct, onCloseForm }) => {
  const [formData, setFormData] = useState({
    id: '',
    description: '',
    quantity: '',
    price: '',
    discount: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    onAddProduct(formData);
    onCloseForm()
    setFormData({
      id: '',
      description: '',
      quantity: '',
      price: '',
      discount: '',
    });
  };

  return (
    <div className="mb-4">
      <input type="text" className="form-control mb-2" placeholder="ID" name="id" value={formData.id} onChange={handleInputChange} />
      <input type="text" className="form-control mb-2" placeholder="Descripcion" name="description" value={formData.description} onChange={handleInputChange} />
      <input type="number" className="form-control mb-2" placeholder="Cantidad" name="quantity" value={formData.quantity} onChange={handleInputChange} />
      <input type="number" className="form-control mb-2" placeholder="Precio" name="price" value={formData.price} onChange={handleInputChange} />
      <input type="number" className="form-control mb-2" placeholder="Descuento" name="discount" value={formData.discount} onChange={handleInputChange} />
      <button className="btn btn-success" onClick={handleSubmit}>Guardar</button>
    </div>
  );
}

export default ProductForm;