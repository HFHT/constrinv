import { MenuItem } from '@mui/material';

const NavLogo = () => {
    return (
        <MenuItem className={classes.toolLogo} disableGutters={matches} onClick={() => handleMenuClick('/')}>
            <img src={HFHTIcon} alt="" className={classes.logo} />
        </MenuItem>
    )
}

export default NavLogo


