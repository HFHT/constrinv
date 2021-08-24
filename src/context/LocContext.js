import React, { createContext, useState } from "react";

export const LocContext = createContext()

export const LocContextProvider = props => {
    const [locName, setLocName] = useState('All')
    const [shipName, setShipName] = useState('-- ')

    const locContext = {
        locName,
        setLocName,
        shipName,
        setShipName
    }
    return (
        <LocContext.Provider value={locContext}>
            {props.children}
        </LocContext.Provider>
    )
}