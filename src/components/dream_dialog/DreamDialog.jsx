import "DreamDialog.css";

const DreamDialog = () => {
    return (
    <div id="dream-dialog" className="w3-modal">
        <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container">
                <span id="dialog-close" className="w3-button w3.display-topright" onclick={prop.close_dialog}>
                    &times;
                </span>
            </div>
            <div id = "dream-dialog-content">
                <h2>{prop.title}</h2>
            </div>
        </div>
    </div>);
};

export default DreamDialog;