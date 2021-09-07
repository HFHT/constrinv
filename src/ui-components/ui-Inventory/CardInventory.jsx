import React, { useEffect } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, Grid, Typography } from '@mui/material';
import CardInvLocation from './CardInvLocation'
import { cardStyles } from '../../styles/inventoryCardStyles'

const CardInventory = (props) => {
    useEffect(() => {
        console.debug(props.listItem.id)
      }, []);
    const classes = cardStyles()
    console.debug(classes)
    const handleInvEditClick = (props) => {
        console.log(props)
    } 
    const handleAddPalletClick = (props) => {
        console.log(props)
    }    
    const handleAddShipClick = (props) => {
        console.log(props)
    } 

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card key={props.listItem.id} variant="outlined" className={classes.card}>
                <CardActionArea onClick={() => handleInvEditClick(props)}>
                    <CardMedia
                        className={classes.media}
                        alt={props.listItem.invDesc}
                        component="img"
                        image={props.listItem.invImg}
                        title={props.listItem.invDesc}
                    />
                    <CardContent className={classes.content}>
                    <Typography gutterBottom variant="subtitle2" component="p">
                        {props.listItem.invMFG ? <b>{props.listItem.invMFG+': '}</b> : ''}
                        {props.listItem.invDesc}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <div className={classes.invloc}>
                    <CardInvLocation locAry={props.listItem.invQty} />
                </div>
                <div className={classes.buttons}>
                    <Button variant="contained" size="small" color="primary" onClick={() => handleAddPalletClick(props)}>
                        Add to Pallet
                    </Button>
                    <Button variant="contained" disabled size="small" color="primary" onClick={() => handleAddShipClick(props)}>
                        Add to Shipment
                    </Button>
                </div>
            </Card>
        </Grid>
    )
  }
  
  export default CardInventory