
import { Grid, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
// Context and Redux imports
import { useSelector } from 'react-redux'
// Theme and Style imports
import { invGridStyles } from '../../styles/inventoryCardStyles'
import { } from '../../styles/appStyles'
// Component imports
import InventoryCard from './InventoryCard'
import { InventoryItems } from '../../scaffold/InventoryStructure'

function applyFilter(filter, item) {
//  console.debug('applyFilter:', filter, item)
  if (filter.catSub) {
    if ((filter.catSub === item.catSub) && (filter.catName === item.catName)) { return true }
  } else {
    if (filter.catName === item.catName) { return true }
    else {
      if (!filter.catName && item.invFav) { return true }
    }
  }
  return false
}

export const InventoryGrid = () => {
  const classes = invGridStyles()
  const inventoryObj = InventoryItems
  const { mainCat, subCat, filter } = useSelector((state) => state.navigation)
  const { locName } = useSelector((state) => state.locations)
  //    console.debug(locName)
  const handleInvEditClick = (props) => {
    console.log(props)
  }
  console.log('InventoryGrid render:', mainCat)
  return (
    <main>
      <div className={classes.container}>
        <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start" className={classes.grid}>
          {inventoryObj.invItems.map(listitem => (
            applyFilter({ catName: mainCat, catSub: subCat }, listitem) &&
            <InventoryCard key={listitem.id} listItem={listitem} />
          ))}
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