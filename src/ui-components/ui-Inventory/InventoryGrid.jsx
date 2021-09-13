
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
  if (filter.catName) {
//    const locationMatch = filter.locName === 'All' || item.invQty.ByLoc.find(o => o.itemLoc === filter.locName)
//    const locationMatch = filter.locName === 'All'
    const locationMatch = filter.locName === 'All' || ((item.invQty.ByLoc.find(o => o.itemLoc === filter.locName)) !== undefined)
    const nameMatch = filter.catName === item.catName
    const subMatch = filter.catSub === item.catSub
    console.debug('applyFilter:', locationMatch,nameMatch,subMatch, item.invQty.ByLoc, filter, item)
    if (filter.catSub) {
      if (locationMatch && (subMatch) && (nameMatch)) { return true }
    } else {
      if (locationMatch && nameMatch) { return true }
      else {

      }
    }
  } else {
    if (item.invFav) { return true }
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
            applyFilter({ catName: mainCat, catSub: subCat, locName: locName }, listitem) &&
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