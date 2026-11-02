import { useState } from 'react';
import { DatePicker } from 'react-datepicker';
import { Select } from 'react-select';
import './Dreammaker.css';

export default function ContactForm() {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", "ff6f6837-d38d-4519-9fd9-72c6b9f903cd");
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        const data = await response.json();
        setResult(data.success ? "Success!" : "Error");
    };

    return (
        <div id="section4" className="hidden">
            <h2 className="center">Dreammaker</h2>
            <p className="center">Fill out this form if you want to add to the dreamboard.</p>
            <div>
                <form onSubmit={onSubmit}>
                    <p>
                        <label for="dream-name">Your Name: </label>
                        <input type="text" name="name" required />
                    </p>

                    <input type="text" name="name" required />

                    <input type="email" name="email" required />

                    <textarea name="message" required></textarea>
                    <button type="submit">Submit</button>
                    <p>{result}</p>
                </form>
            </div>
        </div>
    );
}