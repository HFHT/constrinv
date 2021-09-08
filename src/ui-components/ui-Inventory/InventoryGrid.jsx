
import { Grid, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useSelector } from 'react-redux'
import CardInventory from './CardInventory'
import { } from '../../styles/appStyles'
import { InventoryItems } from '../../scaffold/InventoryStructure'
import { invGridStyles } from '../../styles/inventoryCardStyles'

export const InventoryGrid = () => {
    const classes = invGridStyles()
    const inventoryObj = InventoryItems
    const { locName } = useSelector((state) => state.navigation)     
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