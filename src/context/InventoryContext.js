// The NavContext holds the navigation state values
import { createContext, useState } from "react";

export const InventoryContext = createContext()

export const InventoryContextProvider = props => {

    const [abc, setabc] = useState([])

    const itemContext = {
        abc,
        setabc
    }
    return (
        <InventoryContext.Provider value={itemContext}>
            {props.children}
        </InventoryContext.Provider>
    )
}