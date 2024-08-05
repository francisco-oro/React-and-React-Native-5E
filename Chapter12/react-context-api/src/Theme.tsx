import {createContext, ReactNode, useContext} from "react";
const ThemeContext = createContext<null | string>(null);


const ThemeProvider = ({children} : { children: ReactNode}) =>  {
    const theme = "dark";

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );  
};

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme }