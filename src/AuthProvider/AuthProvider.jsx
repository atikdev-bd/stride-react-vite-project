import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

  const googleProvider = new GoogleAuthProvider();

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(null);
 
  
///signIn with popup//
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };


  /// create user with email and password //

  const createUser = (email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
  }


////get current user already login///
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
    });
    return () => {
      return unsubcribe;
    };
  }, []);


////auth info here use contextApi//
  const authInfo = { googleLogin,createUser };


  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
