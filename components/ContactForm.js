import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

export default function ContactForm(){
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [loading, setLoading ] = useState(false);

    const handleChange = (e, field) =>{
        setFormValues({...formValues, [field]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        setSuccess(false);
        setLoading(true);

        const submission = { ...formValues, submissionTime: new Date() };

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submission),
        })
            .then(() => {
                setSuccess(true); setLoading(false);
                setFormValues({
                    name: "",
                    email: "",
                    message: "",
                });
            })
            .catch((err) => {
                setError(true); setLoading(false);
                console.log(err);
            });
    };

    return (
        <form className="contact-form w-full max-w-lg 2xl:max-w-2xl" onSubmit={handleSubmit}>
            <div className="hidden lg:block">
                <h1 className="text-2xl font-bold">Contact Form</h1>
                <p className="mb-4">Hello there. This is the easiest way to contact me.</p>
            </div>

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
            {loading ? 
            <button className="w-16 py-2 bg-gray-100 rounded flex justify-center" disabled><FontAwesomeIcon icon={faSpinner} className="w-5 animate-spin"/></button> 
            :<button type="submit" className="px-3 py-2 bg-blue-400 rounded">Submit</button>
            }

<div className="p-2 mt-2 w-full bg-green-700 text-gray-50 rounded animate-toast">Your message was sent successfully!</div>

            {success ? <div className="p-2 mt-2 w-full bg-green-700 text-gray-50 rounded animate-toast">Your message was sent successfully!</div> : null}
            {error ? <div className="p-2 mt-2 w-full bg-red-400 text-gray-200 rounded">Sorry, something went wrong. Message failed to send.</div> : null}
        </form>
    );
}