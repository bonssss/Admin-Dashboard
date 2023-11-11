import React, { useState } from 'react';
import './addmedicine.css'
 import AddSupplier from '../Supplier/AddSupplier';


const AddMedicine = () => {
  const [medicineName, setMedicineName] = useState('');
  const [packing, setPacking] = useState('');
  const [genericName, setGenericName] = useState('');
  const [suppliersName, setSuppliersName] = useState('');
  const [showSupplierSuggestions, setShowSupplierSuggestions] = useState(false);

  const validateMedicineName = (value) => {
    if (!value) {
      document.getElementById('medicine_name_error').textContent = 'Medicine name is required';
    } else {
      document.getElementById('medicine_name_error').textContent = '';
    }
  };
  
  const validatePacking = (value) => {
    if (!value) {
      document.getElementById('pack_error').textContent = 'Packing is required';
    } else {
      document.getElementById('pack_error').textContent = '';
    }
  };
  
  const validateGenericName = (value) => {
    if (!value) {
      document.getElementById('generic_name_error').textContent = 'Generic name is required';
    } else {
      document.getElementById('generic_name_error').textContent = '';
    }
  };
  
  const validateSupplierName = (value) => {
    if (!value) {
      document.getElementById('supplier_name_error').textContent = 'Supplier name is required';
    } else {
      document.getElementById('supplier_name_error').textContent = '';
    }
  };
  
  const addMedicine = () => {
    // Get input values
    const medicineName = document.getElementById('medicine_name').value;
    const packing = document.getElementById('packing').value;
    const genericName = document.getElementById('generic_name').value;
    const supplierName = document.getElementById('suppliers_name').value;
  
    // Validate input fields
    validateMedicineName(medicineName);
    validatePacking(packing);
    validateGenericName(genericName);
    validateSupplierName(supplierName);
  
    // Check if all fields are non-empty
    if (medicineName && packing && genericName && supplierName) {
      // Add logic to handle the form submission
      // ...
      document.getElementById('medicine_acknowledgement').textContent = 'Medicine added successfully!';
    } else {
      document.getElementById('medicine_acknowledgement').textContent = ''; // Clear the success message if there are validation errors or empty fields
    }
  };
  

  const handleSupplierInputChange = (event) => {
    const value = event.target.value;
    setSuppliersName(value);
    // Add logic for showing supplier suggestions based on the input value
    setShowSupplierSuggestions(true);
  };

  const handleAddMedicineClick = () => {
    // Add logic for handling the "ADD" button click event
    // You can access the form values using the state variables (medicineName, packing, genericName, suppliersName)
  };

  // for add supplier
  const [showAddSupplierForm, setShowAddSupplierForm] = useState(false);

  const handleAddSupplierClick = () => {
    setShowAddSupplierForm(true);
  };

  if (showAddSupplierForm) {
    return <AddSupplier/>;
  }

  return (
    <div className="addmedicinecontainer">
    <div className="container">
      <div className="row">
        <div className="col col-md-8 form-group">
          <label className="font-weight-bold" htmlFor="medicine_name">Medicine Name :</label>
          <input
            type="text"
            className="form-control"
            id="medicine_name"
            placeholder="Medicine Name"
            onBlur={(e) => setMedicineName(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
        <div className="col col-md-4 form-group">
          <label className="font-weight-bold" htmlFor="packing">Packing :</label>
          <input
            type="text"
            className="form-control"
            id="packing"
            placeholder="Packing e.g. 10 TAB / 100 ML"
            onBlur={(e) => setPacking(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="generic_name">Generic Name :</label>
          <input
            type="text"
            className="form-control"
            id="generic_name"
            placeholder="Generic Name"
            onBlur={(e) => setGenericName(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>
      <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="generic_name">Date :</label>
          <input
            type="text"
            className="form-control"
            id="generic_name"
            placeholder="date"
            onBlur={(e) => setGenericName(e.target.value)}
          />
          <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="generic_name">Expire Date :</label>
          <input
            type="text"
            className="form-control"
            id="generic_name"
            placeholder="Expire date"
            onBlur={(e) => setGenericName(e.target.value)}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-12 form-group">
          <label className="font-weight-bold" htmlFor="suppliers_name">Supplier :</label>
          <input
            id="suppliers_name"
            type="text"
            className="form-control"
            placeholder="Supplier Name"
            name="suppliers_name"
            value={suppliersName}
            onChange={handleSupplierInputChange}
          />
          <code className="text-danger small font-weight-bold float-right" style={{ display: 'none' }}></code>
          {showSupplierSuggestions && (
            <div className="list-group position-fixed" style={{ zIndex: 1, width: '35.80%', overflow: 'auto', maxHeight: '200px' }}>
              {/* Render supplier suggestions here */}
            </div>
          )}
        </div>
      </div>

      <div className="row">
        <div className="col col-md-5 font-weight-bold" style={{ color: 'green', cursor: 'pointer' }} onClick={() => handleAddSupplierClick(true)}>
          <i className="fa fa-plus"></i>Add New Supplier
        </div>
      </div>
      <hr />

      <div className="row">
        <div className="form-group m-auto">
          <button className="btn btn-primary form-control" onClick={addMedicine}>ADD</button>
        </div>
      </div>

      <div id="medicine_acknowledgement" className="col-md-12 h5 text-success font-weight-bold text-center" style={{ fontFamily: 'sans-serif' }}></div>
    </div>
    </div>
  );
};

export default AddMedicine;
