import { createContext, useState } from "react";

export const AppContext = createContext()

export function AppProvider ({children}) {

    

    return (

        <AppContext.Provider value='hello' >

        {children}
    </AppContext.Provider>
    )
}