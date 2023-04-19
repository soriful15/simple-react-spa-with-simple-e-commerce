import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signOut,  } from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // const user={displayName: 'soriful islam'}
    const [user, setUser] = useState(null)
    const [loading,setLoading]=useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const SingIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
       return signOut(auth)
    }



 

// observer user state
    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('auth state change', currentUser)
            setUser(currentUser)
            setLoading(false)

        })
        // stop observing while unmounting
        return()=>{

            return unSubscribe()
        }
    }, [])

    const authInfo = {
        // user
        createUser,
        SingIn,
        logOut,
        user,
        loading,
      
        
    }

    return (
        <>
            <AuthContext.Provider value={authInfo}>

                {children}
            </AuthContext.Provider >
        </>
    );
};

export default AuthProvider;