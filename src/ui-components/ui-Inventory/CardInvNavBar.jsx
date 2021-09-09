import React, { useContext, useState } from 'react';
import { useMediaQuery, useTheme, ListItem, Drawer, List, ListItemIcon, CircularProgress } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { ProfileContext } from '../../context/ProfileContext'
import { setNavOpen } from '../../features/navigation/navigationSlice'
import { useGetNavigationQuery } from '../../services/rtkquery/MongoDB'
// Theme and Style imports
import { makeStyles } from '@mui/styles';
import NavIconArray from '../../assets/navIcons'
import { NavCatToolBar, NavCatMenuItem, NavCatMenuListItem, StyleCatPopover, StyleCatList, StyleCatListItemText } from '../../styles/invCatNavStyles'

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

export const CardInvNavBar = (props) => {
    const classes = useStyles()

    const theme = useTheme()
    const useDrawer = useMediaQuery(theme.breakpoints.down('multiLine'))
    //    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))
    const matches = false
    const profileContext = useContext(ProfileContext)
    const { orgProfile } = profileContext
    const { data, error, isLoading } = useGetNavigationQuery({ method: 'find', db: 'Inventory', collection: '_Categories', find: { "_id": 0 } })
    console.log(data, isLoading)
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
            {isLoading ?
                <CircularProgress />
                :
                !useDrawer ?
                    <div>
                        <NavCatToolBar variant="dense" disableGutters={matches} className={classes.toolbar}>
                            {data[0].invCat.map(listitem => (
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
                    :
                    <div>
                        <Drawer variant="permanent" PaperProps={{ className: classes.drawer }}>
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
            }
        </div>
    )
}