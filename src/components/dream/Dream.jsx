import "./Dream.css";

const Dream = (prop) => {
    return (
        <section className="dream">
            <h3>{prop.title}</h3>
            <p>{prop.description}</p>
            <h4>{prop.type}</h4>
            <img src ={prop.src} alt="Dream" />
        </section>
    )
}

export default Dream;