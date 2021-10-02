import { useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, setImgEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'

const CardEdit = (props) => {
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
        editCardContents &&
        <Dialog open={isEditModalOpen} onClose={handleClose}>
            <DialogTitle>
                <TextField defaultValue={editCardContents.invItem} label="Item Name" margin="dense" fullWidth required variant="standard" />
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                </DialogContentText>
                <TextField defaultValue={editCardContents.invDesc} label="Description" margin="dense" fullWidth required variant="standard" multiline />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={0}
                        onChange={handleChange}
                        label="Age"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

                <TextField
                    id="outlined-select-currency"
                    select
                    label="Category"
                    helperText=" "
                    onChange={handleChange}
                >
                    <MenuItem key={0} value={0} >

                    </MenuItem>
                    <MenuItem key={1} value={1} selected={true}>
                        Appliances
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                        Building Materials
                    </MenuItem>
                </TextField>
                <TextField
                    id="outlined-select-currency"
                    select
                    label="Subcategory"
                    helperText=" "
                    onChange={handleChange}
                >
                    <MenuItem key={0} value={0}>

                    </MenuItem>
                    <MenuItem key={1} value={1}>
                        Drywall
                    </MenuItem>
                    <MenuItem key={2} value={2}>
                        Fasteners
                    </MenuItem>
                </TextField>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleSave}>Save</Button>
            </DialogActions>
            <Dialog open={isImgEditModalOpen} onClose={handleImgClose}>
                <p>SubModal??</p>
            </Dialog>
        </Dialog>
    )
}

export default CardEdit;