import "./Dream.css";

const Dream = (prop) => {
    const imageSrc = 'https://lucid-backend-xqj7.onrender.com/${prop.img_name}';
    return (
        <section className="dream">
            <h4>{prop.title}</h4>
            <h5>{prop.type}</h5>
            {prop.iframeSrc ? (
                <iframe
                    src={prop.iframeSrc}
                    title={`${prop.title} map`}
                    loading="lazy"
                />
            ) : (
                <img src={imageSrc} alt={prop.title} />
            )}
            <p>{prop.description}</p>
        </section>
    )
}

export default Dream;