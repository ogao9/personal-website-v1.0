import Meta from '../components/Meta'
import Phone from '../components/Phone';
import { getHomeData } from '../lib/sanity';

export default function Home({homeData}) {
    
  return (
      <>
          <Meta title="Home | Oliver Gao" />
          <div className="w-full h-8 md:h-12"/>

          <div className="w-full md:flex items-center">
              <section className="flex-1 flex justify-center mb-8 md:mb-0">
                  <div>
                      <h1 className="text-4xl lg:text-6xl mb-2 font-semibold">
                          {homeData.headline}
                      </h1>
                      <p className="text-xl">{homeData.subhead}</p>
                      <p className="text-xl mb-2">{homeData.subhead2}</p> 
                  </div>
              </section>

              <section className="flex-1 flex justify-center">
                 <Phone homeData={homeData}/>
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
