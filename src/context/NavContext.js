// The NavContext holds the navigation state values
import { createContext, useState, useEffect } from "react";
import { MongoGet } from "../utils/MongoDBAPI";

export const NavContext = createContext()

export const NavContextProvider = props => {

    const [navItems, setNavCat] = useState([])
    const [elAnchor, setelAnchor] = useState(null)
    const [navOpen, setNavOpen] = useState(false)

    useEffect(() => {
        MongoGet({db: 'Inventory', collection: '_Categories'}).then(response => setNavCat(response[0].invCat))
        return () => {}
    }, [])

    const itemContext = {
        navItems,
        setNavCat,
        elAnchor,
        setelAnchor,
        navOpen,
        setNavOpen   
    }
    return (
        <NavContext.Provider value={itemContext}>
            {props.children}
        </NavContext.Provider>
    )
}