import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

// eslint-disable-next-line react/prop-types
const UserProvider = ({children}) =>{

    const [user, setUser] = useState(false)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;

// eslint-disable-next-line react-refresh/only-export-components, react-hooks/rules-of-hooks
export const useUserContext = () => useContext(UserContext)