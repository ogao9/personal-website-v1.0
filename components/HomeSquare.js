import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

export default function HomeSquare() {
    return (
        <div className="home-square bg-gray-200 shadow-sm ">
            <div className="home-square-content opacity-0 hover:opacity-100 w-full">
                <FontAwesomeIcon icon={faBlog} className="w-5"/>Read my blog: 
            </div>
        </div>
    );
}
