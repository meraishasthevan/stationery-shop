import React from "react";
import './Logo.css';

function Logo() {
    const logos = [
        "https://scooboo.in/cdn/shop/files/LOGO-lamy.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-scrikss.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-pelikan_-2.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-gioia.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-YSTUDIO.jpg?v=1723707453&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-worther-2.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-diplomat.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-PENLUX.jpg?v=1723707452&width=180",
        "https://scooboo.in/cdn/shop/files/LOGO-opus88-2.jpg?v=1723707453&width=180",
    ];

    return (
        <div className="logo-container">
              <div className="logo">
                <img src="https://scooboo.in/cdn/shop/files/scooboo_luxe-banner_400_-2.jpg?v=1724142145&width=2400" alt="Main Logo" />
              </div>

            <div className="logos-row">
                {logos.map((logo, index) => (
                    <div className="logo-item" key={index}>
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
                {logos.map((logo, index) => (
                    <div className="logo-item" key={`duplicate-${index}`}>
                        <img src={logo} alt={`Logo ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Logo;
