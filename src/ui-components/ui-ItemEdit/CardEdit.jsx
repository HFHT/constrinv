import { useEffect, useState } from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { ActionCreators } from "redux-undo";
import { setEditModalOpen, selectModal, selectModalOpen } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'
import CardFieldEdit from './CardFieldEdit';
import CardImgGrid from './CardImgGrid';
import CardSupliersEdit from './CardSuppliersEdit';
import CardDamageEdit from './CardDamageEdit';
import CardInvQty from './CardInvQty';
import CardInvLocation from '../ui-Inventory/CardInvLocation';

const CardEdit = () => {
    useEffect(() => {
        setFirstLoad(true);
    }, []);

    const classes = cardTableStyles()
    const [firstLoad, setFirstLoad] = useState(false)
    const editCardContents  = useSelector(selectModal)
    const isEditModalOpen  = useSelector(selectModalOpen)
    console.debug(firstLoad, isEditModalOpen,editCardContents)
    const dispatch = useDispatch()
    const handleClose = () => {
        /* check for changes and ask are you sure before leaving */
        dispatch(setEditModalOpen(false))
    }
    const handleSave = () => {
        /* check for changes and ask are you sure before leaving */
//        dispatch(setEditModalOpen(false))
    }

    return (
        editCardContents &&
        <Dialog open={isEditModalOpen} fullWidth={true} maxWidth={'md'} onClose={handleClose}>
            <DialogActions sx={{pb: 0}}>
                <Button onClick={dispatch(ActionCreators.undo())}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
            <CardFieldEdit></CardFieldEdit>
            <CardInvQty></CardInvQty>
            <CardImgGrid></CardImgGrid>
            <CardSupliersEdit></CardSupliersEdit>
            <CardDamageEdit></CardDamageEdit>
        </Dialog>
    )
}

export default CardEdit;