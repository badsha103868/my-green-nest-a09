import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/firebase.config';



export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  
  const [user , setUser] = useState(null);

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
 

  // onAuthStateChanged observer
    
  useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
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
  }

  return (
    <AuthContext value={authData}>{children}</AuthContext>
  );
};

export default AuthProvider;