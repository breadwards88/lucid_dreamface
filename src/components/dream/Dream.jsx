import "./Dream.css";

const Dream = (prop) => {
    const imageName = prop.img_name ?? prop.src;
    const isMap = imageName?.includes("google.com/maps/embed");
    const imageSrc = imageName
        ? imageName.startsWith("http")
            ? imageName
            : `https://lucid-backend-xqj7.onrender.com${imageName.replace(/^\/public/, "")}`
        : null;
    return (
        <section className="dream">
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
        </section>
    )
}

export default Dream;