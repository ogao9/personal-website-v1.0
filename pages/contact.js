import Meta from '../components/Meta'
import Intro from '../components/Intro'
import { useState } from 'react';

export default function contact() {
    return (
        <>
            <Meta title="Contact Me | Oliver Gao" />
            <Intro title="Contact Me" subtitle="Hello!" />

            <div className="lg:flex">
                <div className="flex-1"><ContactForm/></div>
                <div className="flex-1"><ContactInfo/></div>
            </div>
        </>
    )
}


function ContactForm(){
    const [formValues, setFormValues] = useState({});

    const handleChange = (e, field) =>{
        setFormValues({...formValues, [field]: e.target.value});
    }

    const handleSubmit = ()=>{
        e.preventDefault()
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h1 className="text-2xl font-bold">Contact Form</h1>
            <p className="mb-4">Hello there. This is the easiest way to contact me.</p>

            <label>
                Your Name
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
                Phone (Optional)
                <input
                    type="text"
                    onChange={(e) => handleChange(e, "phone")}
                    value={formValues.phone}
                />
            </label>
            <label>
                What would you like to tell me?
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

function ContactInfo(){
    return(
        <div className="bg-gradient-to-r from-green-400 to-blue-500 grid place-items-center h-full m-4 rounded-lg"/>
    )
}