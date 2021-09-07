import React, { useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer,TableRow, Paper } from '@mui/material';
import { cardTableStyles } from '../../styles/inventoryCardStyles'

const CardInvLocation = (props) => {
    useEffect(() => {
      }, []);
    const classes = cardTableStyles()
    const rows = props.locAry
    return (
        <TableContainer component={Paper} style={{ border: "1px solid rgba(0,0,0,0.2)", padding: 1 }}>
          <Table className={classes.table} size="small"  aria-label="Location inventory">
            <TableBody>
            {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row" className={classes.tableCellLoc}>
                    <b>{row.itemLoc}</b>
                  </TableCell>
                  <TableCell align="left" className={classes.tableCell}>Stock: <b>{row.itemQty}</b></TableCell>
                  <TableCell align="left" className={classes.tableCell}>Aisle: {row.itemAisle}</TableCell>
                  <TableCell align="left" className={classes.tableCell}>Bay: {row.itemBay}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>       
        </TableContainer>
    );
}

export default CardInvLocation;