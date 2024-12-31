import React from "react";
import { useNavigate } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../FireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";

export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  function signUp(email, password) {
    //return createUserWithEmailAndPassword(auth, email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log("Signed up as:", user.email);
      })
      .catch((error) => {
        navigate("signup");
        console.error("Sign up error:", error.message);
      });
    setDoc(doc(db, "users", email), {
      savedMovies: [],
    });
  }
  function signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in successfully
        const user = userCredential.user;
        setUser(user);
        console.log("Signed in as:", user.email);
        return user;
      })
      .catch((error) => {
        navigate("/signin");
        console.error("Sign in error:", error.message);
      });
    /*signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user);
        console.log(user);
        return user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });*/
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ user, setUser, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
