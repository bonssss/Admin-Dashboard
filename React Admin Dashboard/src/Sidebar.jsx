import React, { useState } from 'react';
import { BsGrid1X2Fill, BsMenuButtonWideFill } from 'react-icons/bs';
import { Medication } from '@mui/icons-material';
import { Support } from '@mui/icons-material';
import logo from './assets/logop.jpeg';
import { Link } from 'react-router-dom';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [isMedicineSubMenuVisible, setMedicineSubMenuVisible] = useState(false);
  const [isSupplierSubMenuVisible, setSupplierSubMenuVisible] = useState(false);
  const [isPurchaseSubMenuVisible, setPurchaseSubMenuVisible] = useState(false);

  const toggleMedicineSubMenu = () => {
    setMedicineSubMenuVisible(!isMedicineSubMenuVisible);
  };

  const toggleSupplierSubMenu = () => {
    setSupplierSubMenuVisible(!isSupplierSubMenuVisible);
  };

  const togglePurchaseSubMenu = () => {
    setPurchaseSubMenuVisible(!isPurchaseSubMenuVisible);
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
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
       
         <li className={`sidebar-list-item ${isMedicineSubMenuVisible ? 'active' : ''}`}>
          <div onClick={toggleMedicineSubMenu}>
            <Medication className='icon' /> Medicine
          </div>
          {isMedicineSubMenuVisible && (
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link to="/add-medicine">Add Medicine</Link>
              </li>
              <li className='sub-menu-item'>
                <Link to="/manage-medicine">Manage Medicine</Link>
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
                
                <Link to="/add-supplier">Add Supplier</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#">Manage Supplier</Link>
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
                <Link href="#">Add Purchase</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#">Manage Purchase</Link>
              </li>
            </ul>
          )}
        </li>
        <li className={`sidebar-list-item ${isPurchaseSubMenuVisible ? 'active' : ''}`}>
          <a href="#" onClick={togglePurchaseSubMenu}>
            <BsMenuButtonWideFill className='icon' /> Report
          </a>
          {isPurchaseSubMenuVisible && (
            <ul className='sub-menu'>
              <li className='sub-menu-item'>
                <Link href="#">Sales Report</Link>
              </li>
              <li className='sub-menu-item'>
                <Link href="#"> Purchase Report</Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
