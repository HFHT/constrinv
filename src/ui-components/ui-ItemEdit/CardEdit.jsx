import { useEffect } from 'react';
import { Dialog, DialogActions, Button } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'
import CardFieldEdit from './CardFieldEdit';
import CardImgGrid from './CardImgGrid';
import CardSupliersEdit from './CardSuppliersEdit';
import CardDamageEdit from './CardDamageEdit';
import CardInvQty from './CardInvQty';
import CardInvLocation from '../ui-Inventory/CardInvLocation';

const CardEdit = (props) => {
    useEffect(() => {
    }, []);

    const classes = cardTableStyles()
    const { isEditModalOpen, editCardContents } = useSelector((state) => state.editModal)
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
                <Button onClick={handleClose}>Cancel</Button>
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