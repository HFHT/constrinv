import { useLocation } from "react-router-dom"
import { InvNavMenuBar } from "../ui-Inventory/InvNavMenuBar"
import { InvCatPopupMenu } from '../ui-Inventory/InvCatPopupMenu'

const SubBar = () => {
    const route = useLocation()
    const match = route.pathname === '/'
    console.log(route.pathname)
    return (
        <div>
            {match &&
            <div>
            <InvNavMenuBar />
            <InvCatPopupMenu />
            </div>
            }
        </div>
    )
}

export default SubBar