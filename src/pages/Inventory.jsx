
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