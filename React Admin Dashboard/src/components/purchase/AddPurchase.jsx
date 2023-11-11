import React, { useState } from 'react';
import './addpurchase.css'; // Import your CSS file for styling if needed

const AddPurchase = () => {
  const [supplierName, setSupplierName] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [paymentType, setPaymentType] = useState('Cash Payment');
  const [invoiceDate, setInvoiceDate] = useState('');

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
  };

  const [showAddPurchaseForm, setShowAddPurchaseForm] = useState(false);

  const handleAddPurchaseClick = () => {
    setShowAddSupplierForm(true);
  };

  if (showAddPurchaseForm) {
    return <AddPurchase/>;
  }


  return (
    <div className="container-fluid">
      {/* Your modal */}
      {/* Including side navigations (if you have a separate component for it) */}
      {/* Header section (if you have a separate component for it) */}

      {/* Form content */}
      <div className="row">
        {/* Supplier details */}
        <div className="row col col-md-12">
          <div className="col col-md-4 form-group">
            <label className="font-weight-bold" htmlFor="supplierName">Supplier :</label>
            <input
              id="supplierName"
              type="text"
              className="form-control"
              placeholder="Supplier Name"
              value={supplierName}
              onChange={handleSupplierChange}
            />
            {/* Suggestions and error handling can be implemented here */}
          </div>

          {/* Other input fields go here */}
          {/* ... */}

          <div className="col col-md-2 form-group">
            <label className="font-weight-bold" htmlFor="paymentType">Payment Type :</label>
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
            <label className="font-weight-bold" htmlFor="invoiceDate">Date :</label>
            <input
              type="date"
              className="form-control"
              id="invoiceDate"
              value={invoiceDate}
              onChange={handleInvoiceDateChange}
            />
            {/* Date validation error can be displayed here */}
          </div>
        </div>

        {/* Add medicines */}
        {/* Medicine input fields go here */}
        {/* ... */}

        {/* Grand total */}
        <div className="row col col-md-12">
          <div className="col col-md-10"></div>
          <div className="col col-md-2 form-group float-right">
            <label className="font-weight-bold" htmlFor="grandTotal">Grand Total :</label>
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
            <button className="btn btn-primary form-control" onClick={handleAddPurchase}>ADD</button>
          </div>
          <div className="col col-md-5"></div>
        </div>
        {/* Closing button */}
        <div id="purchaseAcknowledgement" className="col-md-12 h5 text-success font-weight-bold text-center" style={{ fontFamily: 'sans-serif' }}></div>
      </div>
      {/* Form content end */}
    </div>
  );
};

export default AddPurchase;
