import React from "react";
import "./CardSection.css";

function CardSection() {
  return (
    <div className="cardsection-main">
      <span>Dive Into A world of Creativity With Our Artistry & Crafting Wonders</span>
      <div className="cardsection-container">
        <div className="cardsection">
          <img
            src="https://scooboo.in/cdn/shop/files/newtheme_under_99-2.jpg?v=1716004556&width=1000"
            alt="wait"
          />
        </div>
        <div className="cardsection">
          <img
            src="https://scooboo.in/cdn/shop/files/newtheme_under_199-2.jpg?v=1716004557&width=1000"
            alt="wait"
          />
        </div>
        <div className="cardsection">
          <img
            src="https://scooboo.in/cdn/shop/files/newtheme_under_299-2.jpg?v=1716004557&width=1000"
            alt="wait"
          />
        </div>
        <div className="cardsection">
          <img
            src="https://scooboo.in/cdn/shop/files/under_499_-2.jpg?v=1716012319&width=1000"
            alt="wait"
          />
        </div>
      </div>
    </div>
  );
}

export default CardSection;
