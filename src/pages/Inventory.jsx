// Context and Redux imports
//import { useDispatch } from 'react-redux'
//import { setMainCat, setSubCat } from '../features/navigation/navigationSlice'
import { InventoryContextProvider } from '../context/InventoryContext';
import { InventoryGrid } from '../ui-components/ui-Inventory/InventoryGrid'
export const Inventory = () => {
//    const dispatch = useDispatch()
//    dispatch(setMainCat(null))
//    dispatch(setSubCat(null))
    return (
        <div>
            <InventoryContextProvider>
                <InventoryGrid />
            </InventoryContextProvider>
        </div>
    )
}