import React, {createContext,useContext,useReducer} from 'react';

//constructing the data layer
export const StateContext=createContext();

//higher order component
export const StateProvider=({reducer,initialState,children})=>{
    return(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
    )

};

//hook to pull info from data layer
export const useStateValue=()=>useContext(StateContext)