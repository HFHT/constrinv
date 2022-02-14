import { useEffect, useState, useContext } from 'react';
import { Card, Grid, CardHeader, CardActionArea, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material'
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
// Theme and Style imports
import { styled } from '@mui/material/styles';
import { red, green, orange } from '@mui/material/colors';
import { ShoppingCart, Print, LocalShipping, PostAdd, Star, ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// Component imports
import CardInvLocation from './CardInvLocation'
import { InventoryContext } from "../../context/InventoryContext";
import { useHandleChange, useAddToHistory } from '../../services/hooks/useHandleChange';
import { usePushItemHistory } from '../../services/itemHistory'

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function setWarnColor(warn, level) {
    if (warn) {
        var color = green[500]
        if (warn.Yellow > level) { color = orange[500] }
        if (warn.Red > level) { color = red[500] }
        return color
    }
}

function stringAvatar(name, warn, level) {
    return {
        sx: {
            bgcolor: setWarnColor(warn, level),
        },
        children: `${name.charAt(0)}`,
    };
}

export default function InventoryCard(props) {
    const inventoryContext = useContext(InventoryContext)
    const { invItems, setInvItems, invItemHistory, setInvItemHistory } = inventoryContext  
    const [expanded, setExpanded] = useState(false)
    const [curCardItem, setCurCardItem] = useState(props.listItem)
    const dispatch = useDispatch()
    const [isSaved, handleChange] = useHandleChange(null)
    const [isAdded, handleAddToHistory] = useAddToHistory(null)
    const idx = props.index      
    useEffect(() => {
        console.debug('InventoryCard render')
    }, [])
    useEffect(() => {
        console.debug('Inventory Card Item changed')
    }, [curCardItem])

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleFavoriteClick = (props) => {
        console.log('Favorite:', props)
        var curcard = {...curCardItem, invFav: !curCardItem.invFav}
        setCurCardItem({...curcard})
        const updateItem = invItems.map((item) => item._id === props.listItem._id ? curcard : item)
        console.log(curcard, curCardItem, updateItem)
        setInvItems(updateItem)    
    }
 /*   const handleFavoriteClick = (props) => {
        console.log('Favorite:', props)
        const curCard = {...curCardItem}
        const newCard = {...curCard, invFav: !curCard.invFav }
//        var curcard = {...curCardItem, invFav: !curCardItem.invFav}
        setCurCardItem({...newCard})
        handleChange({_id: curCard._id, result: null, newCard: newCard, itemBefore: {invFav: curCard.invFav}, itemAfter: {invFav: newCard.invFav}})

    } */
    const handleInvEditClick = (props) => {
        console.log(props)
//        dispatch(setEditModalOpen(true))
        dispatch(setEditCardContents(props.listItem))
    }
    const handleAddPalletClick = (props) => {
        console.log(props)
    }
    const handleAddShipClick = (props) => {
        console.log(props)
    }
    const handlePrintClick = (props) => {
        console.log(props)
    }
    const handleAddCartClick = (props) => {
        console.log(props)
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card sx={{ maxWidth: 360 }}>
                <CardHeader
                    avatar={
                        <Avatar {...stringAvatar(props.listItem.catName, props.listItem.invWarnLevels, props.listItem.invQty.Total)} aria-label={props.listItem.catName} />
                    }
                    action={
                        <IconButton aria-label="settings" onClick={() => handleFavoriteClick(props)}>
                            <Star color={curCardItem.invFav ? 'warning' : 'action'} />
                        </IconButton>
                    }
                    title={props.listItem.invItem}
                    subheader={`InStock: ${props.listItem.invQty.Total} | Category: ${props.listItem.catSub}`}
                />
                <CardActionArea onClick={() => handleInvEditClick(props)}>
                    <CardMedia
                        component="img"
                        height="194"
                        image={props.listItem.invImg}
                        alt={props.listItem.invItem}
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            {props.listItem.invDesc}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing>
                    <IconButton aria-label="print barcode" onClick={() => handlePrintClick(props)}>
                        <Print />
                    </IconButton>
                    <IconButton aria-label="add to cart" onClick={() => handleAddCartClick(props)}>
                        <ShoppingCart />
                    </IconButton>
                    <IconButton aria-label="add to shipment" onClick={() => handleAddShipClick(props)}>
                        <LocalShipping />
                    </IconButton>
                    <IconButton aria-label="add to pallet" onClick={() => handleAddPalletClick(props)}>
                        <PostAdd />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <CardInvLocation locAry={props.listItem.invQty.ByLoc} />
                    </CardContent>
                </Collapse>
            </Card>
        </Grid>
    );
}
