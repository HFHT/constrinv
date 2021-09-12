import { useState } from 'react';
import { useMediaQuery, useTheme, ListItem, Drawer, List, ListItemIcon, CircularProgress } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setNavOpen, setMainCat, setSubCat } from '../../features/navigation/navigationSlice'
import { useGetNavigationQuery } from '../../services/rtkquery/MongoDB'
// Theme and Style imports
import NavIconArray from '../../assets/navIcons'
import { NavCatToolBar, NavCatMenuItem, NavCatMenuListItem, StyleCatPopover, StyleCatList, StyleCatListItemText, cardNavBarStyles } from '../../styles/invCatNavStyles'

export const CardInvNavBar = (props) => {
    const classes = cardNavBarStyles()

    const theme = useTheme()
    const useDrawer = useMediaQuery(theme.breakpoints.down('multiLine'))
    //    const matches = useMediaQuery(theme.breakpoints.down('multiLine'))
    const matches = false
    const { data, isLoading } = useGetNavigationQuery({ method: 'find', db: 'Inventory', collection: '_Categories', find: { "_id": 0 } })
    console.log(data, isLoading)
    const dispatch = useDispatch()
    const { navOpen, mainCat, subCat } = useSelector((state) => state.navigation)
    const [elAnchor, setelAnchor] = useState(null)
    const [navItems, setNavItems] = useState([])
    const [localMainCat, setLocalMainCat] = useState(null)
    const [localNavOpen, setLocalNavOpen] = useState(false)
    const handleClose = (e) => {
        console.log('SubMenu close')
        //setNavOpen(false)
    }
    const handleOpen = (catName, catSub, event) => {
        console.log('handleOpen:', catName, catSub)
        setNavItems(catSub)
        setLocalMainCat(catName)
        setLocalNavOpen(true)
//        dispatch(setNavOpen(true))

        setelAnchor(event.currentTarget)
    }
    const handleMenuClick = (props, event) => {
        console.log('handleMenuClick:', props.catName)
        dispatch(setMainCat(props.catName))
        dispatch(setSubCat(null))
        //    console.log(elAnchor)
        //    setNavOpen(!navOpen)
//        dispatch(setNavOpen(false))
        setLocalNavOpen(false)
        setelAnchor(event.currentTarget)
    }
    const handleSubClose = () => {
        console.debug('MenuCat close')
        setLocalNavOpen(false)
//        dispatch(setNavOpen(false));
    }
    const handleSubLeave = (e) => {
        console.debug('MenuCat leave')
        setLocalNavOpen(false)
//        dispatch(setNavOpen(false));
    }
    const handleSubClick = (catSub, e) => {
        dispatch(setMainCat(localMainCat))
        dispatch(setSubCat(catSub))
        setLocalNavOpen(false)        
//        dispatch(setNavOpen(false));
        console.debug('handleSubClick:', catSub)
    }
    const id = localNavOpen ? 'simple-popover' : undefined;
    return (
        <div  onMouseLeave={handleSubClose}>
            {isLoading ?
                <CircularProgress />
                :
                !useDrawer ?
                    <div>
                        <NavCatToolBar variant="dense" disableGutters={matches} className={classes.toolbar}>
                            {data[0].invCat.map(listitem => (
                                <div id={"Sub" + listitem.id} key={listitem.id}>
                                    <NavCatMenuItem key={listitem.id} disableGutters={false} onClick={(e) => handleMenuClick(listitem, e)} onMouseEnter={(e) => handleOpen(listitem.catName, listitem.catSub, e)} onMouseLeave={(e) => handleClose(e)}>
                                        <img src={NavIconArray[listitem.id]} alt="" className={classes.icon} />
                                        <NavCatMenuListItem>
                                            {listitem.catName}
                                            {console.debug('aaa')}
                                        </NavCatMenuListItem>
                                    </NavCatMenuItem>
                                </div>
                            ))}
                        </NavCatToolBar>
                        <StyleCatPopover id={id} open={localNavOpen
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
                                {data[0].invCat.map(listitem => (
                                    <ListItem key={listitem.id} className={classes.li} onClick={(e) => handleMenuClick(listitem, e)} onMouseEnter={(e) => handleOpen(listitem.catName, listitem.catSub, e)} onMouseLeave={(e) => handleClose(e)}>
                                        <ListItemIcon >
                                            <img src={NavIconArray[listitem.id]} alt="" className={classes.icon} />
                                        </ListItemIcon>
                                    </ListItem>
                                ))}
                            </List>
                        </Drawer>
                        <StyleCatPopover id={id} open={localNavOpen
                        } anchorEl={elAnchor} onClose={handleSubClose} onMouseLeave={handleSubClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
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