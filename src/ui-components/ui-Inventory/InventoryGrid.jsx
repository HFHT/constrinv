import { useContext, useEffect } from 'react';
import { Grid, Fab } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Fuse from 'fuse.js'
// Context and Redux imports
import { useSelector } from 'react-redux'
import { InventoryContext } from "../../context/InventoryContext";
// Theme and Style imports
import { invGridStyles } from '../../styles/inventoryCardStyles'
import { } from '../../styles/appStyles'
// Component imports
import InventoryCard from './InventoryCard'
import { InventoryItems } from '../../scaffold/InventoryStructure'

function applyFilter(filter, item) {
  if (filter.catName) {
    const locationMatch = filter.locName === 'All' || ((item.invQty.ByLoc.find(o => o.itemLoc === filter.locName)) !== undefined)
    const nameMatch = filter.catName === item.catName
    const subMatch = filter.catSub === item.catSub
    //    console.debug('applyFilter:', locationMatch, nameMatch, subMatch, item.invQty.ByLoc, filter, item)
    if (filter.catSub) {
      if (locationMatch && (subMatch) && (nameMatch)) { return true }
    } else {
      if (locationMatch && nameMatch) { return true }
    }
  } else {
    if (item.invFav) { console.log('filter:', item); return true }
  }
  return false
}

export const InventoryGrid = () => {
  const classes = invGridStyles()
  const inventoryContext = useContext(InventoryContext)
  const { invItems, setInvItems } = inventoryContext
  var inventoryObj = invItems

  //  console.debug('invItems:', invItems)  
  const { mainCat, subCat, filter, fuzzy } = useSelector((state) => state.navigation)
  const { locName } = useSelector((state) => state.locations)
  console.log('InventoryGrid render:', mainCat)

  var fuseResults = []
  const fuseSearch = new Fuse(invItems, {
    keys: ['invItem', 'invDesc', 'invSKUs.invUPC', 'invSKUs.invMFG', 'invSKUs.invModel'],
    includeScore: true,
    shouldSort: true,
    includeMatches: true,
    findAllMatches: true,
    ignoreFieldNorm: true,
    minMatchCharLength: 1
  })

  if (invItems) {
    const options = !fuzzy ? { threshold: 0, distance: 0, useExtendedSearch: true, minMatchCharLength: filter.length } : { ignoreLocation: true }
    const exact = !fuzzy ? '=' : ''
    fuseResults = fuseSearch.search(exact + filter, options)
    console.log('R:', exact + filter, options, fuseResults.slice(0, 12))
  }

  useEffect(() => {
    inventoryObj = false
    setTimeout(() => {inventoryObj=invItems;console.debug('Inventory Grid Item changed', invItems, inventoryObj)},3000)
    
  }, [invItems])

  const handleInvEditClick = (props) => {
    console.log(props)
  }
  return (
    <main>
      {inventoryObj &&
        <div className={classes.container}>
          <Grid container spacing={1} justifyContent="flex-start" alignItems="flex-start" className={classes.grid}>
            {filter.length === 0 && inventoryObj.map((listitem, index) => (
              applyFilter({ catName: mainCat, catSub: subCat, locName: locName }, listitem) &&
              <InventoryCard key={listitem._id} index={index} listItem={listitem} />
            ))}
            {filter.length > 0 && fuseResults.slice(0, 12).map((listitem, index) => (
              <InventoryCard key={listitem.item._id} index={index} listItem={listitem.item} />
            ))}
            <div className={classes.fab}>
              <Fab size="small" color="secondary" aria-label="add" className={classes.fab} onClick={() => handleInvEditClick('')}>
                <AddIcon />
              </Fab>
            </div>
          </Grid>
        </div>
      }
    </main>
  )
}