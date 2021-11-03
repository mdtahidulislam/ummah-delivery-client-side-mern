import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from '@firebase/auth';
import { useEffect, useState } from 'react';
import initAuthentication from '../Firebase/Firebase.init';

// init  firebase
initAuthentication()

const useFirebase = () => {
    // state
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    // auth object
    const auth = getAuth();
    // create provider
    const googleProvider = new GoogleAuthProvider();

    // sign in with provider
    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // get current user
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth])

    // signout
    const userSignOut = () => {
        signOut(auth).then(() => {
            setUser('');
        }).catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        userSignOut
    }
};

export default useFirebase;