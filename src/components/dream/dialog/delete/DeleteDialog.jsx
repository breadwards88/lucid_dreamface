import React, { useState } from "react"
import { API_BASE_URL } from "../../../../config";
import "./DeleteDialog.css";

const DeleteDialog = (prop) => {
    const [result, setResult] = useState("");

    const deleteDream = async() => {
        setResult("Attempting Deletion...");
    };

    return (
        <>
            <h3>Are you sure you want to delete the {prop.title}</h3>
            <section id="delete-buttons">
                <button onClick={prop.closeDialog}>No</button>
                <button>Yes</button>
            </section>
            <p id="status-message">{result}</p>
        </>
    );
};

export default DeleteDialog;