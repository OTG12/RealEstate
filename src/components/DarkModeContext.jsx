import React, { createContext, useContext, useState} from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkmode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkmode }}>
            {children}
        </DarkModeContext.Provider>
    );
}

const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if(!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider')
    }
    return context;
};

export { DarkModeProvider, useDarkMode };