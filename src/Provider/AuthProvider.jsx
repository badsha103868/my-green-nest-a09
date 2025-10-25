import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  // user state
  const [user , setUser] = useState(null);
  //  loading state
  const [loading, setLoading] = useState(true)

   console.log(user)

  //  sign up
  const createUser = ( email, password)=>{
      return createUserWithEmailAndPassword( auth , email, password)
  } 
   
  //  log in 
  const signIn = ( email, password )=>{
    return signInWithEmailAndPassword(auth,email, password )
  } 

  // log out
   const logOut =()=>{
    return signOut(auth);
   }
   
  //  google sign in 
  const googleSignIn = ( googleProvider ) =>{
    return signInWithPopup(auth, googleProvider);
  }

  // update profile
  const updateUser = (updatedData)=>{
    return updateProfile(auth.currentUser, updatedData)
  } 

  // forget password
  const forgetPassword = ( email ) =>{
    return sendPasswordResetEmail(auth, email)
  }

  // onAuthStateChanged observer
    
  useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
         setLoading(false)
       });
       return ()=>{
            unsubscribe()
       } 
  },[])
 



  const authData = {
    user,
    setUser,
    createUser,
    signIn,
    logOut,
    loading,
    setLoading,
    googleSignIn,
    updateUser,
    forgetPassword
    
  }

  return (
    <AuthContext  value={authData}>{children}</AuthContext>
  );
};

export default AuthProvider;