import Meta from '../components/Meta'
import HomeNav from '../components/HomeNav'

export default function Home() {
    
  return (
      <>
          <>
              <Meta title="Home | Oliver Gao" />
              <div className="w-full h-screen home-background-cover grid place-items-center text-center text-gray-800">
                  <div>
                      <h1 className="text-4xl md:text-5xl mb-2">
                          Hello! I'm <span className="text-yellow-600">Oliver</span>
                      </h1>
                      <h3 className="text-xl mb-2">
                          Welcome to my home on the web. Have a look around.
                      </h3>
                      <div className="w-full flex justify-center">
                          <HomeNav />
                      </div>
                  </div>
              </div>
          </>
      </>
  );
}

Home.displayName = "Home"