import React, { useContext, useState } from 'react';
import { useMediaQuery, useTheme, ListItem, Drawer, List, ListItemText, ListItemIcon } from '@mui/material';
import { ProfileContext } from '../../context/ProfileContext'
import NavIconArray from '../../assets/navIcons'
import { setNavOpen } from '../../features/navigation/navigationSlice'
import { NavCatToolBar, NavCatMenuItem, NavCatMenuListItem, StyleCatPopover, StyleCatList, StyleCatListItemText } from '../../styles/invCatNavStyles'
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    icon: {
        width: '40px'
    },
    menuItem: {

    },
    li: {
        padding: '0 0 3px 0',
    },
    drawer: {
        width: '44px !important',
        backgroundColor: '#000',
        paddingLeft: '4px',
        top: 'unset',
        marginTop: '-8px'

    }
}))

export const InvCatNavDrawer = (props) => {
    const classes = useStyles()

    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))
    const profileContext = useContext(ProfileContext)
    const { orgProfile } = profileContext

    const dispatch = useDispatch()
    const { navOpen } = useSelector((state) => state.navigation)
    const [elAnchor, setelAnchor] = useState(null)
    const [navItems, setNavItems] = useState([])
    const handleClose = (e) => {
        console.log('SubMenu close')
        //setNavOpen(false)
    }
    const handleOpen = (props, event) => {
        setNavItems(props)
        dispatch(setNavOpen(true))
        console.log(event.currentTarget)
        setelAnchor(event.currentTarget)
    }
    const handleMenuClick = (props, event) => {
        console.log(props.catName)
        setNavItems(props.catSub)
        //    console.log(elAnchor)
        //    setNavOpen(!navOpen)
        dispatch(setNavOpen(true))
        setelAnchor(event.currentTarget)
    }
    const handleSubClose = () => {
        console.debug('MenuCat close')
        dispatch(setNavOpen(false));
    }
    const handleSubLeave = (e) => {
        console.debug('MenuCat leave')
        dispatch(setNavOpen(false));
    }
    const handleSubClick = (props, e) => {
        dispatch(setNavOpen(false));
        console.debug(props)
    }
    const id = navOpen ? 'simple-popover' : undefined;
    return (
        <div>
            <Drawer variant="permanent" PaperProps={{ className: classes.drawer}}>
                <List>
                    {orgProfile.categories.invCat.map(listitem => (
                        <ListItem key={listitem.id} className={classes.li} onClick={(e) => handleMenuClick(listitem, e)} onMouseEnter={(e) => handleOpen(listitem.catSub, e)} onMouseLeave={(e) => handleClose(e)}>
                            <ListItemIcon >
                                <img src={NavIconArray[listitem.id]} alt="" className={classes.icon} />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <StyleCatPopover id={id} open={navOpen
            } anchorEl={elAnchor} onClose={handleSubClose} onMouseLeave={handleSubClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: '100px',
                }}
            >
                <StyleCatList onMouseLeave={(e) => handleSubLeave(e)}>
                    {navItems.map(catItem => {
                        return (
                            <ListItem button divider={true} key={catItem.id} onClick={(e) => handleSubClick(catItem.catName, e)} >
                                <StyleCatListItemText classes={classes.listItem} primary={catItem.catName} />
                            </ListItem>
                        )
                    })
                    }
                </StyleCatList>
            </StyleCatPopover>
        </div>
    );
};