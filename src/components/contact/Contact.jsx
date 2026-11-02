import { useState } from 'react';
import './Contact.css'

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "fc6e61db-efde-4664-87d0-68ed0f09632d");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();


        
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="name" required />
            <input type="email" name="email" required />
            <textarea name="message" required></textarea>
            <button type="submit">Submit</button>
            <p>{result}</p>
        </form>
    );
}