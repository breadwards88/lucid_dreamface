import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
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
    const onSubmit = async (e) => {
        e.preventDefault();
        setResult("Submitting...");
        const formData = new FormData(e.currentTarget);
        if (!selectedDreamType) {
            setResult("Please select a dream type.");
            return;
        }
        formData.set("type", selectedDreamType.value);
        if (selectedDreamType?.value === "Time Sensitive") {
            const description = formData.get("description");
            formData.set(
                "description",
                `${description}\nTo be completed by ${endDate.toLocaleDateString("en-US")}`
            );
        }

        const response = await fetch(`${API_BASE_URL}/api/dreams`, {method: "POST", body: formData});
        setResult(response.ok ? "Dream Sent!" : `Error sending Dream (${response.status})`);
    };

    const [selectedDreamType, setSelectedDreamType] = useState(null);

    return (
        <div id="section4">
            <div>
            </div>
            <h2 className="center">Dreammaker</h2>
            <p className="desc-dreammake">Fill out this form if you want to add to the dreamboard.</p>
            <div className="form-div">
                <form onSubmit={onSubmit} className="slot3">
                    <p className="dream-name">
                        <label for="dream-title">Dream Name: </label>
                        <input type="text" name="title" required minLength="3" />
                    </p>
                    <p className="dream-description">
                        <label htmlFor="description">Description of Dream:</label>
                        <textarea id="description" name="description" required minLength="10" />
                    </p>
                    <p className="dream-type-select">
                        <label for="title">Select a Dream Type:</label>
                        <Select
                            value={selectedDreamType}
                            onChange={setSelectedDreamType}
                            options={dreamOptions}
                            isSearchable={true}
                        />

                        {selectedDreamType?.value === "Time Sensitive" && (
                            <div>
                                <label htmlFor="end-date">Select an End Date:</label>
                                <DatePicker className="date-picker"
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}
                                    dateFormat="MM/dd/yyyy"
                                    name="endDate"
                                />
                            </div>

                        )}
                    </p>
                    <section>
                        <p id="img-prev-section">
                            {prevSrc === "" ? ("") : (
                                <img id="img-prev" src={prevSrc} />
                            )}
                        </p>
                        <p>
                            <label className="image-label" htmlFor="img_name">Select Image</label>
                            <input type="file" id="img" name="img_name" accept="images/*" onChange={uploadImage}></input>
                        </p>
                    </section>
                    <button className='formbtn' type="submit">Submit</button>
                    <p id="status-message">{result}</p>
                </form>
            </div>
        </div>
    );
}