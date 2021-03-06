// The NavContext holds the navigation state values
import { createContext, useEffect, useState } from "react";
import { useGetFromDBQuery } from '../services/rtkquery/MongoDB'
import { CircularProgress } from '@mui/material';

export const InventoryContext = createContext()

export const InventoryContextProvider = props => {

    const { data, isLoading } = useGetFromDBQuery({ method: 'find', db: 'Inventory', collection: 'Items' })

    const [invItems, setInvItems] = useState([])
    const [invItemHistory, setInvItemHistory] = useState([{_id: '', result: '', itemBefore: '', itemAfter: ''}])

    const itemContext = {
        invItems,
        setInvItems,
        invItemHistory,
        setInvItemHistory
    }

    useEffect(() => {
        setInvItems(data)
    }, [isLoading])

    return (
        <div>
            {isLoading && invItems ?
                <CircularProgress />
                :
                <InventoryContext.Provider value={itemContext}>
                    {props.children}
                </InventoryContext.Provider>
            }
        </div>
    )
}