/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';



export const AuthContex = createContext(null)
const Authprovider = ({children}) => {
    const auth = getAuth(app);
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const createuser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signin = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    const google =()=>{
        setLoading(true)
        return signInWithPopup(auth,googleprovider)
    }

    const github =()=>{
        setLoading(true)
        return signInWithPopup(auth,githubprovider)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggeduser =>{
            console.log('loggedin user inside auth state obserbar' , loggeduser)
            setUser(loggeduser)
            setLoading(false)
        })
        return () =>{
            unsubscribe()
        }
    },[])

    const authinfo ={
        user,
        createuser,
        signin,
        logout,
        loading,
        google,
        github
    }

    return (
        <AuthContex.Provider value={authinfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default Authprovider;