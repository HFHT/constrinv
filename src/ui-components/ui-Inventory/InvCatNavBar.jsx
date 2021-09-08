import React, { useContext, useState } from 'react';
import { useMediaQuery, useTheme, ListItem } from '@mui/material';
import { ProfileContext } from '../../context/ProfileContext'
import NavIconArray from '../../assets/navIcons'
import { setNavItems, setNavOpen } from '../../features/navigation/navigationSlice'
import { NavCatToolBar, NavCatMenuItem, NavCatMenuListItem, StyleCatPopover, StyleCatList, StyleCatListItemText } from '../../styles/invCatNavStyles'
import { useSelector, useDispatch } from 'react-redux'

export const InvCatNavBar = (props) => {
    const classes = {}
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))
    const profileContext = useContext(ProfileContext)
    const { orgProfile } = profileContext

    const dispatch = useDispatch()
    const { navItems, navOpen } = useSelector((state) => state.navigation)
    const [elAnchor, setelAnchor] = useState(null)
    const handleClose = (e) => {
        console.log('SubMenu close')
        //setNavOpen(false)
    }
    const handleOpen = (props, event) => {
        dispatch(setNavItems(props))
        dispatch(setNavOpen(true))
        console.log(event.currentTarget)
        setelAnchor(event.currentTarget)
    }
    const handleMenuClick = (props, event) => {
        console.log(props.catName)
        dispatch(setNavItems(props.catSub))
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
            <NavCatToolBar variant="dense" disableGutters={matches} className={classes.toolbar}>
                {orgProfile.categories.invCat.map(listitem => (
                    <div id={"Sub" + listitem.id} key={listitem.id}>
                        <NavCatMenuItem key={listitem.id} classes={classes.menuItem} disableGutters={false} onClick={(e) => handleMenuClick(listitem, e)} onMouseEnter={(e) => handleOpen(listitem.catSub, e)} onMouseLeave={(e) => handleClose(e)}>
                            <img src={NavIconArray[listitem.id]} alt="" className={classes.icon} />
                            <NavCatMenuListItem>
                                {listitem.catName}
                                {console.debug('aaa')}
                            </NavCatMenuListItem>
                        </NavCatMenuItem>
                    </div>
                ))}
            </NavCatToolBar>
            <StyleCatPopover id={id} open={navOpen
            } anchorEl={elAnchor} onClose={handleSubClose} onMouseLeave={handleSubClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
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