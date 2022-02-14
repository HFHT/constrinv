import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableRow, Paper } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { selectModal, setEditModalOpen, setImgEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'

const CardInvQty = (props) => {
    const [invLocations, setInvLocations] = useState([]);
    const classes = cardTableStyles()
    const editCardContents  = useSelector(selectModal)    
    const { orgProfile } = useSelector((state) => state.orgProfile)
    const dispatch = useDispatch()
    useEffect(() => {
        const map = new Map()
        console.log(editCardContents, orgProfile)
        orgProfile.Locations.forEach(item => map.set(item.locName, item))
        editCardContents.invQty.ByLoc.forEach(item => map.set(item.itemLoc, { ...map.get(item.itemLoc), ...item }))
        console.log('map:', map)
        const mergedArray = Array.from(map.values())
        setInvLocations(mergedArray)
    }, []);
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
        console.log(props.target.value, props.target.name)
    }

    return (
        <div>
            <DialogContent sx={{py: 1/2}}>
                <TableContainer component={Paper} style={{ border: "1px solid rgba(0,0,0,0.2)", padding: 1 }}>
                    <Table className={classes.table} size="small" aria-label="Location inventory">
                        <TableBody>
                            {invLocations.map((row) => (
                                row.locshow && <TableRow key={row.id}>
                                    <TableCell component="th" scope="row" className={classes.tableCellLoc}>
                                        <b>{row.locName}</b>
                                    </TableCell>
                                    <TableCell align="left" className={classes.tableCell}>
                                        <TextField name={`invQty.ByLoc[${row.id}].itemQty`} defaultValue={row.itemQty} label="Stock" type="number" onChange={handleChange} inputProps={{min: 0}} margin="dense" size="small" variant="standard" />
                                    </TableCell>
                                    <TableCell align="left" className={classes.tableCell}>
                                        <TextField name={`invQty.ByLoc[${row.id}].itemAisle`} defaultValue={row.itemAisle} label="Aisle" type="text" onChange={handleChange} margin="dense" size="small" variant="standard" />
                                    </TableCell>
                                    <TableCell align="left" className={classes.tableCell}>
                                        <TextField name={`invQty.ByLoc[${row.id}].itemBay`} defaultValue={row.itemBay} label="Bay" type="number" onChange={handleChange} inputProps={{min: 0}} margin="dense" size="small" variant="standard" />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </DialogContent>

        </div>
    )
}

export default CardInvQty;