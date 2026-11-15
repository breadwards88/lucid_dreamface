import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Select } from 'react-select';
import './Dreammaker.css';
import { API_BASE_URL } from '../../config';

const dreamOptions = [
        { value: 'Short-term', label: 'Short-term' },
        { value: 'Long-term', label: 'Long-term' },
        { value: 'Destination', label: 'Destination' },
        { value: 'Time Sensitive', label: 'Time Sensitive' }
    ];

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [endDate, setEndDate] = useState(new Date());
    const [prevSrc, setPrevSrc] = useState("");
    const uploadImage = (e) => {
        setPrevSrc(URL.createObjectURL(e.target.files[0]));
    };
    const addDreamToServer = async(e) => {
        e.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(e.target);
        if (selectedDreamType?.value === "Time Sensitive") {
            formData.set(
                "message",
                `${formData.get("message")}\nTo be completed by ${endDate.toLocaleDateString("en-US")}`
            );
        }
        console.log("HI");

        const response = await fetch(`${API_BASE_URL}/api/dreams`,{
            "method": "POST",
            "body": formData
        });
        
        if(response.status===200){
            setResult("Dream Sent!");
        }
        else {
            setResult("Error sending Dream");
        }
    };

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

    const [selectedDreamType, setSelectedDreamType] = useState(null);

    return (
        <div id="section4" className="hidden">
            <h2 className="center">Dreammaker</h2>
            <p className="center">Fill out this form if you want to add to the dreamboard.</p>
            <div>
                <form onSubmit={addDreamToServer}>
                    <p>
                        <label for="title">Dream Name: </label>
                        <input type="text" name="title" required minLength="3"/>
                    </p>
                    
                    <p>
                        <label for="title">Select a Dream Type:</label>
                        <Select
                            value={selectedDreamType}
                            onChange={setSelectedDreamType}
                            options={dreamOptions}
                            isSearchable={true}
                        />

                    {selectedDreamType?.value === "Time Sensitive" && (
                        <DatePicker
                            selected={endDate}
                            onChange={(date) => setEndDate(date)}
                            dateFormat="MM/dd/yyyy"
                            name="endDate"
                        />
                    )}
                    </p>
                    <section>
                        <p id="img-prev-section">
                            {prevSrc === "" ? ("") : (
                                <img id="img-prev" src={prevSrc} />
                            )}
                        </p>
                        <p>
                            <label htmlFor="img">Select Image</label>
                            <input type="file" id="img" name="img" accept="images/*" onChange={uploadImage}></input>
                        </p>
                    </section>
                    <button type="submit">Submit</button>
                    <p id="status-message">{result}</p>
                </form>
            </div>
        </div>
    );
}