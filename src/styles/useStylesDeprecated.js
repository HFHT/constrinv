import { makeStyles } from '@mui/styles';
import { alpha } from '@mui/material/styles'

const useStyles = makeStyles((theme) => ({
    toolBar: {
      display:'flex',
//      flexFlow: 'wrap',
      justifyContent: 'space-between',
      paddingRight: 6,
      paddingLeft: 0
    },
    toolLogo: {
      order: 1
    },
    toolSearch: {
      order: 3
    },
    toolLocations: {
      display:'flex',
      order: 4
    },
    toolQueues: {
      order: 5
    },
    toolProfile: {
      order: 6
    },    
    navRoot: {
      background: '#000',
      zIndex: 1301
    },
    toolTitle: {
      order: 2,
      flexGrow: 1,
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },      
    },  
    navBadge: {
      [theme.breakpoints.down('md')]: {
        display: 'none',
      }
    },  
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 0),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    searchInputRoot: {
      color: 'inherit',
    },
    searchInputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch',
        },
      },
      [theme.breakpoints.down('sm')]: {
        width: '0ch',
        '&:focus': {
          width: '20ch',
        },
      },    
    },
    locactionPopOver: {
      zIndex: '1304 !important',
    },
    locationList: {
        paddingTop: 0,
        paddingBottom: 0,
        borderRight: 'gray',
        borderWidth: 'thin',
        borderRightStyle: 'solid'
    },
    bodyRoot: {
      marginTop: 128,
      marginBottom: 48,
      width: '100%',
    }
}));

export default useStyles;