import "./DreamDialog.css";
import { useState } from "react";

const DreamDialog = (prop) => {
    const [showDetails, setShowDetails] = useState("details");
    
    return (
    <div id="dream-dialog" className="w3-modal">
        <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container">
                <span id="dialog-close" className="w3-button w3.display-topright" onclick={prop.close_dialog}>
                    &times;
                </span>
            </div>
            <div id = "dream-dialog-content">
                {showDetails === "details" && (
                    <>
                        <h2>{prop.title}</h2>
                        <h3>{prop.type}</h3>
                        <p>{prop.description}</p>
                        <img src={prop.image} alt={prop.title} />
                    </>
                )}
            </div>
        </div>
    </div>);
};

export default DreamDialog;