
import React, { useState } from 'react';
import './managemedicine.css'; // Import the CSS file for stylin
// YourComponent.jsx
import '@fortawesome/fontawesome-free/css/all.css';






const TableRow = ({ data, onEdit, onDelete }) => {
  return (
    <tr>
      <td>{data.sl}</td>
      <td>{data.medicineName}</td>
      <td>{data.packing}</td>
      <td>{data.genericName}</td>
      <td>{data.supplier}</td>
      <td>
      <span className="action-icons" onClick={() => onEdit(data.sl)}>
          <i className="fas fa-edit edit-icon"></i>
        </span>
        <span className="action-icons" onClick={() => onDelete(data.sl)}>
          <i className="fas fa-trash delete-icon"></i>
        </span>
      </td>
    </tr>
  );
};

const ManageMedicine = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleEdit = (sl) => {
    console.log(`Edit row with SL: ${sl}`);
  };

  const handleDelete = (sl) => {
    console.log(`Delete row with SL: ${sl}`);
  };

  const medicinesData = [
    {
      sl: 1,
      medicineName: 'Medicine 1',
      packing: '10 TAB',
      genericName: 'Generic 1',
      supplier: 'Supplier 1',
    },
    // Add more medicine data objects as needed
  ];

  return (
    
    <div className="container-fluid">
      <div className="container">
        {/* Header section */}
        <div className="row">
          <div className="col-md-12 form-group form-inline">
            <label className="font-weight-bold" htmlFor="">Search :&emsp;</label>
            <input type="text" className="form-control" id="by_name" placeholder="By Medicine Name" />
            &emsp;<input type="text" className="form-control" id="by_generic_name" placeholder="By Generic Name" />
            &emsp;<input type="text" className="form-control" id="by_suppliers_name" placeholder="By Supplier Name" />
          </div>
          <div className="col col-md-12">
            <hr className="col-md-12" style={{ padding: '0px', borderTop: '2px solid #02b6ff' }} />
          </div>
        </div>
        {/* Header section end */}

        {/* Medicine table */}
        <div className="row">
          <div className="col col-md-12 table-responsive">
            <div className="table-responsives">
              <table className="table table-bordered table-striped table-hover">
                <thead>
                  <tr>
                    <th>SL.</th>
                    <th>Medicine Name</th>
                    <th>Packing</th>
                    <th>Generic Name</th>
                    <th>Supplier</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody id="medicines_div">
                  {medicinesData.map((medicine, index) => (
                    <TableRow key={index} data={medicine} onEdit={handleEdit} onDelete={handleDelete} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        
        {/* Medicine table end */}
      </div>
    </div>
  );
};

export default ManageMedicine;
