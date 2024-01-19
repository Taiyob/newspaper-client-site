import PropTypes from "prop-types";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";
// import { getToken } from "../api/auth";

const auth = getAuth(app);
export const Authcontext = createContext();
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleSignup = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const subscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      // if (currentUser) {
      //   const userInfo = { email: currentUser?.email };
      //   const res = await getToken(userInfo);
      //   if (res?.data?.token) {
      //     setLoader(false);
      //   }
      // } else {
      //   setLoader(false);
      // }
      setLoader(false);
    });
    return () => {
      return subscribe();
    };
  }, []);

  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const info = {
    user,
    googleSignup,
    createUser,
    login,
    updateUserProfile,
    logOut,
    loader,
  };
  return <Authcontext.Provider value={info}>{children}</Authcontext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
