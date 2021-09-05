import React, { useContext, useState } from 'react';
import Popover from '@material-ui/core/Popover';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { useCookies } from "react-cookie";
import { LocContext } from "../../context/LocContext"
import useStyles from "../../styles/useStyles";

const Location = (props) => {
  const locContext = useContext(LocContext)
  const { locName, setLocName, shipName, setShipName } = locContext   
  const [anchorEl, setAnchorEl] = useState(null);
  const [locOpen, setLocOpen] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["locName"]);

  const classes = useStyles()
  var locations = props.orgProfile.profile.Locations
  console.debug(locations)

  const handleMenuClick = (e) => {
    console.debug(e.currentTarget)
    setLocOpen( true )
    setAnchorEl(e.currentTarget);  
  };
  const handleSubLeave = () => {
    setLocOpen( false )      
    console.debug('leave')
  };
  const handleSubClick = (props,e) => {
    console.debug('subclick')
    setLocOpen( false )
    props.locSetter === 'useLoc' ? setLocName(props.locName) : setShipName(props.locName)
    setCookie("locName", locName, { path: "/"  })
  };  
  const id = locOpen ? 'simple-popover' : undefined;
  return (
        <>
        <List component="nav" dense={true} className={classes.locationList} onClick={(e) => handleMenuClick(e)} >
            <ListItem>
                <ListItemText 
                primary={<span style={{ whiteSpace: 'nowrap', }}>{props.locLabel} </span>}
                secondary={<span style={{ color: 'bisque', whiteSpace: 'nowrap', }}>{props.locSetter === 'useLoc' ? locName : shipName} </span>} 
                />
            </ListItem> 
        </List>
        <Popover id={id} open={locOpen} anchorEl={anchorEl} className={classes.locactionPopOver}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
        >  
            <div className={classes.xyz}>
                <List onMouseLeave={(e) => handleSubLeave(e)}>
                    {locations.map(locItem => {
                    return(
                    <ListItem button key={locItem.id} onClick={(e) => handleSubClick({locName: locItem.locName, locSetter: props.locSetter},e)} >
                        <ListItemText primary={locItem.locName } />
                    </ListItem>
                    )
                    })
                    }
                </List>
            </div>
        </Popover>               
        </>
  );
}

export default Location