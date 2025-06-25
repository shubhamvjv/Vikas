import React, { useState } from "react";

function PopupForm({ setShowPopup }) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        dob: "",
        timeOfBirth: "",
        phoneNumber: "",
        email: "",
        description: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);  // State to track submission status

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
    
        // Check if form data is correctly logged
        console.log("Form Data Submitted:", formData);
    
        // Send form data to the server
        fetch("http://localhost:5000/api/submitForm", {  // Ensure this is the correct URL
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((response) => response.json())  // Parse JSON response
        .then((data) => {
            console.log("Form submission successful:", data);
            setIsSubmitted(true);  // Show success message
            setTimeout(() => {
                setShowPopup(false);  // Close popup after 3 seconds
            }, 3000);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };
    

    return (
        <div className="popup">
            <div className="popup-content">
                <span
                    className="close-btn"
                    onClick={() => setShowPopup(false)}  // Close popup when X is clicked
                >
                    X
                </span>
                <h2 className="popup-heading">Consultation Form</h2>

                {isSubmitted ? (
                    <div className="success-message">
                        <p>Your request has been submitted. Our team will get in touch with you.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <label>First Name:</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />

                        <label>Last Name:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />

                        <label>Date of Birth:</label>
                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                        />

                        <label>Time of Birth:</label>
                        <input
                            type="time"
                            name="timeOfBirth"
                            value={formData.timeOfBirth}
                            onChange={handleChange}
                        />

                        <label>Phone Number:</label>
                        <input
                            type="text"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />

                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label>Description:</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit">Submit</button> {/* This should trigger handleSubmit */}
                    </form>
                )}
            </div>
        </div>
    );
}

export default PopupForm;
