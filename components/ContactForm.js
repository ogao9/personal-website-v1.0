import { useState } from 'react';

export default function ContactForm(){
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
        submissionTime: new Date(),
    });

    const handleChange = (e, field) =>{
        setFormValues({...formValues, [field]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Contact Form</h1>
            <p className="mb-4">Hello there. This is the easiest way to contact me.</p>

            <label>
                Name
                <input
                    type="text"
                    onChange={(e) => handleChange(e, "name")}
                    value={formValues.name}
                    required
                />
            </label>
            <label>
                Email
                <input
                    type="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={formValues.email}
                    required
                />
            </label>
            <label>
                Message
                <textarea
                    value={formValues.message}
                    onChange={(e) => handleChange(e, "message")}
                    required
                />
            </label>
            <button type="submit" className="px-3 py-2 bg-blue-400 rounded">Submit</button>
        </form>
    );
}