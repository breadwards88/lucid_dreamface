import { API_BASE_URL } from "../../../../config";

const DetailsDialog = (prop) => {

    return (
        <>
            <h2>{prop.name}</h2>
            <section id="edit-links">
                <a href="edit-link" onClick={prop.showEdit}>&#9998;</a>
                <a href="delete-link" onClick={prop.showDelete}>&#x2715;</a>
            </section>
            <img src={`${API_BASE_URL}/images/${prop.main_image}`} alt="Dream Picture" />
            <p>{prop.title} Dream</p>
            <p>{prop.type} Type</p>
            <p>Size: {prop.description} Description</p>
        </>
    );
};

export default DetailsDialog;