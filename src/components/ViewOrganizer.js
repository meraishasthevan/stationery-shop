import React from "react";
import "./ViewOrganizer.css"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewOrganizer() {

  const dispatch = useDispatch();


  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    alert(`${item.name} added to cart`); 
  };
  const allOrganizer = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/sun-star-tower-pen-standpen-stand-organiserssun-starscooboos24035104901770671338-639353.jpg?v=1672094352&width=400",
      name: "Sun Star Tower Pen Stand",
      description: "3 colors available",
      price: 800,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/files/solo-pen-holder-pen-holder-scooboosolo8904108214128ds201-938545.jpg?v=1723104475&width=400",
      name: "Solo Pen Holder",
      description: "4 colors available",
      price: 120,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/deli-904-compartments-plastic-pen-holder-yelloworganizersdeliscooboo9046921734909046-281900.jpg?v=1677132535&width=400",
      name: "Deli 904 Compartments Plastic Pen Holder",
      description: "2 colors available",
      price: 195,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/deli-pen-stand-9155-organizer-scooboo-873188.jpg?v=1677165735&width=400",
      name: "Deli Pen Stand 9155",
      description: "2 colors available",
      price: 200,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/deli-rotary-desk-organizerdesk-organizersdeliscooboo38250a6935205382504-497717.jpg?v=1677131823&width=400",
      name: "Deli Rotary Desk Organizer",
      description: "2 colors available",
      price: 850,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/products/litem-book-rack-with-drawersfiling-organizationlitemscooboo-280139-708711.jpg?v=1663679759&width=400",
      name: "Litem Book Rack With Drawers",
      description: "3 colors available",
      price: 2300,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/solo-paper-file-tray-2-compartmentsfile-racksoloscoobootr1128904108214050-654006.jpg?v=1656743463&width=400",
      name: "Solo Paper & File Tray- 2 Compartments",
      description: "3 colors available",
      price: 850,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/products/khyati-trendy-pen-standpen-stand-organiserskhyatiscooboos6268906035936265-952455.jpg?v=1697546962&width=575",
      name: "Khyati Trendy Pen Stand",
      description: "3 colors available",
      price: 230,
    },
  ];

  return (
    <div className="view-organizer view-container">
      <div className="banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Banner_01_f4417bb0-6f0d-448f-a268-7a237a924773.jpg?v=1714821971&width=2400"
          alt="wait"
        />
      </div>
      <div className="organizer-grid">
        {allOrganizer.map((item) => (
          <div className="organizer-card" key={item.id}>
            <img src={item.image} alt={item.name} className="organizer-image" />
            <h3 className="organizer-name">{item.name}</h3>
            <p className="organizer-description">{item.description}</p>
            <p className="organizer-price">₹{item.price}</p>
            <button className="add-to-cart-organize-btn" onClick={() => handleAddToCart(item)} >Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewOrganizer;
