import React, {createContext, useReducer} from "react"
import AppReducer from './AppReducer'

// intialial state
const instialState = {
    transaction : [
        // { id:1, text: "flower", Amount: -20},
        // { id:2, text: "salary", Amount: 400},
        // { id:3, text: "book", Amount: -40},
        // { id:4, text: "camera", Amount: 200}

    ]
}

// create context 

export const GlobalContexte = createContext(instialState)

// create Provider
export const GlobalProvider = ({children})=>{

    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(AppReducer, instialState);

    // return action 
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRASACTION',
            playload: id
        })

    }
    // action add trasactions
    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRASACTION',
            playload: transaction
        })

    }


    return (
        <GlobalContexte.Provider value={
            {transaction : state.transaction, deleteTransaction, addTransaction}
        }>
            {children}
        </GlobalContexte.Provider>
    )

}