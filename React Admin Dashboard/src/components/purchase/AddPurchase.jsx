import React, { useState } from 'react';
import './addpurchase.css'; // Import your CSS file for styling if needed
import addpurchase from '../../assets/ppp.png'

const AddPurchase = () => {
  const [supplierName, setSupplierName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [paymentType, setPaymentType] = useState('Cash Payment');
  const [invoiceDate, setInvoiceDate] = useState('');

  // Additional state for medicine details
  const [medicineName, setMedicineName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [expireDate, setExpireDate] = useState('');

  const handleSupplierChange = (event) => {
    setSupplierName(event.target.value);
    // Implement your suggestions logic here if needed
  };

  const handleInvoiceNumberChange = (event) => {
    setInvoiceNumber(event.target.value);
    // Implement your validation logic here if needed
  };

  const handlePaymentTypeChange = (event) => {
    setPaymentType(event.target.value);
  };

  const handleInvoiceDateChange = (event) => {
    setInvoiceDate(event.target.value);
    // Implement your date validation logic here if needed
  };

  const handleAddPurchase = () => {
    // Implement your logic to add a purchase here
    console.log('Supplier Name:', supplierName);
    console.log('Invoice Number:', invoiceNumber);
    console.log('Payment Type:', paymentType);
    console.log('Invoice Date:', invoiceDate);
    console.log('Medicine Name:', medicineName);
    console.log('Quantity:', quantity);
    console.log('Expire Date:', expireDate);
  };

  const [showAddPurchaseForm, setShowAddPurchaseForm] = useState(false);

  const handleAddPurchaseClick = () => {
    setShowAddSupplierForm(true);
  };

  if (showAddPurchaseForm) {
    return <AddPurchase />;
  }



  return (
    
      <div className="container-fluid">
        <div className="addpurchase-conatiner">
        <h1><img src={addpurchase} className="dashboard-icon" alt="" /> Add Purchase</h1>
        <div className="row">
          {/* Supplier details */}
          <div className="row col col-md-12">
            <div className="col col-md-4 form-group">
              <label className="font-weight-bold" htmlFor="supplierName">
                Supplier:
              </label>
              <input
                id="supplierName"
                type="text"
                className="form-control"
                placeholder="Supplier Name"
                value={supplierName}
                onChange={handleSupplierChange}
              />
            </div>

            <div className="col col-md-2 form-group">
              <label className="font-weight-bold" htmlFor="invoiceNumber">
                Invoice Number:
              </label>
              <input
                id="invoiceNumber"
                type="text"
                className="form-control"
                placeholder="Invoice Number"
                value={invoiceNumber}
                onChange={handleInvoiceNumberChange}
              />
            </div>

            <div className="col col-md-2 form-group">
              <label className="font-weight-bold" htmlFor="paymentType">
                Payment Type:
              </label>
              <select
                id="paymentType"
                className="form-control"
                value={paymentType}
                onChange={handlePaymentTypeChange}
              >
                <option value="Cash Payment">Cash Payment</option>
                <option value="Net Banking">Net Banking</option>
                <option value="Payment Due">Payment Due</option>
              </select>
            </div>

            <div className="col col-md-2 form-group">
              <label className="font-weight-bold" htmlFor="invoiceDate">
                Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="invoiceDate"
                value={invoiceDate}
                onChange={handleInvoiceDateChange}
              />
            </div>
          </div>

          {/* Add medicines */}
          <div className="row col col-md-12">
            <div className="col col-md-4 form-group">
              <label className="font-weight-bold" htmlFor="medicineName">
                Medicine Name:
              </label>
              <input
                id="medicineName"
                type="text"
                className="form-control"
                placeholder="Medicine Name"
                value={medicineName}
                onChange={(e) => setMedicineName(e.target.value)}
              />
            </div>

            <div className="col col-md-4 form-group">
              <label className="font-weight-bold" htmlFor="quantity">
                Quantity:
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="col col-md-4 form-group">
              <label className="font-weight-bold" htmlFor="expireDate">
                Expire Date:
              </label>
              <input
                type="date"
                className="form-control"
                id="expireDate"
                value={expireDate}
                onChange={(e) => setExpireDate(e.target.value)}
              />
            </div>
          </div>

          {/* Other input fields go here */}
          {/* ... */}
        </div>

        {/* Grand total */}
        <div className="row col col-md-12">
          <div className="col col-md-10"></div>
          <div className="col col-md-2 form-group float-right">
            <label className="font-weight-bold" htmlFor="grandTotal">
              Grand Total:
            </label>
            <input
              type="text"
              className="form-control"
              id="grandTotal"
              disabled
            />
          </div>
        </div>

        {/* Button */}
        <div className="row col col-md-12">
          <div className="col col-md-5"></div>
          <div className="col col-md-2 form-group">
            <button
              className="btn btn-primary form-control"
              onClick={handleAddPurchase}
            >
              ADD
            </button>
          </div>
          <div className="col col-md-5"></div>
        </div>

        {/* Closing button */}
        <div
          id="purchaseAcknowledgement"
          className="col-md-12 h5 text-success font-weight-bold text-center"
          style={{ fontFamily: 'sans-serif' }}
        ></div>
      </div>
    </div>
  );
};

export default AddPurchase;
