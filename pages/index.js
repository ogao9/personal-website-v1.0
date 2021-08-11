import Meta from '../components/Meta'
import HomeSquare from '../components/HomeSquare';
import { getHomeData } from '../lib/sanity';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faProjectDiagram, faStar } from '@fortawesome/free-solid-svg-icons'
import { faStrava } from '@fortawesome/free-brands-svg-icons';

export default function Home({homeData}) {
    
  return (
      <>
          <Meta title="Home | Oliver Gao" />
          <div className="w-full h-8 md:h-24"/>

          <div className="w-full md:flex items-center">
              <div className="flex-1 flex justify-center">
                  <div>
                      <h1 className="text-4xl lg:text-6xl mb-2 font-semibold">
                          {homeData.headline}
                      </h1>
                      <p className="text-xl mb-2">{homeData.subhead}</p>
                  </div>
              </div>

              <section className="flex-1 max-w-xl grid grid-cols-2 gap-4 xl:px-12 mt-8">
                  <HomeSquare/>
                  <HomeSquare/>
                  <HomeSquare/>
                  <HomeSquare/>
              </section>
          </div>
      </>
  );
}

export async function getStaticProps(){
    const homeData = await getHomeData();

    return{
        props:{
            homeData
        }
    }
}


{/* <div className="h-36 bg-gray-100 text-center shadow-sm">
                      <div className="opacity-0 hover:opacity-100 w-full h-full grid place-items-center ">
                          <FontAwesomeIcon icon={faBlog} className="w-5"/>Read my blog: How to Grow a Plant
                      </div>
                    </div>
                  <div className="h-36 bg-gray-200"><FontAwesomeIcon icon={faProjectDiagram} className="w-5"/>Recent Project: SQL Trains</div>
                  <div className="h-36 bg-gray-200 grid place-items-center text-2xl font-semibold text-secondary">Hover Over Me</div>
                  <div className="h-36 bg-gray-200"><FontAwesomeIcon icon={faStar} className="w-5"/>My Current Favorite Fruit: Apples</div>
                  <div className="h-36 bg-gray-200"><FontAwesomeIcon icon={faStrava} className="w-5"/>Most Recent Acitivty: 8 mile Bike</div> */}