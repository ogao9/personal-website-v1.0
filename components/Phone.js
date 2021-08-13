import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

export default function Phone({homeInfo}) {
    return (
        <div className="w-96 border shadow-xl rounded-2xl px-4 pt-6 pb-8 slide-in relative bg-gradient-to-r from-green-400 to-blue-500 text-black-text">
            <div className="rounded bg-white-light p-2 mb-6 big-glass">
                <p className="mb-1 font-semibold">Read my latest Blog Post</p>

                <div className="w-full flex justify-between items-center">
                    <div className="flex-15">
                        <img
                            src='/PlantFinal.jpg'
                            alt="Blog Cover Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ml-1">
                        <h1 className="">How to Grow a Plant in a Glass Cup with Minimal Effort</h1>
                    </div>
                </div>
            </div>

            <div className="rounded bg-white-light p-2 mb-6 big-glass">
                <p className="mb-1 font-semibold">Check out my most recent project</p>
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex-15">
                        <img
                            src='/PlantFinal.jpg'
                            alt="Blog Cover Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ml-1">
                        <h1 className="">Design.io</h1>
                    </div>
                </div>
            </div>

            <div className="rounded bg-white-light p-2 mb-6 big-glass">
                <p className="mb-1 font-semibold">My current favorite fruit (it changes often)</p>
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex-15">
                        <img
                            src='/PlantFinal.jpg'
                            alt="Blog Cover Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ml-1">
                        <h1 className="">Apples</h1>
                    </div>
                </div>
            </div>

            <div className="rounded bg-white-light p-2 mb-6 big-glass">
                <p className="mb-1 font-semibold">My most recent activity on Strava</p>
                
                <div className="w-full flex justify-between items-center">
                    <div className="flex-15">
                        <img
                            src='/PlantFinal.jpg'
                            alt="Blog Cover Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1 ml-1">
                        <h1 className="">Afternoon 2 mile run</h1>
                    </div>
                </div>
            </div>

            {/* <div className="p-4 big-glass text-black absolute bottom-0 w-full left-0 rounded-b-2xl">
                <p>Hello!</p>
            </div> */}
            
        </div>
    )
}
