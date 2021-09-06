import React, { useContext } from 'react';
import { IconButton, Badge, MenuItem } from '@mui/material';
import { ShoppingCart, Print, LocalShipping, PostAdd } from '@mui/icons-material';
import { withRouter } from 'react-router-dom'
import { QueuesBox, QueuesItem, BadgeWrapper } from "../../styles/appStyles";
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
            <QueuesItem onClick={() => handleMenuClick('/printQR')} disableGutters={disableGutters}>
                <IconButton aria-label="QR Labels" color="inherit">
                    <Badge badgeContent={badgeCounts.QueuePrintBarCode} color="secondary">
                        <Print />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Barcodes
                </BadgeWrapper>
            </QueuesItem>
            <QueuesItem onClick={() => handleMenuClick('/orders')} disableGutters={disableGutters}>
                <IconButton aria-label="Pending orders" color="inherit">
                    <Badge badgeContent={badgeCounts.QueueOrder} color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Orders
                </BadgeWrapper>
            </QueuesItem>
            <QueuesItem onClick={() => handleMenuClick('/shipment')} disableGutters={disableGutters}>
                <IconButton aria-label="Items in shipment" color="inherit">
                    <Badge badgeContent={badgeCounts.QueueShipment} color="secondary">
                        <LocalShipping />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Shipment
                </BadgeWrapper>
            </QueuesItem>
            <QueuesItem onClick={() => handleMenuClick('/pallet')} disableGutters={disableGutters}>
                <IconButton aria-label="Items in pallet" color="inherit">
                    <Badge badgeContent={badgeCounts.QueuePallet} color="secondary">
                        <PostAdd />
                    </Badge>
                </IconButton>
                <BadgeWrapper>
                    Pallet
                </BadgeWrapper>
            </QueuesItem>
        </QueuesBox>
    );
}

export default withRouter(Queues)