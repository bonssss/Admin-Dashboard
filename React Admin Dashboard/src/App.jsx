import { useState } from "react";
import "./components/App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import AddMedicine from "./components/Medicine/AddMedicine";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddSupplier from "./components/Supplier/AddSupplier";
import ManageMedicine from "./components/Medicine/ManageMedicine";
import AddPurchase from "./components/purchase/AddPurchase";
import ManageSupplier from "./components/Supplier/ManageSupplier";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  const handleManageMedicineClick = () => {
    setShowHome(false);
  };

  return (
    <Router>
      <div className="grid-container">
        {<Header OpenSidebar={OpenSidebar} />}

        <div className="menu-content">
          <Sidebar
            openSidebarToggle={openSidebarToggle}
            OpenSidebar={OpenSidebar}
            onManageMedicineClick={handleManageMedicineClick}
          />

          {/* <Home/> */}

          <div className="content-container">
            {/* {showHome && showDashboard && (
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          )}
          {!showHome && (
            <Routes>
              <Route path='/' element={<ManageMedicine />} />
            </Routes>
          )} */}

            <Routes>
              {/* <Route path="/" element={showHome? <Home/> :<ManageMedicine/>} /> */}
              <Route path="/" element={<Home />} />
              {/* <Route path="/add-medicine" component={<AddMedicine/>} /> */}
              <Route path="/add-medicine" element={<AddMedicine />} />
              <Route path="/manage-medicine" element={<ManageMedicine />} />
              <Route path="/add-supplier" element={<AddSupplier />} />
              <Route path="/add-purchase" element={<AddPurchase />} />
              <Route path="/manage-supplier" element={<ManageSupplier />} />
              <Route path="/home" element={<Home/>} />

              


              {/* <Route path="/manage-medicine" component={ManageMedicine} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
