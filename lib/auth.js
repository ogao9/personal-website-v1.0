import React, { useState, useEffect, useContext, createContext } from 'react'
import { useRouter } from 'next/router'

import firebase from './firebase'
import { createUser } from './db'

//create a context object
const authContext = createContext()

//The current context value is determined by the value prop of the nearest 
//<MyContext.Provider> above the calling component in the tree.
//So, we just need to wrap our component with this provider
export function AuthProvider({ children }) {
    const auth = useProvideAuth()
    return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

//useContext accepts a context object
export const useAuth = () => {
    return useContext(authContext)
}

//return value of the context
function useProvideAuth() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    useEffect(()=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser) //triggers observer(handleUser) when user signs in or out

        //This is equivalent to componentWillUnmount (this is cleaning up)
        return () => unsubscribe();
    },[])

    const handleUser = (rawUser)=>{
        if(rawUser){
            const user = formatUser(rawUser)
            createUser(user.uid, user)

            //router.push('/dashboard')

            setLoading(false)
            setUser(user)
            return user;
        } else{
            setLoading(false);
            setUser(null)
            return false;
        }
    }

    const signinWithGoogle = () =>{
        setLoading(true);
        const provider = new firebase.auth.GoogleAuthProvider()

        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((response) => handleUser(response.user))
            .catch(err=> console.log(err))
    }

    const signout = ()=>{
        return firebase
            .auth()
            .signOut()
            .then(() => handleUser(false))
            .catch((err) => console.log(err));
    }

    return {
        user,
        loading,
        signinWithGoogle,
        signout, 
    }
}

const formatUser = (user) => {
    return {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      provider: user.providerData[0].providerId,
      photoUrl: user.photoURL,
    }
  }




