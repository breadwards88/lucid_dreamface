import "./Dream.css";

const Dream = (prop) => {
    return (
        <section className="dream">
            <h4>{prop.title}</h4>
            <p>{prop.description}</p>
            <h5>{prop.type}</h5>
            {prop.iframeSrc ? (
                <iframe
                    src={prop.iframeSrc}
                    title={`${prop.title} map`}
                    loading="lazy"
                />
            ) : (
                <img src={prop.src} alt={prop.title} />
            )}
        </section>
    )
}

export default Dream;