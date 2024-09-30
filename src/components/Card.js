import React from "react";
import './Card.css';
import { useNavigate } from 'react-router-dom';



function Card(){
   const navigate=useNavigate();

    const handlePins=()=>{
        navigate("/viewpins")
    }
    const handleCalculators=()=>{
        navigate("/viewcalculator")
    }
    const handleFolders=()=>{
        navigate("/viewfolders")
    }
    const handleOrganizer=()=>{
        navigate("/vieworganizer")
    }
    const handleMagnifiers=()=>{
        navigate("/viewmagnifiers")
    }
    const handleCutters=()=>{
        navigate("/viewcutters")
    }
    const hanldeMarkers=()=>{
        navigate("/viewmarkers")
    }
    const hanldeGlue=()=>{
        navigate("/viewglue")
    }
    return(
        <div className="cards">
            <h1>Our Products</h1>
        <div className="card-container">
            <div className="main-card">
                <div className="card" onClick={handlePins}> 
                    <img src="https://scooboo.in/cdn/shop/collections/CI-stapler_1.jpg?v=1715670751&width=400" alt="wait" />
                    <h2>Staplers & Pins</h2>
                </div>
                <div className="card" onClick={handleCalculators}>
                    <img src="https://scooboo.in/cdn/shop/collections/calculators-388860.jpg?v=1715861774&width=400" alt="wait" />
                    <h2>Calculators</h2>
                </div>
                <div className="card" onClick={handleFolders}>
                    <img src="https://scooboo.in/cdn/shop/collections/folders-fillings-593531.jpg?v=1715848179&width=400" alt="wait" />
                    <h2>Folders & Fillings</h2>
                </div>
                <div className="card" onClick={handleOrganizer}>
                    <img src="https://scooboo.in/cdn/shop/collections/organizers-953696_d4dc4904-4b4a-4a55-b4ac-eab86442c6b3.webp?v=1716360570&width=400" alt="wait" />
                    <h2>Organizers</h2>
                </div>
                <div className="card" onClick={handleMagnifiers}>
                    <img src="https://scooboo.in/cdn/shop/collections/magnifiers-644478.jpg?v=1715847593&width=400" alt="wait" />
                    <h2>Magnifiers</h2>
                </div>
                <div className="card" onClick={handleCutters}>
                    <img src="https://scooboo.in/cdn/shop/collections/cutters-265978.jpg?v=1715847522&width=400" alt="wait" />
                    <h2>Cutters</h2>
                </div>
                <div className="card" onClick={hanldeMarkers}>
                    <img src="https://scooboo.in/cdn/shop/files/CI-whiteboard_marker.webp?v=1721048348&width=400" alt="wait" />
                    <h2>Markers</h2>
                </div>
                <div className="card" onClick={hanldeGlue}>
                    <img src="https://scooboo.in/cdn/shop/collections/glue-adhesives-324914.jpg?v=1715848219&width=400" alt="wait" />
                    <h2>Glue & Adhesives</h2>
                </div>
            </div>
        </div>
        </div>
    )
}
export default Card;