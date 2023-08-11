import React from "react";
import '../styles/Contact.css';
import Airform from 'react-airform'

function ContactForm() {
    const handleSubmit = (data) => {
        // Perform submission logic here, e.g., sending data to the server
        console.log('Submitted:', data);
    };

    return (
        <div className="contact">
            <Airform email="jackshakespeare1@gmail.com">
                <input required={true} type="text" name="firstName" placeholder="First Name"/>
                <input required={true} type="text" name="lastName" placeholder="Last Name"/>
                <input required={true} type="email" name="email" placeholder="Email"/>
                <textarea required={true} name="message" placeholder='Message'/>
                <button>Send</button>
            </Airform>
        </div>
    );
}

export default ContactForm;

