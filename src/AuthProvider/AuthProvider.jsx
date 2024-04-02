import React, { createContext, useState } from 'react';

const AuthProvider = ({children}) => {
    const AuthContext = createContext(null);
    const [user,setUser] = useState(null)

    const authInfo = {user}

    return (
    <AuthContext.Provider value={user}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;