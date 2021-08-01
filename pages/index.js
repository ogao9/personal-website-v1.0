import Meta from '../components/Meta'
import { homeInfo } from '../lib/data';

export default function Home() {
    
  return (
      <>
          <Meta title="Home | Oliver Gao" />
          <div className="w-full h-8 lg:h-32"/>

          <div className="w-full md:flex items-center">
              <div className="flex-1 p-4">
                  <h1 className="text-4xl lg:text-6xl mb-2 font-semibold">
                      {homeInfo.headline}
                  </h1>
                  <p className="text-xl mb-2">{homeInfo.subhead}</p>
              </div>
              <div className="flex-1 p-4 grid grid-cols-3 gap-4">
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
                  <div className="h-36 bg-gray-200"></div>
              </div>
          </div>
      </>
  );
}


