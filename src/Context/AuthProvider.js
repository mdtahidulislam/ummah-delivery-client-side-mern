import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const Allcontext = useFirebase();
    return (
        <AuthContext.Provider value={Allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;