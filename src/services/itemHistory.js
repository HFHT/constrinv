import { useContext } from 'react';
import { InventoryContext } from "../context/InventoryContext";



export function usePushItemHistory({ key, result, itemBefore, itemAfter }) {
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext
    const addHistory = invItemHistory.push({ key, result, itemBefore, itemAfter })
    setInvItemHistory(addHistory)
    return
}
/*
export function updateItemHistory({ key, result }) {
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext
    const updateHistory = invItemHistory.map(history => history.key === key ? { ...history, result: result } : history)
}

export function updateItem({ key, itemAfter }) {
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext
    console.log(key, itemAfter)
} */
