import React from "react";
import "./ViewPins.css"; 
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewPins() {

  const dispatch = useDispatch();


  const handleAddToCart = (pin) => {
    dispatch(addToCart(pin)); 
    alert(`${pin.name} added to cart`); 
  };
  const allPins = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/kangaro-sr-500-heavy-duty-staple-remover-597171.jpg?v=1641550695&width=400",
      name: "Staplers & Pins",
      description: "Kangaro SR-500 Heavy Duty Staple Remover",
      price: 280,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/products/deli-exceed-stapler-setstaplerdeliscooboo0229a6973504002075-815553.jpg?v=1720419050&width=400",
      name: "Staplers & Pins",
      description: "Deli Exceed Stapler Set With Pins",
      price: 195,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/kangaro-stationery-gift-set-ss-t10-mstationary-kitkangaroscoobooss-t10m8901057303262-568292.jpg?v=1664596497&width=400",
      name: "Staplers & Pins",
      description: "Kangaro Stationery Gift Set SS-T10 M",
      price: 448,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/plus-office-paper-staplerstaplersplus-japanscooboo-st-010eh4977564191269-213347.jpg?v=1653508733&width=400",
      name: "Staplers & Pins",
      description: "Plus Office Paper Stapler With Pins",
      price: 275,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/kangaro-paper-punch-dp-52ystapler-puncheskangaroscooboodp-52y8901057200301-221988.jpg?v=1671259805&width=575",
      name: "Paper Punches",
      description: "Kangaro Paper Punch DP 52/Y",
      price: 290,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/products/kangaro-paper-punch-dp-280ystapler-puncheskangaroscooboodp-280y8901057200318-870926.jpg?v=1671259805&width=575",
      name: "Paper Punches",
      description: "Kangaro Paper Punch DP-280/Y",
      price: 130,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/kangaro-paper-punch-perfo-30paper-puncherkangaroscoobooperfo-308901057201353-930187.jpg?v=1664503221&width=400",
      name: "Paper Punches",
      description: "Kangaro Paper Punch Perfo-30",
      price: 200,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/products/roto-clip-5pcshole-punchessoloscooboorc1238904108214142-340881.jpg?v=1655547775&width=400",
      name: "Paper Clips",
      description: "Solo Roto Clip 5Pcs",
      price: 40,
    },
  ];

  return (
    <div className="pin-container">
      <div className="pin-banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Coll_banner_website_Staplers_Pins.jpg?v=1716362600&width=2400"
          alt="Staplers and Pins Banner"
        />
      </div>
      <div className="pin">
        {allPins.map((pin) => (
          <div key={pin.id} className="pin-card">
            <img src={pin.image} alt={pin.description} className="pin-image" />
            <div className="pin-content">
              <h3 className="pin-name">{pin.name}</h3>
              <p className="pin-description">{pin.description}</p>
              <p className="pin-price">₹{pin.price}</p>
              <button className="add-to-cart" onClick={() => handleAddToCart(pin)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewPins;
