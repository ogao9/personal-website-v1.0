import Meta from '../components/Meta'
import Intro from '../components/Intro'
import ContactForm from '../components/ContactForm'

export default function Contact() {

    return (
        <>
            <Meta title="Contact Me | Oliver Gao" />
            <Intro title="Contact Me" subtitle="Hello!" />

            <div className="lg:flex">
                <div className="flex-1"><ContactForm/></div>
                <div className="flex-1">
                    <div className="bg-gradient-to-r from-green-400 to-blue-500 grid place-items-center h-full m-4 rounded-lg"/>
                </div>
            </div>
        </>
    )
}