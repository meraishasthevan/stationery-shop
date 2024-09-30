import React from "react";
import './ViewGlue.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewGlue() {

  const dispatch = useDispatch();

  const handleAddToCart = (glue) => {
    dispatch(addToCart(glue)); 
    alert(`${glue.name} added to cart`); 
  };

  const allGlue = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/deli-stick-up-liquid-glue-50mlgluedeliscooboo7302s6935205391933-712927.jpg?v=1668400144&width=575",
      name: "Deli",
      description: "Deli Stick Up Liquid Glue 50ml",
      price: 25,
    },
    {
      id: 2,
      image:
        "https://scooboo.in/cdn/shop/files/soni-officemate-glue-stick-set-8-grams-glue-adhesive-scooboosoni-officemate8906001226901-545004.jpg?v=1713412341&width=575",
      name: "Soni Officemate",
      description: "Soni Officemate Glue Stick Set",
      price: 50,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/tombow-tape-glue-pit-air-ash-color-glue-adhesive-scooboo-730122.jpg?v=1702448278&width=575",
      name: "Tombow Japan",
      description: "Tombow Tape Glue Pit Air Ash Color",
      price: 660,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/deli-30110-invisible-tape-glue-adhesive-scooboo-240996.jpg?v=1706630397&width=575",
      name: "Deli",
      description: "Deli 30110 Invisible Tape",
      price: 50,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/doms-pencils-918481.jpg?v=1641550406&width=575",
      name: "Doms",
      description: "DOMS Pencils (Pack of 2)",
      price: 120,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/files/kokuyo-campus-junior-pencil-13-scoobooscooboo-4901480263618ps-c101b-1p-871726.jpg?v=1716718347&width=575",
      name: "Kokuyo",
      description: "Kokuyo Campus Junior Pencil 1.3",
      price: 300,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/files/uni-mechanical-lead-sharp-05-hb-pencil-lead-refills-scooboouni4902778313619ulsf05hb32-326632.jpg?v=1721960857&width=575",
      name: "Uni",
      description: "Uni Mechanical Lead Sharp 0.5 HB",
      price: 300,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/products/solo-5-subject-notebook-b5ruledsoloscooboo-563826.jpg?v=1668854745&width=575",
      name: "Solo",
      description: "Solo 5 Subject Notebook",
      price: 285,
    },
  ];

  return (
    <div className="glue-container">
      <div className="glue-banner">
        <img
          src="https://scooboo.in/cdn/shop/files/Banner_01_f6d1a05a-f821-4bc9-b7d9-86a47ca712e2.jpg?v=1714994998&width=4000"
          alt="wait"
        />
      </div>
      <div className="glue-grid">
        {allGlue.map((glue) => (
          <div key={glue.id} className="glue-card">
            <img src={glue.image} alt={glue.name} className="glue-image" />
            <div className="glue-info">
              <h3 className="glue-name">{glue.name}</h3>
              <p className="glue-description">{glue.description}</p>
              <p className="glue-price">₹{glue.price}</p>
              <button className="add-to-cart-glue-button" onClick={() => handleAddToCart(glue)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewGlue;
