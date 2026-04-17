import { Children, createContext, useContext } from "react";



const ContextProvider=createContext();
export const useContextProvider = () =>useContext(ContextProvider)

export const DataContextProvider =({children})=>{


    return(
        <ContextProvider.Provider value={{}}>
            {children}
        </ContextProvider.Provider>
    )

}