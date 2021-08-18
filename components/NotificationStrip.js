import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

export default function NotificationStrip({slotInfo}) {
    return (
        <div className="bg-white-light rounded-lg p-2 mb-6 big-glass">
            <div className="w-full flex justify-between items-center">
                <div className="flex-1 ml-1">
                    <p className="font-semibold">{slotInfo.title}</p>
                    <h1 className="">{slotInfo.data}</h1>
                </div>
                <div className="flex-20">
                    <img
                        src="/PlantFinal.jpg"
                        alt="Blog Cover Image"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
