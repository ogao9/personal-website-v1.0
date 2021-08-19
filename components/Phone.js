import { useState } from "react";
import { useTheme } from 'next-themes'
import NotificationStrip from "./NotificationStrip";
import ContactForm from './ContactForm'
import { prettyDate } from "../lib/utlities";
import { urlFor } from "../lib/sanity";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHome, faMoon, faProjectDiagram, faBlog, faAppleAlt, faSun } from "@fortawesome/free-solid-svg-icons";
import { faStrava } from "@fortawesome/free-brands-svg-icons";

export default function Phone({ homeData }) {
    const {theme, setTheme} = useTheme();
    const[page, setPage] = useState(1)

    const hour = new Date().getHours()
    const minutes = new Date().getMinutes()
    const time = `${hour === 0 ? '00' : hour}:${minutes < 10 ? '0' : ''}${minutes}`

    const pageControl = ()=>{
        if(page===1)
            setPage(2)
        else
            setPage(1)
    }


    const blogobj = {
        title: homeData.slot1_title,
        data: homeData.slot1_data.title,
        link: `/blog/${homeData.slot1_data.slug.current}`,
        category: "Blog",
        icon: faBlog,
        imageUrl: urlFor(homeData.slot1_data.coverImage),
    };

    const projectobj = {
        title: homeData.slot2_title,
        data: homeData.slot2_data.name,
        link: `/projects/${homeData.slot2_data.slug.current}`,
        category: "Projects",
        icon: faProjectDiagram,
        imageUrl: urlFor(homeData.slot2_data.image),
    };

    const slot3obj = {
        title: homeData.slot3.title,
        data: homeData.slot3.data,
        category: "Fruit Tracker",
        icon: faAppleAlt,
        imageUrl: '/PlantFinal.jpg'
    };

    const slot4obj = {
        title: homeData.slot4.title,
        data: homeData.slot4.data,
        category: "Strava",
        icon: faStrava,
        imageUrl: '/PlantFinal.jpg'
    };

    return (
        <div className="w-96 relative rounded-2xl bg-blue-500 shadow-xl border-4 border-black-surface px-6 pb-24 pt-8">

            {page === 1 && 
                <div>
                <h1 className="text-6xl text-center text-white-light tracking-wider">{time}</h1>
                <p className="text-white text-center mb-6">{prettyDate(new Date())}</p>
                    <NotificationStrip slotInfo={blogobj} />
                    <NotificationStrip slotInfo={projectobj} />
                    <NotificationStrip slotInfo={slot3obj} />
                    <NotificationStrip slotInfo={slot4obj} />
                </div>
            }

            {page === 2 &&
                <div className="pb-36">
                    <h1 className="text-3xl font-bold text-center text-white-light mb-6">Contact Me</h1>
                    <div className="text-white"><ContactForm/></div>
                </div>
            }

            <div className="w-full rounded-b-2xl absolute bottom-0 left-0 text-white-text p-6 flex justify-around">
                <FontAwesomeIcon
                    icon={page===2 ? faHome : faPaperPlane}
                    className="w-14 p-4 bg-gray-800 rounded-full cursor-pointer"
                    onClick={pageControl}
                />
                <FontAwesomeIcon
                    icon={theme === "dark" ? faSun : faMoon}
                    className="w-14 p-4 bg-gray-800 rounded-full cursor-pointer"
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                />
            </div>
        </div>
    );
}

