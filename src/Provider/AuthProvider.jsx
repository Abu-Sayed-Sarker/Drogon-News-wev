import { createContext, useEffect, useState } from "react";
import app from "../FireBase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);


    useEffect(() => {
        const Objerve = onAuthStateChanged(auth, cureentUser => {
            setUser(cureentUser)
        })
        return () => {
            Objerve();
        }
    },[])
    
    console.log(user);
    



    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singOut = () => {
        return signOut(auth);
    }

    const singIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }




    const authInfo = {
        user,
        setUser,
        createNewUser,
        singOut,
        singIn,
    }


    return (
        <AuthContext.Provider value={authInfo}>{ children }</AuthContext.Provider>
    );
};

export default AuthProvider;