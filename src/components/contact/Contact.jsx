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
        <div id="section3">
            <h2 className="center">Contact Me</h2>
            <div className="form-div">
                <form onSubmit={onSubmit} className="slot4">
                    <p>
                        <label for="contact-name">Your Name: </label>
                        <input type="text" name="name" required />
                    </p>
                    <p>
                        <label for="contact-email">Your Email: </label>
                        <input type="email" name="email" required />
                    </p>
                    <label for="contact-message">Message</label>
                    <textarea name="message" placeholder="Your message.." required></textarea>
                    <button class="contact-button" type="submit">Submit</button>
                    <p id="result" className="hidden">{result}</p>
                </form>
            </div>
        </div>
    );
}