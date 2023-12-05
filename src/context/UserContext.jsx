import React, { createContext, useContext, useEffect, useState } from 'react'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isLoggedIn, setIsLogisLoggedIn] = useState(false)

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('userData'))
        if (userData) {
            if (JSON.stringify(user) !== JSON.stringify(userData)) {
                setUser(userData)
                setIsLogisLoggedIn(true)
            }
        } else {
            setIsLogisLoggedIn(false)
            setUser(null)
        }

    }, [user,isLoggedIn])
    return (
        <UserContext.Provider value={{ user, setUser, isLoggedIn }} >
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    return context;
}

export default UserProvider