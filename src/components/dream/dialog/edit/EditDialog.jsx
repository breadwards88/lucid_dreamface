import React, { useState } from "react";
import { API_BASE_URL } from "../../../../config";

const EditDailog = (prop) => {

    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("http://localhost:3001/images/" + prop.main_image);

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("... changing");



    };

    return (
        <form id="edit-property-form" onSubmit={onSubmit}>
            <p>
                <label htmlFor="title">Dream Name:</label>
                <input type="text" id="title" name="title" defaultValue={prop.title} required />
            </p>
            <p>
                <label htmlFor="description">Description:</label>
                <input type="text" id="title" name="description" defaultValue={prop.description} required />
            </p>
            <p>
                <label htmlFor="type">Dream Type:</label>
                <input type="select" id="type" name="type" defaultValue={prop.type} required />
            </p>

            <section>
                <div>
                    <p id="img-prev-section">
                        {prevSrc != "" ?
                            (<img id="img-prev" src={prevSrc}></img>) :
                            ("")
                        }
                    </p>
                </div>
                <p id="img-upload">
                    <label htmlFor="img">Upload Image:</label>
                    <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                </p>
            </section>
            <p>
                <button type="submit">Submit</button>
            </p>
            <p id="status-message">{result}</p>
        </form>

    );
};

export default EditDailog;