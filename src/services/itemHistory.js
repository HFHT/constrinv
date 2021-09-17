import { useContext } from 'react';
import { InventoryContext } from "../context/InventoryContext";

const inventoryContext = useContext(InventoryContext)
const { invItemHistory, setInvItemHistory } = inventoryContext

export function pushItemHistory({key, result, itemBefore, itemAfter}) {
    addHistory = invItemHistory.push({key, result, itemBefore, itemAfter})
    setInvItemHistory(addHistory)
    return
}

export function updateItemHistory({key, result}) {
    updateHistory = invItemHistory.map(history => history.key === key ? {...history, result: result} : history)
}
    