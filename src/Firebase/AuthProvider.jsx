import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';


export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loader,setLoader] = useState(true);

  const createUser = (email,password)=>{
    setLoader(true);
    return createUserWithEmailAndPassword(auth,email,password);
  }
  
  const signIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  const logOut = async() => {
    setLoader(true);
   const {data} = await axios(`${import.meta.env.VITE_API_URL}/logout`,{
    withCredentials:true
   })
   console.log(data)
    return signOut(auth)
  }

  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  }
  
 
  const updateUserProfile = (name,photo) => {
    return updateProfile(auth.currentUser, {
       displayName: name,
       photoURL: photo,
     })
   }


const AuthInfo = {
  user,
  loader,
  createUser,
  updateUserProfile,
  signIn,
  logOut,
  googleLogin,
}

useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,currentUser =>{
    setUser(currentUser);
    setLoader(false)
  })
  return() => unsubscribe();
},[])

  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;