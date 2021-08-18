import NotificationStrip from "./NotificationStrip"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'

const blogobj = {title: "Read my latest Blog Post", data:"How to grow a plant in a glass cup with minimal effort"}
const projectobj = {title: "Check out my most recent project", data:"Design.io"}
const fruitobj = {title: "My current favorite fruit", data:"apples"}
const stravaobj = {title: "My most recent activity on Strava", data:"Afternoon 2 mile run"}

export default function Phone({homeData}) {
    return (
        <div className="w-96 shadow-xl px-6 pt-4 pb-24 relative text-white-text border-4 border-black-surface rounded-2xl bg-blue-600">
            <h1 className="text-4xl my-4 pl-1 text-center">11 : 20</h1>
            
            <NotificationStrip slotInfo={blogobj}/>
            <NotificationStrip slotInfo={projectobj}/>
            <NotificationStrip slotInfo={fruitobj}/>
            <NotificationStrip slotInfo={stravaobj}/>

            <div className="w-full rounded-b-2xl absolute bottom-0 left-0 text-white-text p-6 flex justify-around">
                <FontAwesomeIcon icon={faBlog} className="w-12 p-4 bg-gray-800 rounded-full"/>
                <FontAwesomeIcon icon={faStar} className="w-12 p-4 bg-gray-800 rounded-full"/>
            </div>
        </div>
    )
}
