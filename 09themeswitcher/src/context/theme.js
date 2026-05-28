import { createContext, useContext } from "react";

// themeContext ek context object hai jo themeMode, darkTheme, lightTheme properties ko hold kar raha hai bas
export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme:() => {},
    lightTheme:() => {}
});

// just a variable export kar rahe aur kuch nahi jis se pure app ko wrap karne wale hai
export const ThemeProvider = ThemeContext.Provider;


// jo do do import karne padte the useContext and Themecontext ab sirf is custom hook ko hi import karna padega
export default function useTheme(){
    return useContext(ThemeContext)
}