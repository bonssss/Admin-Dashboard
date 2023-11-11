import React, { useState } from 'react';
import { BsGrid1X2Fill, BsMenuButtonWideFill } from 'react-icons/bs';
import { Medication } from '@mui/icons-material';
import { Support } from '@mui/icons-material';
import logo from '../assets/logop.jpeg';
import { Link } from 'react-router-dom';
import './sidebar.css'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isMedicineSubMenuVisible, setMedicineSubMenuVisible] = useState(false);
  const [isSupplierSubMenuVisible, setSupplierSubMenuVisible] = useState(false);
  const [isPurchaseSubMenuVisible, setPurchaseSubMenuVisible] = useState(false);
  const [isReportSubMenuVisible, setReportSubMenuVisible] = useState(false);
  const [isDashboardSubMenuVisible, setDashboardSubMenuVisible] = useState(false);


  const toggleMedicineSubMenu = () => {
    setMedicineSubMenuVisible(!isMedicineSubMenuVisible);
  };

  const toggleSupplierSubMenu = () => {
    setSupplierSubMenuVisible(!isSupplierSubMenuVisible);
  };

  const togglePurchaseSubMenu = () => {
    setPurchaseSubMenuVisible(!isPurchaseSubMenuVisible);
  };
  const toggleReportSubMenu = () => {
    setReportSubMenuVisible(!isReportSubMenuVisible);
  };
  const toggleDashboardSubMenu = () => {
    setDashboardSubMenuVisible(!isDashSuboardbMenuVisible);
  };


  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <img src={logo} alt="" className='logoimage' />
          Pharmacy Admin
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
      <li className={`sidebar-list-item ${isMedicineSubMenuVisible ? 'active' : ''}`}>
          <div onClick={toggleDashboardSubMenu}>
          <Link to="/home" className='dashboard'>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
          </div>
        </li>
       
         <li className={`sidebar-list-item ${isMedicineSubMenuVisible ? 'active' : ''}`}>
          <div onClick={toggleMedicineSubMenu}>
            <Medication className='icon' /> Medicine
          </div>
          {isMedicineSubMenuVisible && (
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link to="/add-medicine" className='Hide-line'>Add Medicine</Link>
              </li>
              <li className='sub-menu-item'>
                <Link to="/manage-medicine"  className='Hide-line'>Manage Medicine</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${isSupplierSubMenuVisible ? 'active' : ''}`}>
          <div onClick={toggleSupplierSubMenu}>
            <Support className='icon' /> Supplier
            </div>
          {isSupplierSubMenuVisible && (
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                
                <Link to="/add-supplier"  className='Hide-line'>Add Supplier</Link>
              </li>
              <li className='sub-menu-item'>
                <Link to="/manage-supplier"  className='Hide-line'>Manage Supplier</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${isPurchaseSubMenuVisible ? 'active' : ''}`}>
          <a href="#" onClick={togglePurchaseSubMenu}>
            <BsMenuButtonWideFill className='icon' /> Purchase
          </a>
          {isPurchaseSubMenuVisible && (
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link to="/add-purchase"  className='Hide-line'>Add Purchase</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#"  className='Hide-line'>Manage Purchase</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${isPurchaseSubMenuVisible ? 'active' : ''}`}>
          <a href="#" onClick={toggleReportSubMenu}>
            <BsMenuButtonWideFill className='icon' /> Report
          </a>
          {isReportSubMenuVisible && (
            <ul className='sub-menu'>
               <li className='sub-menu-item'>
                <Link href="#"  className='Hide-line'>sales Item</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#"  className='Hide-line'>Purchase Item</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#"  className='Hide-line'>Sales Report</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#"  className='Hide-line'> Purchase Report</Link>
              </li>
             
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
