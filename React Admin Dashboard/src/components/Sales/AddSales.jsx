import React, { useState } from 'react';
import './addsales.css'
import addsales from "../../assets/ppp.png"

const AddSales = () => {
  const [formData, setFormData] = useState({
    medicineName: '',
    date: '',
    expireDate: '',
    quantity: '',
    price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission (e.g., API call, state update)
    console.log('Form submitted:', formData);
    // Clear the form after submission
    setFormData({
      medicineName: '',
      date: '',
      expireDate: '',
      quantity: '',
      price: '',
    });
  };

  return (
    <div className="addsales-maincontainer">
    <div className="addsalesconatiner">
    <h2><img src={addsales}  className =" dashboard-icon"alt="" />Add Sales</h2>

    <form onSubmit={handleSubmit}>

      <label htmlFor="medicineName">Medicine Name:</label>
      <input
        type="text"
        id="medicineName"
        name="medicineName"
        value={formData.medicineName}
        onChange={handleChange}
        required
      />

      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />

      <label htmlFor="expireDate">Expire Date:</label>
      <input
        type="date"
        id="expireDate"
        name="expireDate"
        value={formData.expireDate}
        onChange={handleChange}
        required
      />

      <label htmlFor="quantity">Quantity:</label>
      <input
        type="number"
        id="quantity"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />

      <label htmlFor="price">Price:</label>
      <input
        type="number"
        id="price"
        name="price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <button type="submit">Submit</button>
    </form>
    </div>
    </div>
  );
};

export default AddSales;
