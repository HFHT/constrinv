import { useEffect } from 'react';
// Context and Redux imports
import { useDispatch } from 'react-redux'
import { setMainCat, setSubCat } from '../features/navigation/navigationSlice'
import { InventoryContextProvider } from '../context/InventoryContext';
import { InventoryGrid } from '../ui-components/ui-Inventory/InventoryGrid'
export const Inventory = () => {

    return (
        <div>
            <InventoryContextProvider>
                <InventoryGrid />
            </InventoryContextProvider>
        </div>
    )
}