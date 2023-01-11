import { createContext, useReducer } from "react"
import React from 'react'
import DarkModeReducer from "./darkModeReducer"

interface DarkModeContextValue {
    darkMode: boolean;
    dispatch: React.Dispatch<{ type: any; }>
}

const INITIAL_STATE: DarkModeContextValue = {
    darkMode: false,
    dispatch: () => {}
}

export const DarkModeContext = createContext<DarkModeContextValue>(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE)
    return (
        <DarkModeContext.Provider value={{ ...state, dispatch }}>
            {children}
        </DarkModeContext.Provider>
    );
}