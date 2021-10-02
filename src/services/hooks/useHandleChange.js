import { useState, useContext, useCallback, useEffect } from 'react';
import { InventoryContext } from "../../context/InventoryContext";


export function useHandleChange(props = null) {
    const [isSaved, setSaved] = useState(false)
    const [updatedItem, setUpdatedItem] = useState(null)
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext
    const handleChange = useCallback(({ _id, result, newCard, itemBefore, itemAfter }) => {
        const updateItem = invItems.map((item) => item._id === _id ? newCard : item)
        console.log(newCard, updateItem)
        setUpdatedItem(null)
        setInvItems(updateItem)    
        console.log('History:', invItemHistory, _id, itemBefore, itemAfter)
        let addHistory = invItemHistory
        addHistory.push({ _id, result, itemBefore, itemAfter })
        console.log('History:', addHistory)
        setInvItemHistory(addHistory) 
        setSaved(true)
    }, [])

    useEffect(()=> {
        console.log('useHandleChange called')
    },[])

    return [isSaved, handleChange]
}

export function useAddToHistory(props = null) {
    const [isAdded, setAdded] = useState(false)
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext
    const handleAddToHistory = useCallback(({ _id, result, itemBefore, itemAfter }) => {
        let addHistory = invItemHistory
        addHistory.push({ _id, result, itemBefore, itemAfter })
        console.log('History:', addHistory)
        setInvItemHistory(addHistory) 
        setAdded(true)     
    })

    return [isAdded, handleAddToHistory]
}
