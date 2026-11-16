import "./DreamDialog.css";

const DreamDialog = (prop) => (
    <div id="dream-dialog" className="w3-modal">
        <div className="w3-modal-content">
            <div className="w3-container">
                <span id="dialog-close" className="w3-button w3.display-topright" onClick={prop.onClose}>
                    &times;
                </span>
            </div>
            <div id="dream-dialog-content">
                <h2>{prop.title}</h2>
                <h3>{prop.type}</h3>
                <p>{prop.description}</p>
                {prop.iframeSrc ? (
                    <iframe
                        src={prop.iframeSrc}
                        title={`${prop.title} map`}
                        loading="lazy"
                    />
                ) : prop.img_name ? (
                    <img src={prop.img_name} alt={prop.title} />
                ) : null}
                <p>ID: {prop.id}</p>
            </div>
        </div>
    </div>
);

export default DreamDialog;