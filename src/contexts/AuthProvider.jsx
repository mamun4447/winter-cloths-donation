import { createContext, useEffect, useState } from "react";
import auth from "./../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import toast from "react-hot-toast";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //===Google Login===//
  const googleLogIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  //===Create User With Email & Password===//
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //===User Name & Profile Photo Setup===//
  const userDetailSet = (userDetails) => {
    return updateProfile(auth.currentUser, userDetails);
  };

  //===User LogIn With Email & Password===//
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //===Log Out===//
  const logOut = () => {
    setLoading(true);
    toast.success("Successfully Logged Out!");
    return signOut(auth);
  };

  //===Set User===//
  useEffect(() => {
    const unsubscribe = new onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });
    return () => unsubscribe;
  }, []);

  const authInfo = {
    user,
    loading,
    googleLogIn,
    createUser,
    userDetailSet,
    userLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
