import React from "react";
import './ViewMarkers.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewMarkers() {

  const dispatch = useDispatch();


  const handleAddToCart = (marker) => {
    dispatch(addToCart(marker)); 
    alert(`${marker.name} added to cart`); 
  };

  const allMarkers = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/faber-castell-whiteboard-marker-196479.jpg?v=1641550479&width=575",
      name: "Faber-Castell",
      description: "Faber-Castell Whiteboard Marker",
      price: 28,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/products/solo-refillable-whiteboard-marker-pen-816126.jpg?v=1641551740&width=575",
      name: "Solo",
      description: "Solo Refillable Whiteboard Marker Pen",
      price: 40,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/deli-wu008-bl-whiteboard-marker-white-board-permanent-markers-scooboo-452042.jpg?v=1689425080&width=575",
      name: "Deli",
      description: "Deli WU008-BL Whiteboard Marker",
      price: 65,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/files/soni-officemate-whiteboard-marker-pen-for-office-pack-of-10-white-board-marker-scooboosoni-officemate8906001220046-780497.png?v=1713499255&width=575",
      name: "Soni Officemate",
      description: "Soni Officemate Whiteboard Marker Pen",
      price: 270,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/files/pilot-frixion-highlighter-6-color-set-highlighter-scooboopilot-japansfl-60sl-6cs-325276.jpg?v=1723899741&width=575",
      name: "Pilot Japan",
      description: "Pilot Frixion Highlighter 6 Color Set",
      price: 875,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/products/stabilo-arty-pastel-mixed-set-of-50-highlighter-scooboo-201936.jpg?v=1684996260&width=575",
      name: "Stabilo",
      description: "Stabilo Boss Pastel Highlighter Pen Set",
      price: 610,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/stabilo-boss-pastel-highlighter-pen-set-297934.jpg?v=1641551759&width=575",
      name: "Stabilo",
      description: "Stabilo Arty Pastel Mixed Set of 50",
      price: 9400,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/files/stabilo-swing-cool-pastel-pack-of-8pcs-highlighter-scooboostabilo2758-08-1-530990.jpg?v=1719319293&width=575",
      name: "Stabilo",
      description: "Stabilo Swing Cool Pastel Highlighters",
      price: 1210,
    },
  ];

 

  return (
    <div className="markers-container ">
      <div className="markers-banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Banner_01_58f78fe7-3cbc-42a1-a893-dbe788563cd2.jpg?v=1714821131&width=4000"
          alt="Markers Banner"
        />
      </div>
      <div className="markers-grid">
        {allMarkers.map((marker) => (
          <div key={marker.id} className="marker-card">
            <img src={marker.image} alt={marker.name} className="marker-image" />
            <div className="marker-info">
              <h3 className="marker-name">{marker.name}</h3>
              <p className="marker-description">{marker.description}</p>
              <p className="marker-price">₹{marker.price}</p>
              <button className="add-to-cart-marker-button" onClick={() => handleAddToCart(marker)} >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewMarkers;
