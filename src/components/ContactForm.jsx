import React from "react";
import airform from 'angular-airform'

function ContactForm() {
    return (
        <airform email="your@email.com">
            <input type="text" name="name"/>
            <textarea name="message"></textarea>
            <button>Send</button>
        </airform>
    );
}

export default ContactForm;

