import { useContext } from 'react';
import { UserProvider } from './UserContext'; 

export function useUserContext() {
    return useContext(UserProvider);
}
