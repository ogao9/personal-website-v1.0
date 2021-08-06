import Meta from '../components/Meta'
import Intro from '../components/Intro'
import ContactForm from '../components/ContactForm'

export default function Contact() {

    return (
        <>
            <Meta title="Contact Me | Oliver Gao" />
            <Intro title="Contact Me" subtitle="Send me a message. I'd love to read it." />

            <div className="lg:flex">
                <div className="flex-1 flex justify-center p-4">
                    <ContactForm/>
                </div>
                <div className="flex-1 m-4">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-lg"/>
                </div>
            </div>
        </>
    )
}