import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const axiosPublic = useAxiosPublic()
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

    const userSignUpGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }
    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userSignOut = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, newUser => {
            if(newUser){
                const userInfo = {email: newUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('token', res.data.token)
                    } 
                })
            } else{
                localStorage.removeItem('token')
            }
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
        userSignUpGoogle,
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