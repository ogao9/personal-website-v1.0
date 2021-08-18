import Meta from '../components/Meta'
import Intro from '../components/Intro'
import ContactForm from '../components/ContactForm'

export default function Contact() {

    return (
        <>
            <Meta title="Contact Me | Oliver Gao" />
            <Intro title="Contact Me" subtitle="Send me a message. I'd love to read it!" />

            <div className="flex justify-center p-4">
                <ContactForm/>
            </div>
        </>
    )
}