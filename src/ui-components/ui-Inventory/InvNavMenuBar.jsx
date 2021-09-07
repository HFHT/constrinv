import React, { useContext, useEffect  } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { ProfileContext } from '../../context/ProfileContext'
import { NavContext } from '../../context/NavContext'
import NavIconArray from '../../assets/navIcons'
import {NavCatToolBar, NavCatMenuItem, NavCatMenuListItem} from '../../styles/invCatNavStyles'

export const InvNavMenuBar = (props) => {
    const classes = {}
    const theme = useTheme()
    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))
    const profileContext = useContext(ProfileContext)
    const { orgProfile } = profileContext
    const navContext = useContext(NavContext)
    const { setNavCat, setelAnchor, navOpen, setNavOpen, navBuilt, setNavBuilt } = navContext
    useEffect(() => {
        setNavBuilt(true);
    }, [])
    const handleClose = (e) => {
        console.log('SubMenu close')
        //setNavOpen(false)
    }
    const handleOpen = (props, event) => {
        setNavCat(props)
        setNavOpen(true)
        console.log(event.currentTarget)
        setelAnchor(event.currentTarget)
    }
    const handleMenuClick = (props, event) => {
        console.log(props.catName)
        setNavCat(props.catSub)
        //    console.log(elAnchor)
        //    setNavOpen(!navOpen)
        setNavOpen(true)
        setelAnchor(event.currentTarget)
    }

    return (
        <NavCatToolBar variant="dense" disableGutters={matches} className={classes.toolbar}>
            {navBuilt && orgProfile.categories.invCat.map(listitem => (
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
    );
};