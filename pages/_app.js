import '../styles/globals.css'
import {AuthProvider} from '../lib/auth'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  // console.log(Component);
  // console.log("displayName", Component.displayName)
  // switch(Component.displayName){
  //     case "Home":
  //       return (
  //         <AuthProvider>
  //           <Component {...pageProps} />
  //         </AuthProvider>
  //       )
  //     default:
        return (
          <AuthProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AuthProvider>
        )
  }


export default MyApp
