import React from "react";
import "./ViewFolders.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartSlice";  

function ViewFolders() {
  const dispatch = useDispatch();


  const handleAddToCart = (folder) => {
    dispatch(addToCart(folder)); 
    alert(`${folder.name} added to cart`); 
  };
  const allFolders = [
    {
      id: 1,
      image:
        "https://scooboo.in/cdn/shop/products/kaco-esto-digital-storage-case-folders-fillings-scoobookacokaco-esto-black-983620.jpg?v=1709998177&width=400",
      name: "Kaco Esto Digital Storage Case",
      description: "3 Colors Available",
      price: 3800,
    },
    {
      id: 2,
      image:'https://scooboo.in/cdn/shop/products/deli-display-book-a4-10-pocketsfile-folderdeliscooboo50016921734950017-780248.jpg?v=1658439547&width=575',
      name: "Deli Display Book A4 Pockets",
      description: "3 Colors Available",
      price: 119,
    },
    {
      id: 3,
      image:
        "https://scooboo.in/cdn/shop/products/solo-my-zipper-closure-bag-854250.jpg?v=1656417768&width=400",
      name: "Solo My Zipper Closure Bag",
      description: "5 Colors Available",
      price: 60,
    },
    {
      id: 4,
      image:
        "https://scooboo.in/cdn/shop/products/deli-e39656-lever-arch-file-114237.jpg?v=1658409337&width=400",
      name: "Deli Lever Arch File",
      description: "2 Colors Available",
      price: 200,
    },
    {
      id: 5,
      image:
        "https://scooboo.in/cdn/shop/products/kaco-red-alio-business-folder-collaboration-with-national-museum-of-china-folders-fillings-scoobookaco6958961241878k1202-845971.jpg?v=1707314299&width=400",
      name: "Kaco Red Alio Business Folder",
      description: "9 Colors Available",
      price: 3500,
    },
    {
      id: 6,
      image:
        "https://scooboo.in/cdn/shop/products/solo-my-zipper-bag-pack-of-2folders-report-coverssoloscooboomc1058904108222352-474928.jpg?v=1656425556&width=400",
      name: "Solo My Zipper Bag-Pack Of 2",
      description: "3 Colors Available",
      price: 120,
    },
    {
      id: 7,
      image:
        "https://scooboo.in/cdn/shop/products/fizz-snap-button-pocket-file-folders-fillings-scooboo-150873.jpg?v=1690382992&width=575",
      name: "Fizz Snap Button Pocket File",
      description: "1 Color Available",
      price: 750,
    },
    {
      id: 8,
      image:
        "https://scooboo.in/cdn/shop/files/solo-my-clear-bag-twin-pocket-double-color-fc-folders-fillings-scooboosolo890410822216mc212-254629.jpg?v=1723104477&width=400",
      name: "Solo My Clear Bag - FC",
      description: "4 Colors Available",
      price: 40,
    },
  ];

  return (
    <div className="view-folders">
    <div className="banner">
      <img
        src="https://scooboo.in/cdn/shop/files/Banner_01_739080a5-5d69-48ad-a34a-e1d14178cc71.jpg?v=1714821857&width=2400"
        alt="Banner"
      />
    </div>
    <div className="container">
      <div className="folders-container">
        {allFolders.map((folder) => (
          <div className="folder-card" key={folder.id}>
            <img src={folder.image} alt={folder.name} className="folder-image" />
            <div className="folder-info">
              <h3>{folder.name}</h3>
              <p>{folder.description}</p>
              <p className="price">₹{folder.price}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(folder)} >Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
}

export default ViewFolders;
