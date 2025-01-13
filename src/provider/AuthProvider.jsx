import { useEffect, useState } from "react";
import { createContext } from "react";

import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // create user

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);

    };

    // login
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    // user management

    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, currentUser => {   // this function watchign login user
            setUser(currentUser);
            setLoading(false);
            console.log('Current user', currentUser)
        });
        return () => {
            return unsubcribe()
        } ; // when user log out the function will not watching any more
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;