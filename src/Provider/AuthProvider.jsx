import { createContext, useEffect, useState } from "react";
import {   createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,   } from "firebase/auth";
import app from "../Firebase/firebase.config";


 export const AuthContext =createContext(null)

 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)

    const [loadedData,setLoadedData]=useState(true)

    const createUser =(email,password)=>{
        setLoadedData(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser =(email,password)=>{
        setLoadedData(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        setLoadedData(true)
        return signOut(auth)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
                
               console.log('check user',currentUser)
               setUser(currentUser)
               setLoadedData(false)
           })
           return ()=>{
               
               unSubscribe()
           } 
       },[])
 const authInfo ={
    user,
    createUser,
    signInUser,
    logOut,
    loadedData
 }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;