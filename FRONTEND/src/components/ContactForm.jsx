import React, { useState } from 'react';
import axios from 'axios';
import '../styling/ContactForm.css'; // Import the CSS file

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();


        try 
        {
            const response = await axios.post('http://localhost:8000/api/contact', formData);
            if (response.status === 200) 
            {
                alert('Form submitted successfully!');
                setFormData({ name: '', email: '', message: '' });
            }
        } 
        catch (error) 
        {
            console.error('Error submitting the form:', error);
            alert('Error submitting the form. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Name"
                />

                <label>Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Email"
                />

                <label>Message:</label>
                <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    placeholder="Your Message"
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
