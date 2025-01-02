import { useState } from "react";
import "../components/css/contact.css";

function Contact() {
    const [formState, setFormState] = useState(
        { 
            name: '', 
            email: '', 
            message: '' 
        });

        const handleChange = (e) => {
            const { name, value } = e.target;
            setFormState({
                ...formState,
                [name]: value,
            });
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            console.log('Form subbmitted:', formState);
        };

    return(
        <section class="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlfor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        value={formState.name} 
                        onChange={handleChange} 
                        placeholder="Enter your name" 
                        required
                    />
                </div>
                <div>
                    <label htmlfor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows="4"
                        columns="60"
                        placeholder="Enter your message"
                        required
                    ></textarea>
                </div>
                <button type="submit">Sumbit</button>
            </form>
        </section>
    )
}

export default Contact;