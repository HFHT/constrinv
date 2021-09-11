// The NavContext holds the navigation state values
import { createContext, useState } from "react";

export const NavContext = createContext()

export const NavContextProvider = props => {

    const [navItems, setNavCat] = useState([])
    const [elAnchor, setelAnchor] = useState(null)
    const [navOpen, setNavOpen] = useState(false)

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