import React, { useState } from 'react';
import { List, ListItem, ListItemText } from '@mui/material';
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from 'react-redux'
import { setLocName, setShipName } from '../../features/locations/locationsSlice'
import { LocationList, LocationPopover } from "../../styles/locationStyles";

const Location = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [locOpen, setLocOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(["locName"]);
    const dispatch = useDispatch()
    const { locName, shipName } = useSelector((state) => state.locations)

    var locations = props.orgProfile.profile.Locations
    console.debug(locations)

    const handleMenuClick = (e) => {
        console.debug(e.currentTarget)
        setLocOpen(true)
        setAnchorEl(e.currentTarget);
    };
    const handleSubLeave = () => {
        setLocOpen(false)
        console.debug('leave')
    };
    const handleSubClick = (props, e) => {
        console.debug('subclick')
        setLocOpen(false)
        props.locSetter === 'useLoc' ? dispatch(setLocName(props.locName)) : dispatch(setShipName(props.locName))
        setCookie("locName", locName, { path: "/" })
    };
    const id = locOpen ? 'simple-popover' : undefined;
    return (
        <>
            <LocationList component="nav" dense={true} onClick={(e) => handleMenuClick(e)} >
                <ListItem>
                    <ListItemText
                        primary={<span style={{ whiteSpace: 'nowrap', }}>{props.locLabel} </span>}
                        secondary={<span style={{ color: 'bisque', whiteSpace: 'nowrap', }}>{props.locSetter === 'useLoc' ? locName : shipName} </span>}
                    />
                </ListItem>
            </LocationList>
            <LocationPopover id={id} open={locOpen} anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <List onMouseLeave={(e) => handleSubLeave(e)}>
                    {locations.map(locItem => {
                        return (
                            <ListItem button key={locItem.id} onClick={(e) => handleSubClick({ locName: locItem.locName, locSetter: props.locSetter }, e)} >
                                <ListItemText primary={locItem.locName} />
                            </ListItem>
                        )
                    })
                    }
                </List>
            </LocationPopover>
        </>
    );
}

export default Location