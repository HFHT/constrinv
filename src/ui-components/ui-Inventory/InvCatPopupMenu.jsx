import React, { useContext } from 'react';
import { ListItem } from '@mui/material';
import { StyleCatPopover, StyleCatList, StyleCatListItemText } from '../../styles/invCatNavStyles'
import { NavContext } from '../../context/NavContext'

export const InvCatPopupMenu = (props) => {
    const classes = {}
    const navContext = useContext(NavContext)
    const { navItems, elAnchor, navOpen, setNavOpen } = navContext
    const handleClose = () => {
        console.debug('MenuCat close')
        setNavOpen(false);
    }
    const handleSubLeave = (e) => {
        console.debug('MenuCat leave')
        setNavOpen(false);
    }
    const handleSubClick = (props, e) => {
        setNavOpen(false);
        console.debug(props)
    }
    const id = navOpen ? 'simple-popover' : undefined;
    return (
        <StyleCatPopover id={id} open={navOpen
        } anchorEl={elAnchor} onClose={handleClose} onMouseLeave={handleClose}
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
    );
};