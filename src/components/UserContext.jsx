import { createContext, useState, useEffect } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
    const [userData, setUserData] = useState({ id: null, token: null });

    function updateUserData(id, token) {
        setUserData({ id, token });
    }

    function clearUserData() {
        setUserData({ id: null, token: null });
    }

    useEffect(() => {
        const savedUserData = JSON.parse(localStorage.getItem('userData'));
        if (savedUserData) {
            setUserData(savedUserData);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, updateUserData, clearUserData }}>{children}</UserContext.Provider>
    );
}
