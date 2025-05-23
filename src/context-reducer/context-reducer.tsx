/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, ReactNode, useState } from "react";

export const themeContext = createContext;


export const themeProvider = ({children} : {children: ReactNode}) => {
 
  const [theme, setTheme] = useState('light');

return(
  <themeContext.Provider value>
   {children} 
  </themeContext.Provider>
);

};