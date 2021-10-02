import { useEffect, useState } from 'react';
import { Dialog, DialogActions, DialogContent, IconButton, ImageList, ImageListItem, ListSubheader, ImageListItemBar, Button } from '@mui/material';
import { Info as InfoIcon, Star } from '@mui/icons-material';
// Context and Redux imports
import { useSelector, useDispatch } from 'react-redux'
import { setEditModalOpen, setImgEditModalOpen, setEditCardContents } from '../../features/CardActions/editSlice'
import { cardTableStyles } from '../../styles/inventoryCardStyles'

const CardImgGrid = (props) => {
    useEffect(() => {
        /* merge two photo arrays, filter out blank images and mark the favorited one */
        setAllImages([...editCardContents.invSKUs, ...editCardContents.invPhotos].filter(img => img.img ? true : false).map((img) => img.img === editCardContents.invImg ? { ...img, fav: true } : { ...img, fav: false }))
        setImagesReady(true)
    }, []);

    const classes = cardTableStyles()
    const { isImgEditModalOpen, editCardContents } = useSelector((state) => state.editModal)
    const [selectedTile, setSelectedTile] = useState(null);
    const [imagesReady, setImagesReady] = useState(false)
    const [allImages, setAllImages] = useState([])


    const dispatch = useDispatch()
    const handleClose = () => {
        /* check for changes and ask are you sure before leaving */
        setSelectedTile(null);
        //        dispatch(setEditModalOpen(false))
    }
    const handleImgClose = () => {
        //        dispatch(setImgEditModalOpen(false))
    }
    const handleClickOpen = (tile) => {
        setSelectedTile(tile);
        //        dispatch(setImgEditModalOpen(true))
    }
    const handleClickFav = (img) => {
        console.log(img)
        //        dispatch(setImgEditModalOpen(true))
    }
    const handleChange = (props) => {
        /* check for changes and ask are you sure before leaving */
        console.log(props)
    }

    return (
        imagesReady && <div>
            <DialogContent sx={{py: 1/2}}>
                <ImageList sx={{ width: 500, height: 'auto' }} cols={3} rowHeight={164}>
                    {allImages.map((item) => (
                        <ImageListItem key={item.img}>
                            <a className={classes.a} href='#' onClick={() => handleClickOpen(item)}>
                            <img
                                className={classes.img}
                                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                alt={`MFG: ${item.invMFG} | Model: ${item.invModel}`}
                                loading="lazy"
                            />
                            </a>
                            <ImageListItemBar
                                sx={{
                                    background:
                                        'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                }}
                                title={`MFG: ${item.invMFG} | Model: ${item.invModel}`}
                                subtitle={`UPC: ${item.invUPC}`}
                                position='top'
                                actionIcon={
                                    <IconButton
                                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                        aria-label={`info about ${item.invMFG}`}
                                        onClick={() => handleClickFav(item.img)}
                                    >
                                        <Star color={item.fav ? 'warning' : 'action'} />
                                    </IconButton>
                                    
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </DialogContent>

            <Dialog open={selectedTile !== null} onClose={handleImgClose}>
                {selectedTile && (
                    <img src={selectedTile.img} alt={selectedTile.title} />
                )}
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Save</Button>
                </DialogActions>
            </Dialog>

        </div>
    )
}

export default CardImgGrid;