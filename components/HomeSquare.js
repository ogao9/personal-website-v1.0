import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

export default function HomeSquare() {
    return (
        <>
        <section className="flex-1 max-w-xl grid grid-cols-2 gap-4 mt-8">
            <HomeSquare/>
            <HomeSquare/>
            <HomeSquare/>
            <HomeSquare/>
        </section>  
        
        <div className="home-square shadow-sm rounded-xl p-4 bg-gray-200">
            <div className="home-square-content w-full h-full flex items-center p-4">
                <div className="h-full border rounded-lg w-full p-1">
                    <FontAwesomeIcon icon={faBlog} className="w-5"/>Read my latest blog post: 
                    How to Grow a Houseplant in a Glass Bottle with Minimal Effort
                </div>
            </div>
        </div>
        </>
    );
}
