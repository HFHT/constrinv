import { useEffect, useMediaQuery } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, Grid, Button, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, selectModal } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'
import { useHandleChange } from '../../services/hooks/useHandleChange';

const CardFieldEdit = (props) => {
    useEffect(() => {
    }, []);

    const classes = cardTableStyles()
    //    const twoLine = useMediaQuery(theme.breakpoints.down('multiLine'))
    const editCardContents  = useSelector(selectModal)
//    const [isSaved, handleChange] = useHandleChange()
    const dispatch = useDispatch()
    const handleClose = () => {
        /* check for changes and ask are you sure before leaving */
        dispatch(setEditModalOpen(false))
    }
    const handleSave = () => {

    }
    const handleChange = (props) => {
        /* check for changes and ask are you sure before leaving */
        console.log(props)
       console.log(props.target.value, props.target.name)
    }

    return (
        <div>
            <DialogTitle sx={{ py: 1 }}>
                <TextField name="invItem" defaultValue={editCardContents.invItem} onChange={handleChange} label="Item Name" margin="dense" fullWidth required variant="filled" />
            </DialogTitle>
            <DialogContent sx={{ pb: 1 / 2 }}>
                <DialogContentText>
                </DialogContentText>
                <TextField name="invDesc" defaultValue={editCardContents.invDesc} onChange={handleChange} label="Description" margin="dense" fullWidth variant="outlined" multiline />
                <Grid container spacing={1/2} justifyContent="flex-start" alignItems="flex-start" className={classes.grid}>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name="catName"
                                value={''}
                                onChange={handleChange}
                                label="Category"
                            >
                                <MenuItem value="">
                                    <em>--Select</em>
                                </MenuItem>
                                <MenuItem value='Appliances'>Appliances</MenuItem>
                                <MenuItem value='Building Materials'>Building Materials</MenuItem>
                                <MenuItem value='Doors & Windows'>Doors & Windows</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >

                        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-standard-label">Subcategory</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                name="catSub"
                                value={''}
                                onChange={handleChange}
                                label="Subcategory"
                            >
                                <MenuItem value="">
                                    <em>--Select</em>
                                </MenuItem>
                                <MenuItem value={10}>Drywall</MenuItem>
                                <MenuItem value={20}>Fasteners</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                        <FormControl variant="standard" sx={{ m: 1, maxWidth: 120 }}>
                            <TextField name="invWarnLevels.Yellow" defaultValue={editCardContents.invWarnLevels.Yellow} type="number" label="Warn Level" inputProps={{min: 0}} onChange={handleChange} margin="dense" required variant="outlined" />
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3} lg={3} xl={3} >
                        <FormControl variant="standard" sx={{ m: 1, maxWidth: 120 }}>
                            <TextField name="invWarnLevels.Red" defaultValue={editCardContents.invWarnLevels.Red} type="number" label="Alert Level" inputProps={{min: 0}} onChange={handleChange} margin="dense" required variant="outlined" />
                        </FormControl>
                    </Grid>
                </Grid>
            </DialogContent>
        </div>
    )
}

export default CardFieldEdit;