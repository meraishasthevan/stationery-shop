import React from "react";
import './ViewCalculator.css'; 
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice"; 

function ViewCalculator() {
  const dispatch = useDispatch();
  const allCalculator = [
    {
      id: 1,
      image: 'https://scooboo.in/cdn/shop/products/deli-easy-electronic-calculatorcalculatorsdeliscooboo39231b6921734947659-318604.jpg?v=1658352311&width=575',
      name: 'Calculators',
      description: 'Deli Easy Electronic Calculator',
      price: 395,
    },
    {
      id: 2,
      image: 'https://scooboo.in/cdn/shop/products/deli-scientific-calculator-d-100mscalculatordeliscoobood-100ms6921734912350-790407.jpg?v=1668501397&width=575',
      name: 'Calculators',
      description: 'Deli Scientific Calculator D-100MS',
      price: 395,
    },
    {
      id: 3,
      image: 'https://scooboo.in/cdn/shop/products/deli-scientific-calculator-d82mscalculatordeliscoobood82ms6921734995865-476534.jpg?v=1668501397&width=575',
      name: 'Calculators',
      description: 'Deli Scientific Calculator D82MS',
      price: 450,
    },
    {
      id: 4,
      image: 'https://scooboo.in/cdn/shop/products/flair-electronic-calculator-fc-512mdigital-calculatorsflairscooboofc-512m8901765118219-800058.jpg?v=1673501320&width=575',
      name: 'Calculators',
      description: 'Flair Electronic Calculator (FC-512M)',
      price: 400,
    },
    {
      id: 5,
      image: 'https://scooboo.in/cdn/shop/products/jumbo-gel-pen-set-05mm-gel-pens-scooboo-883444.jpg?v=1676906286&width=575',
      name: 'Gel Pen Set',
      description: 'JUMBO Gel Pen Set 0.5mm',
      price: 300,
    },
    {
      id: 6,
      image: 'https://scooboo.in/cdn/shop/files/kaco-pure-macaron-gel-pens-set-of-5-assorted-colours-05mm-gel-pens-scoobookaco6958961226752pure-classic-i-215008.jpg?v=1712067966&width=575',
      name: 'Gel Pen Set',
      description: 'Kaco Pure Macaron Gel Pens - Set of 5 - Assorted Colours',
      price: 350,
    },
    {
      id: 7,
      image: 'https://scooboo.in/cdn/shop/products/rocket-gel-pen-set-05mm-gel-pens-scooboo-191004.jpg?v=1695639207&width=575',
      name: 'Gel Pen Set',
      description: 'Rocket Gel Pen Set 0.5mm',
      price: 375,
    },
    {
      id: 8,
      image: 'https://scooboo.in/cdn/shop/files/kaco-pure-gel-pens-07mm-pack-of-10-gel-pens-scoobookaco6958961241809k1015-126442.jpg?v=1712067968&width=575',
      name: 'Gel Pen Set',
      description: 'Kaco Pure Gel Pens 0.7mm - Pack of 10',
      price: 500,
    },
  ];
  const handleAddToCart = (item) => {
    dispatch(addToCart(item)); 
    alert(`${item.name} added to cart`); 
  };

  return (
    <div className="calculator-container cb">
      <div className="calculator-banner">
        <img src="https://scooboo.in/cdn/shop/files/Banner_01_e8fcfc51-a95d-4271-a159-ad8a6aa8805d.jpg?v=1714821913&width=2400" alt="wait" />
      </div>
      <div className="calculator-grid">
        {allCalculator.map((item) => (
          <div className="calculator-card" key={item.id}>
            <img src={item.image} alt={item.name} className="calculator-image" />
            <div className="calculator-content">
              <h3>{item.description}</h3>
              <p>Price: ₹{item.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)} >Add to Cart</button>
            </div>
          </div>
        ))}      
      </div>
    </div>
  );
}

export default ViewCalculator;
