import { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, setImgEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'

const CardSupliersEdit = (props) => {
    useEffect(() => {
    }, []);

    const classes = cardTableStyles()
    const { isEditModalOpen, isImgEditModalOpen, editCardContents } = useSelector((state) => state.editModal)
    const dispatch = useDispatch()
    const handleClose = () => {
        /* check for changes and ask are you sure before leaving */
        dispatch(setEditModalOpen(false))
    }
    const handleImgClose = () => {
        dispatch(setImgEditModalOpen(false))
    }
    const handleSave = () => {
        dispatch(setImgEditModalOpen(true))
    }
    const handleChange = (props) => {
        /* check for changes and ask are you sure before leaving */
        console.log(props)
    }

    return (
        <div>
            <p>Card suppliers section</p>
        </div>
    )
}

export default CardSupliersEdit;