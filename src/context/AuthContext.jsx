import { createContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const persistedAuth = JSON.parse(localStorage.getItem('auth'));
    const [auth, setAuth] = useState(persistedAuth);

    function signIn(authData) {
        setAuth(authData);
        localStorage.setItem('auth', JSON.stringify(authData));
    }

    function signOut() {
        setAuth(undefined);
        localStorage.removeItem('auth');
    }

    const token = auth.token
    const id = auth.id

    return <AuthContext.Provider value={{ token, id, signIn, signOut, }}>{children}</AuthContext.Provider>;
}

export default AuthContext;
