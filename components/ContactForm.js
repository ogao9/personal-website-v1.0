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

        const submission = { ...formValues, time: new Date()};

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(submission),
        })
            .then((res) => {
                setLoading(false);

                if(res.status === 401){
                    res.json().then(data=>setError(data.status))
                }else{
                    setSuccess(true);
                    setFormValues({
                        name: "",
                        email: "",
                        message: "",
                    });
                }
            })
            .catch((err) => {
                setError("Sorry, something went wrong. Message failed to send."); 
                setLoading(false);
                console.log(err);
            });
    };

    return (
        <form className="contact-form w-full max-w-lg 2xl:max-w-xl" onSubmit={handleSubmit}>
            <label>
                Name
                <input
                    className="input"
                    type="text"
                    onChange={(e) => handleChange(e, "name")}
                    value={formValues.name}
                    required
                />
            </label>
            <label>
                Email
                <input
                    className="input"
                    type="email"
                    onChange={(e) => handleChange(e, "email")}
                    value={formValues.email}
                    required
                />
            </label>
            <label>
                Message
                <textarea
                    className="input"
                    value={formValues.message}
                    onChange={(e) => handleChange(e, "message")}
                    required
                />
            </label>
             
            {loading ? 
                <button className="w-20 py-2 bg-blue-500 rounded flex justify-center" disabled>
                    <FontAwesomeIcon icon={faSpinner} className="w-5 animate-spin"/>
                </button> 
            :   <button type="submit" className="bg-blue-400 hover:bg-blue-500 text-black-text  rounded px-4 py-2">
                    Submit
                </button>
            }

            {success && 
                <div className="w-full bg-green-100 text-black-text border-2 border-green-700 rounded animate-toast px-3 py-2 mt-2">
                    <b>Success!</b> Your message was sent!
                </div> }

            {error &&
                <div className="w-full bg-red-100 text-black-text border-2 border-red-700 rounded animate-toast px-3 py-2 mt-2">
                    <b>Error!</b> {error}
                </div>}
        </form>
    );
}