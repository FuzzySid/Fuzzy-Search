import React, {createContext,useContext,useReducer} from 'react';
import {themeReducer} from './../reducers/themeReducer';
//constructing the data layer
export const ThemeContext=createContext();

//higher order component
export const ThemeProvider=({themeReducer,initialState,children})=>{
    return(
    <ThemeContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </ThemeContext.Provider>
    )

};

//hook to pull info from data layer
export const useTheme=()=>useContext(ThemeContext)