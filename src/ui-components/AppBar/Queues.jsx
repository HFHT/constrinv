import React, { useContext } from 'react';
import { IconButton, Badge, MenuItem } from '@mui/material';
import { ShoppingCart, Print, LocalShipping, PostAdd } from '@mui/icons-material';
import { withRouter } from 'react-router-dom'
import { QueuesBox, BadgeWrapper } from "../../styles/appStyles";
import { LocContext } from "../../context/LocContext"

const Queues = (props) => {
    const { history, disableGutters } = props;
    const locContext = useContext(LocContext)
    const { badgeCounts } = locContext
    const handleMenuClick = (pageURL) => {
        console.log(pageURL)
        history.push(pageURL)
    }
    return (
        <QueuesBox display="flex" flexDirection="row" justifyContent="inherit" padding={0} style={{ marginLeft: 'auto' }}>
            <MenuItem onClick={() => handleMenuClick('/printQR')} disableGutters={disableGutters}>
                <IconButton aria-label="QR Labels" color="inherit">
                    <Badge badgeContent={badgeCounts.QueuePrintBarCode} color="secondary">
                        <Print />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Barcodes
                </BadgeWrapper>
            </MenuItem> <MenuItem onClick={() => handleMenuClick('/orders')} disableGutters={disableGutters}>
                <IconButton aria-label="Pending orders" color="inherit">
                    <Badge badgeContent={badgeCounts.QueueOrder} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Orders
                </BadgeWrapper>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('/shipment')} disableGutters={disableGutters}>
                <IconButton aria-label="Items in shipment" color="inherit">
                    <Badge badgeContent={badgeCounts.QueueShipment} color="secondary">
                        <LocalShipping />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Shipment
                </BadgeWrapper>
            </MenuItem>
            <MenuItem onClick={() => handleMenuClick('/pallet')} disableGutters={disableGutters}>
                <IconButton aria-label="Items in pallet" color="inherit">
                    <Badge badgeContent={badgeCounts.QueuePallet} color="secondary">
                        <PostAdd />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Pallet
                </BadgeWrapper>
            </MenuItem>
        </QueuesBox>
    );
}

export default withRouter(Queues)