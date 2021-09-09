import { withRouter } from 'react-router-dom'
import { IconButton, Badge } from '@mui/material';
import { ShoppingCart, Print, LocalShipping, PostAdd } from '@mui/icons-material';
// Context and Redux imports
import { useSelector } from 'react-redux'
// Theme and Style imports
import { QueuesBox, QueuesItem, BadgeWrapper } from "../../styles/queuesStyles";

const Queues = (props) => {
    const { history, disableGutters } = props;
    const badgeCounts = useSelector((state) => state.badges.queues)    
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