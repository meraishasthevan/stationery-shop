import React from "react";
import "./ViewCutters.css"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewCutters() {
  const dispatch = useDispatch();


  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    alert(`${item.name} added to cart`); 
  };
  const allCutters = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/plus-japan-team-demi-cutterruler-cutter-scooboo-401265.jpg?v=1681770183&width=575",
      name: "Plus Japan",
      description: "Plus Japan Team Demi Cutter+Ruler",
      price: 225,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/products/plus-japan-cutter-knife-465835.jpg?v=1677755936&width=575",
      name: "Plus Japan",
      description: "Plus Japan Cutter Knife",
      price: 100,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/kaco-express-pen-cutter-paint-marker-scooboo-656343.jpg?v=1722836460&width=575",
      name: "Kaco",
      description: "Kaco Express Pen + Cutter",
      price: 200,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/maped-cuttercuttersmapedscooboo0922113154140922115-805094.jpg?v=1654157454&width=575",
      name: "Mapped",
      description: "Mapped Cutter",
      price: 35,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/deli-comiko-cutting-knife-cutters-scooboo-935179.jpg?v=1677165581&width=575",
      name: "Deli",
      description: "Deli Comiko Cutting Knife",
      price: 30,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/files/kokuyo-hasa-2-way-scissors-cutter-cutter-scoobookokuyot420yr-559935.jpg?v=1712351520&width=575",
      name: "Kokuyo",
      description: "Kokuyo Hasa 2-Way Scissors Cutter",
      price: 2340,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/lemo-cutter-in-blister-pack-cutter-scoobookaco-187256.jpg?v=1710516551&width=575",
      name: "Kaco",
      description: "Lemo Cutter in Blister Pack",
      price: 375,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/products/sun-star-kadomaru-pro-corner-cuttercuttersun-starscooboos47650364901770338842-866056.jpg?v=1671819945&width=575",
      name: "Sun Star",
      description: "Sun Star Kadomaru Pro Corner Cutter",
      price: 980,
    },
  ];
  

  return (
    <div className="cutters-container">
      <div className="cutters-banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Banner_01_5cd3edc7-aa3a-4069-9c5d-af37a16e09a5.jpg?v=1714821777&width=4000"
          alt="wait"
        />
      </div>
      <div className="cutters-grid">
        {allCutters.map((item) => (
          <div key={item.id} className="cutter-card">
            <img src={item.image} alt={item.name} className="cutter-image" />
            <div className="cutter-details">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p className="cutter-price">₹{item.price}</p>
              <button className="add-to-cart-cutter" onClick={() => handleAddToCart(item)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCutters;
