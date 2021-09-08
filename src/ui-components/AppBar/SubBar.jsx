import { useLocation } from "react-router-dom"
import { InvCatNavBar } from "../ui-Inventory/InvCatNavBar"

const SubBar = () => {
    const route = useLocation()
    const match = route.pathname === '/'
    console.log(route.pathname)
    return (
        <div>
            {match &&
            <div>
            <InvCatNavBar />
            </div>
            }
        </div>
    )
}

export default SubBar