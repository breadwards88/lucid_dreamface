import "./Dream.css";
import {API_BASE_URL} from "../../config";
import DreamDialog from "../dream_dialog/DreamDialog";
import {useState} from "react";

const Dream = (prop) => {
    const imageName = prop.img_name ?? prop.src;
    const isMap = imageName?.includes("google.com/maps/embed");
    const imageSrc = imageName
        ? imageName.startsWith("http")
            ? imageName
            : `{API_BASE_URL}/${imageName.replace(/^\/public/, "")}`
        : null;
    const [showDialog, setShowDialog] = useState(false);
    const showDetails = () => {
        setShowDialog(true);
    };
    const hideDetails = (e) => {
        e.stopPropagation();
        setShowDialog(false);
    };
    return (
        <section className="dream" onClick={showDetails}>
            <h4>{prop.title}</h4>
            <h5>{prop.type}</h5>
            {prop.iframeSrc || isMap ? (
                <iframe
                    src={prop.iframeSrc || imageName}
                    title={`${prop.title} map`}
                    loading="lazy"
                />
            ) : imageSrc ? (
                <img src={imageSrc} alt={prop.title} />
            ) : null}
            <p>{prop.description}</p>
            {showDialog && <DreamDialog 
                id={prop.id}
                title={prop.title}
                type={prop.type}
                description={prop.description}
                image={imageSrc}
                onClose={hideDetails}
            />}
        </section>
    )
}

export default Dream;