import React, { useState, useContext, useEffect  } from 'react';
import { Grid, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { ProfileContext } from '../../context/ProfileContext'
import { LocContext } from '../../context/LocContext'
import CardInventory from './CardInventory'
import { } from '../../styles/appStyles'
import { InventoryItems } from '../../scaffold/InventoryStructure'
import { invGridStyles } from '../../styles/inventoryCardStyles'

export const InventoryGrid = () => {
    const classes = invGridStyles()
    const inventoryObj = InventoryItems
    const locContext = useContext(LocContext)
    const { locName } = locContext   
    console.debug(locName)
    const handleInvEditClick = (props) => {
      console.log(props)
    } 

    return (
        <main>
        <div className={classes.container}>
          <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start" className={classes.grid}>
            {inventoryObj.invItems.map(listitem => (
              <CardInventory key={listitem.id} listItem={listitem}  />
            ))
            }
           <div className={classes.fab}>
          <Fab size="small" color="secondary" aria-label="add" className={classes.fab} onClick={() => handleInvEditClick('')}>
          <AddIcon />
        </Fab>  
        </div>
          </Grid>
        </div>
      </main>
    )
  }