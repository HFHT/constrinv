import { Box, IconButton, Badge, MenuItem } from '@material-ui/core';
import { ShoppingCart, Print, LocalShipping, PostAdd } from '@material-ui/icons';
import { withRouter } from 'react-router-dom'
import useStyles from "../../styles/useStyles";

const Queues = (props) => {
    const { history, className, disableGutters } = props;
    const classes = useStyles();
    const handleMenuClick = (pageURL) => {
        console.log(pageURL)
        history.push(pageURL)
      }
    return (
        <div className={className}>
            <Box display="flex" flexDirection="row" justifyContent="inherit" padding={0} style={{ marginLeft: 'auto' }}>
                <MenuItem onClick={() => handleMenuClick('/printQR')} disableGutters={disableGutters}>
                    <IconButton aria-label="QR Labels" color="inherit">
                        <Badge badgeContent={10} color="secondary">
                            <Print />
                        </Badge>
                    </IconButton>
                    <p className={classes.navBadge}>Barcodes</p>
                </MenuItem> <MenuItem onClick={() => handleMenuClick('/orders')} disableGutters={disableGutters}>
                    <IconButton aria-label="Pending orders" color="inherit">
                        <Badge badgeContent={12} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <p className={classes.navBadge}>Orders</p>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/shipment')} disableGutters={disableGutters}>
                    <IconButton aria-label="Items in shipment" color="inherit">
                        <Badge badgeContent={14} color="secondary">
                            <LocalShipping />
                        </Badge>
                    </IconButton>
                    <p className={classes.navBadge}>Shipment</p>
                </MenuItem>
                <MenuItem onClick={() => handleMenuClick('/pallet')} disableGutters={disableGutters}>
                    <IconButton aria-label="Items in pallet" color="inherit">
                        <Badge badgeContent={11} color="secondary">
                            <PostAdd />
                        </Badge>
                    </IconButton>
                    <p className={classes.navBadge}>Pallet</p>
                </MenuItem>
            </Box>
        </div>
    );
}

export default withRouter(Queues)