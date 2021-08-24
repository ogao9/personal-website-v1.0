import { useState, useEffect } from "react";
import NotificationStrip from "./NotificationStrip";
import ContactForm from './ContactForm'
import { prettyDate } from "../lib/utlities";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane, faHome, faPalette, faBlog, faProjectDiagram, faAppleAlt} from "@fortawesome/free-solid-svg-icons";
import { faStrava } from "@fortawesome/free-brands-svg-icons";

export default function Phone({ homeData }) {
    const [showHome, setShowHome] = useState(true)
    const [colorIndex, setColorIndex] = useState(0);
    const [slot3, setSlot3] = useState({})
    const [slot4, setSlot4] = useState({})

    useEffect(()=>{
        //get fresh data from Notion
        const notionResponse = fetch("/api/notion")
            .then((res) => res.json())
            .then((json) => {
                setSlot3({...json, category: "Fruit Tracker", link: ""})
            })
            .catch((err) => console.log(err));

        //get fresh data from Strava
        const stravaResponse = fetch("/api/strava")
            .then((res) => res.json())
            .then((json) => {
                console.log(json)
                setSlot4({...json, category: "Strava", link: ""})
            })
            .catch((err) => console.log(err));
        
        //set up colorchanger
        const interval = setInterval(() => {
            setColorIndex(colorIndex =>{
                if(colorIndex === colorPalette.length - 1)
                    return 0
                else
                    return colorIndex + 1;
            })
          }, 8000);

        return () => clearInterval(interval);
    },[])
    
    
    const colorPalette = ["bg-blue-500", "bg-yellow-500", "bg-red-600", "bg-green-600", "bg-indigo-600"]
    const changeColor = () => {
        const newIndex = colorIndex + 1
        
        if(newIndex === colorPalette.length)
            setColorIndex(0);
        else
            setColorIndex(newIndex);
    }

    return (
        <div className={`w-96 relative shadow-2xl rounded-2xl px-6 pt-8 pb-24 ${colorPalette[colorIndex]}`}>
            {showHome ?
                <>
                    <Clock/>
                    <NotificationStrip slotInfo={homeData.slot1} icon={faBlog}/>
                    <NotificationStrip slotInfo={homeData.slot2} icon={faProjectDiagram}/>
                    <NotificationStrip slotInfo={slot4} icon={faStrava}/> 
                    <NotificationStrip slotInfo={slot3} icon={faAppleAlt} />
                </>
            : 
                <div className="pb-20">
                    <h1 className="text-4xl text-center text-white-light font-semibold">Contact Me</h1>
                    <p className="text-center text-white mb-6">Send me a message. I'd love to read it!</p>
                    <div className="text-md text-black-text dark:text-white-text home-contact"><ContactForm/></div>
                </div>
            }

            <div className="absolute bottom-0 left-0 w-full flex justify-around text-white-text rounded-b-2xl p-6">
                <FontAwesomeIcon
                    icon={showHome ? faPaperPlane : faHome}
                    className="w-14 p-4 bg-gray-800 rounded-full cursor-pointer"
                    onClick={()=>setShowHome(!showHome)}
                />
                <FontAwesomeIcon
                    icon={faPalette}
                    className="w-14 p-4 bg-gray-800 rounded-full cursor-pointer"
                    onClick={changeColor}
                />
            </div>
        </div>
    );
}

const Clock = ()=>{
    const [hour, setHour] = useState("")
    const [minute, setMinute] = useState("")
    const [time, setTime] = useState("")

    useEffect(()=>{
        const hour = new Date().getHours();
        const minutes = new Date().getMinutes();
        const time = `${hour === 0 ? '00' : hour}:${minutes < 10 ? '0' : ''}${minutes}`;
        setTime(time);
    },[])

    return (
        <>
            <h1 className="text-6xl text-center text-white-light tracking-wider">{time}</h1>
            <p className="text-center text-white mb-6">{prettyDate(new Date())}</p>
        </>
    )

}