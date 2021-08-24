import Meta from '../components/Meta'
import Phone from '../components/Phone';
import { getHomeData } from '../lib/sanity';

export default function Home({homeData}) {
    
  return (
      <>
          <Meta title="Home | Oliver Gao" />
          <div className="w-full h-8 md:h-12 2xl:h-16"/>

          <div className="md:flex items-center">
              <section className="flex-1 flex justify-center pb-8">
                  <div className="max-w-sm md:max-w-lg">
                      <h1 className="text-4xl lg:text-6xl mb-2 font-semibold">{homeData.headline}</h1>
                      <p className="text-xl lg:text-2xl">{homeData.subheadline}</p>
                  </div>
              </section>

              <section className="flex-1 flex justify-center pb-8">
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
