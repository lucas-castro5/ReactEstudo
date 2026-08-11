import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state,action) =>{
    // switch

    switch(action.type){
        case "BLACK":
            return {...state,color:"black" };
        case "BLUE":
            return {...state, color:"blue"};
        default:
            return state;
    }

}

export const TitleColorContextProvider = ({ children }) => {
    
    const [state, dispatch] = useReducer(titleColorReducer, {color: "purple"})

    console.log("teste",state)

    return <TitleColorContext.Provider value={{...state, dispatch}}>{children}</TitleColorContext.Provider>
}