import { makeStyles } from '@mui/styles'

export const cardStyles = makeStyles((theme) => ({
    card: {
        //height: 470,
    },
    media: {
        width: 220,
        height: 220,
    },
    content: {
        height: 96,
    },
    invloc: {
        height: 116,
        padding: '0 3px 0 3px',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'space-evenly',
    }
}))

export const invGridStyles = makeStyles((theme) => ({
    fab: {
        position: 'fixed',
        top: 128,
        left: 4,
      },
      container: {
    
      }
}))

export const cardTableStyles = makeStyles((theme) => ({
    table: {
        minWidth: 100,
    },
    tableCell: {
        padding: '3px 0px 0px 3px',
        width: '15px',
        whiteSpace: 'nowrap',
        fontSize: '0.8rem'
    },
    tableCellLoc: {
        padding: '3px 0px 0px 3px',
        width: '80px',
        whiteSpace: 'nowrap',   
        fontSize: '0.8rem'     
    },
    a: {
        display: 'block',
        height: '100%'
    },
    img: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },
    dialogContent: {
        paddingBottom: '6px'
    },
    expandDiv: {
        display: 'flex'
    },
    dragArea: {
        height: '164px'
    }
}))
