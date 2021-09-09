import { useLocation } from "react-router-dom"
import { CardInvNavBar } from "../ui-Inventory/CardInvNavBar"

const SubBar = () => {
    const route = useLocation()
    const match = route.pathname === '/'
    console.log(route.pathname) 
    return (
        <div>
            {match &&
            <CardInvNavBar />
            }
        </div>
    )
}

export default SubBar