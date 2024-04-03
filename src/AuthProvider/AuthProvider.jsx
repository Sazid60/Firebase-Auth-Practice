import { createContext, useEffect, useState } from 'react';

import auth from '../Firebase/firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [verified,setVerified] = useState(false)


    // Create User
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In User
    const sigInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Email Verification 
    const verifyEmail = (cUser) =>{
       return sendEmailVerification(cUser)
    }
    // Sign Out
    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log("Observer :", currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [verified])

    const authInfo = { user, setUser, createUser, sigInUser, signOutUser,loading,verifyEmail,setVerified }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;