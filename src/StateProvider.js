import React, { createContext, useContext, useReducer } from "react";

// prepares the data layer
export const StateContext = createContext();

// Wrap our app and provide the data layer to the rest of our app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={ useReducer( reducer, initialState )}>
        { children }
    </StateContext.Provider>
);

// pull data from the data layer
export const useStateValue = () => useContext( StateContext );
