import React, { useState } from 'react';
import { FaShoppingCart, FaSearch, FaBars } from 'react-icons/fa';
import './Navbar.css';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = isMobileMenuOpen ? 'auto' : 'hidden';
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); 
  };

  return (
    <nav className="navbar bk">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className="nav-logo">
          <Link to='/'>
            <img
              src="https://stationerypal.com/cdn/shop/files/stationery_pal_logo_no_bg_214x38.png?v=1677603810"
              alt="Logo"
            />
          </Link>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? 'nav-active' : ''}`}>
          <li><Link to='/' className='link'>Home</Link></li>
          <li><Link to='/viewfolders' className='link'>Folders</Link></li>
          <li><Link to='/viewpins' className='link'>Products</Link></li>
        </ul>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-icon"><FaSearch /></button>
        </div>

        <div className="cart-icon">
          <Link to="/cart">          
            <FaShoppingCart />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
