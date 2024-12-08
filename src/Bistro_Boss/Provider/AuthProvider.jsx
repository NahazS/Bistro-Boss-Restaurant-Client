import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const userSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
    } 
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            setUser(newUser)
            setLoading(false)
        })
        return () => {unSubscribe}
    },[])
    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        userSignUp,
        userSignIn,
        userSignOut,
        updateUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;