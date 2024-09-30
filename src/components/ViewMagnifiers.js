import React from "react";
import "./ViewMagnifiers.css"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 
function ViewMagnifiers() {

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    alert(`${item.name} added to cart`); 
  };
  const allMagnifiers = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/deli-w9099-magnifier-3x-white-magnifier-scooboo-699442.jpg?v=1689425071&width=400",
      name: "Deli",
      description: "Deli W9099 Magnifier 3X",
      price: 610,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/products/sun-star-magnifying-glass-with-standrulers-measuring-toolssun-starscooboos40600754901770878713-572647.jpg?v=1671917636&width=400",
      name: "Sun Star",
      description: "Sun Star Magnifier With Stand",
      price: 700,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/maped-75mm-x3-zoom-magnifiermagnifiersmapedscooboo-0393003154140393007-465223.jpg?v=1644413038&width=400",
      name: "Maped",
      description: "Maped 75mm X3 Zoom Magnifier",
      price: 350,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/deli-magnifying-glass-with-led-light-60-mm-whitemagnifiersdeliscooboo90986921734990983-748425.jpg?v=1658439540&width=400",
      name: "Deli",
      description: "Magnifying Glass With LED Light",
      price: 400,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/sun-star-kids-portable-scissorscissorssun-starscooboos37201364901770651637-728232.jpg?v=1672094346&width=575",
      name: "Sun Star",
      description: "Sun Star Kids Portable Scissor",
      price: 600,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/products/sun-star-long-sticky-scissorscissorssun-starscooboos37175264901770578132-281275.jpg?v=1719474292&width=575",
      name: "Sun Star",
      description: "Sun Star Long Sticky Scissor",
      price: 600,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/plus-japan-kitchen-scissorscissorsplus-japanscooboosc-200-sw-o-mgr-805440.jpg?v=1666123151&width=575",
      name: "Plus Japan",
      description: "Plus Japan Kitchen Scissor",
      price: 899,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/products/deli-w6067-school-scissors-scissors-scooboo-349370.jpg?v=1689425069&width=575",
      name: "Deli",
      description: "Deli W6067 School Scissors",
      price: 70,
    },
  ];

  return (
    <div className=" magni-container">
      <div className="magnifiers-banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Banner_01_0bda7981-5948-4ac9-a550-4fb699192993.jpg?v=1714822270&width=4000"
          alt="Banner"
        />
      </div>
      <div className="magnifiers-grid">
        {allMagnifiers.map((item) => (
          <div key={item.id} className="magnifier-card">
            <img src={item.image} alt={item.name} className="magnifier-image" />
            <div className="magnifier-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="magnifier-price">₹{item.price}</p>
              <button className="add-to-cart-magni" onClick={() => handleAddToCart(item)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMagnifiers;
