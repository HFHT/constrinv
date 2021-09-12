import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Card, Grid, CardHeader, CardActionArea, CardMedia, CardContent, CardActions, Collapse, Avatar, IconButton, Typography } from '@mui/material'

import { red, green, orange } from '@mui/material/colors';
import { ShoppingCart, Print, LocalShipping, PostAdd, Star } from '@mui/icons-material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CardInvLocation from './CardInvLocation'

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
    useEffect(() => {
        console.debug('InventoryCard render')
    }, [])

    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleInvEditClick = (props) => {
        //        console.log(props)
    }
    const handleAddPalletClick = (props) => {
        //        console.log(props)
    }
    const handleAddShipClick = (props) => {
        //        console.log(props)
    }
    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2} >
            <Card sx={{ maxWidth: 360 }}>
                <CardHeader
                    avatar={
                        <Avatar {...stringAvatar(props.listItem.catName, props.listItem.invWarnLevels, props.listItem.invQty.Total)} aria-label={props.listItem.catName} />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <Star color={props.listItem.invFav ? 'warning' : 'action'} />
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
                    <IconButton aria-label="print barcode">
                        <Print />
                    </IconButton>
                    <IconButton aria-label="add to cart">
                        <ShoppingCart />
                    </IconButton>
                    <IconButton aria-label="add to shipment">
                        <LocalShipping />
                    </IconButton>
                    <IconButton aria-label="add to pallet">
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
