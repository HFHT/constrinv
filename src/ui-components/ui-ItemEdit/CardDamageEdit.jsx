import { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, Collapse, IconButton, DialogActions, Button, MenuItem, InputLabel, Select, FormControl } from '@mui/material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, setImgEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
// Theme and Style imports
import { styled } from '@mui/material/styles';
import { cardTableStyles } from '../../styles/inventoryCardStyles'
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
// Component imports

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


const CardDamageEdit = (props) => {
    useEffect(() => {
    }, []);

    const classes = cardTableStyles()
    const { isEditModalOpen, isImgEditModalOpen, editCardContents } = useSelector((state) => state.editModal)
    const [expanded, setExpanded] = useState(false)
    const dispatch = useDispatch()
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
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
        <div className={classes.expandDiv}>
            <DialogActions sx={{ ml: 0, py: 0 }}>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>   
                <h3>Damaged Items</h3>                             
            </DialogActions>
            <DialogContent sx={{ pb: 1 / 2 }}>

                <Collapse in={expanded} timeout="auto" unmountOnExit>

                    <p>stuff</p>

                </Collapse>
            </DialogContent>
        </div>
    )
}

export default CardDamageEdit;