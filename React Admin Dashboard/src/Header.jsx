

// import React, { useState, useEffect, useRef } from 'react';
// import { BsJustify, BsSearch } from 'react-icons/bs';
// import { Settings } from '@mui/icons-material';
// import { Person, Password, Logout } from '@mui/icons-material';
// import ChangePassword from './components/Password/ChangePassword';
// import EditProfile from './components/MyProfile/EditProfile'

// function Header({ OpenSidebar }) {
//   const [isInputVisible, setInputVisible] = useState(false);
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [isChangePasswordFormVisible, setChangePasswordFormVisible] = useState(false);
//   const inputRef = useRef(null);
//   const dropdownRef = useRef(null);

//   const handleSearchIconClick = () => {
//     setInputVisible(!isInputVisible);
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (inputRef.current && !inputRef.current.contains(event.target)) {
//         setInputVisible(false);
//       }
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownVisible(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const handleMenuItemClick = (action) => {
//     if (action === 'Change Password') {
//       setChangePasswordFormVisible(true);
//     } else {
//       // Handle other menu item clicks (My Profile, Logout, etc.)
//       console.log(`Clicked: ${action}`);
//       // Add your logic here, such as redirecting to different pages or performing logout actions.
//     }
//     setDropdownVisible(false); // Close the dropdown after clicking any menu item
//   };

//   const handlePasswordChangeCancel = () => {
//     console.log('Password change form canceled');setChangePasswordFormVisible(false);
//   };


//   //for edit profile
//   const [isMyProfileFormVisible, setMyProfileFormVisible] = useState(false);
//   const handleMenuItemClicks = (action) => {
//     if (action === 'My Profile') {
//       setMyProfileFormVisible(true);
//     } else if (action === 'Change Password') {
//       setChangePasswordFormVisible(true);
//     } else if (action === 'Logout') {
//       // Handle Logout logic
//     }
//     setDropdownVisible(false); // Close the dropdown after clicking any menu item
//   };

  
//   const closeMyProfileForm = () => {
//     setMyProfileFormVisible(false);
//   };

//   const saveProfileData = (profileData) => {
//     // Perform validation and save the profile data (API call, state update, etc.)
//     console.log('Saving profile data:', profileData);
//     // Close the form after saving
//     closeMyProfileForm();
//   };


//   return (
//     <header className='header'>
//       <div className='menu-icon'>
//         <BsJustify className='icon' onClick={OpenSidebar} />
//       </div>
//       <div className='header-left'>
//         <div className='search-container' ref={inputRef}>
//           {isInputVisible && <input type="text" className='searchinput' id='search' placeholder='search' />}
//           <BsSearch className='icon' onClick={handleSearchIconClick} />
//         </div>
//       </div>
//       <div className='header-right'>
//         <div className='settings-icon-container' ref={dropdownRef}>
//           <Settings className='icon' onClick={toggleDropdown} />
//           {isDropdownVisible && (
//             <div className='dropdown-menu'>
//               <div onClick={() => handleMenuItemClicks('Edit Profile')} className='setting-dropdown'>
//                 <Person className='setting-profile' /> My-Profile
//               </div>
//                {/* {isChangePasswordFormVisible && (
//         <ChangePassword onSubmit={handlePasswordChangeSubmit} onCancel={handlePasswordChangeCancel} />
//       )} */}
//               <div onClick={() => handleMenuItemClick('Change Password')} className='setting-dropdown'>
//                 <Password /> Change Password
//               </div>
//               <div onClick={() => handleMenuItemClick('Logout')} className='setting-dropdown'>
//                 <Logout /> Logout
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//       {isMyProfileFormVisible && <EditProfile onCancel={closeMyProfileForm} onSave={saveProfileData} />}
//       {isChangePasswordFormVisible && <ChangePassword  onCancel={handlePasswordChangeCancel}  />}
//     </header>
//   );
// }

// export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { BsJustify, BsSearch } from 'react-icons/bs';
import { Settings } from '@mui/icons-material';
import { Person, Password, Logout } from '@mui/icons-material';
import ChangePassword from './components/Password/ChangePassword';
import EditProfile from './components/MyProfile/EditProfile';

function Header({ OpenSidebar }) {
  const [isInputVisible, setInputVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isChangePasswordFormVisible, setChangePasswordFormVisible] = useState(false);
  const [isMyProfileFormVisible, setMyProfileFormVisible] = useState(false);

  const inputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleSearchIconClick = () => {
    setInputVisible(!isInputVisible);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setInputVisible(false);
      }
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = (action) => {
    if (action === 'Change Password') {
      setChangePasswordFormVisible(true);
    } else if (action === 'Edit Profile') {
      setMyProfileFormVisible(true);
    } else if (action === 'Logout') {
      // Handle Logout logic
    }
    setDropdownVisible(false); // Close the dropdown after clicking any menu item
  };

  const handlePasswordChangeCancel = () => {
    console.log('Password change form canceled');
    setChangePasswordFormVisible(false);
  };

  const closeMyProfileForm = () => {
    setMyProfileFormVisible(false);
  };

  const saveProfileData = (profileData) => {
    // Perform validation and save the profile data (API call, state update, etc.)
    console.log('Saving profile data:', profileData);
    // Close the form after saving
    closeMyProfileForm();
  };

  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' onClick={OpenSidebar} />
      </div>
      <div className='header-left'>
        <div className='search-container' ref={inputRef}>
          {isInputVisible && <input type="text" className='searchinput' id='search' placeholder='search' />}
          <BsSearch className='icon' onClick={handleSearchIconClick} />
        </div>
      </div>
      <div className='header-right'>
        <div className='settings-icon-container' ref={dropdownRef}>
          <Settings className='icon' onClick={toggleDropdown} />
          {isDropdownVisible && (
            <div className='dropdown-menu'>
              <div onClick={() => handleMenuItemClick('Edit Profile')} className='setting-dropdown'>
                <Person className='setting-profile' /> My-Profile
              </div>
              <div onClick={() => handleMenuItemClick('Change Password')} className='setting-dropdown'>
                <Password /> Change Password
              </div>
              <div onClick={() => handleMenuItemClick('Logout')} className='setting-dropdown'>
                <Logout /> Logout
              </div>
            </div>
          )}
        </div>
      </div>
      {isMyProfileFormVisible && <EditProfile onCancel={closeMyProfileForm} onSave={saveProfileData} />}
      {isChangePasswordFormVisible && <ChangePassword onCancel={handlePasswordChangeCancel} />}
    </header>
  );
}

export default Header;


