import { useLocation } from "react-router-dom"
import { useMediaQuery, useTheme, ListItem } from '@mui/material';
import { InvCatNavBar } from "../ui-Inventory/InvCatNavBar"
import { InvCatNavDrawer } from "../ui-Inventory/InvCatNavDrawer"
const SubBar = () => {
    const route = useLocation()
    const match = route.pathname === '/'
    console.log(route.pathname)
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))    
    return (
        <div>
            {match && matches &&
            <InvCatNavDrawer />
            }
            {match && !matches &&
            <InvCatNavBar />
            }
        </div>
    )
}

export default SubBar