import Meta from '../components/Meta'
import { getHomeData } from '../lib/sanity';

export default function Home({homeData}) {
    
  return (
      <>
          <Meta title="Home | Oliver Gao" />
          <div className="w-full h-8 lg:h-24"/>

          <div className="w-full md:flex items-center">
              <div className="flex-1">
                  <h1 className="text-4xl lg:text-6xl mb-2 font-semibold">
                      {homeData.headline}
                  </h1>
                  <p className="text-xl mb-2">{homeData.subhead}</p>
              </div>

              <section className="flex-1 p-4 grid grid-cols-3 gap-4">
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
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


