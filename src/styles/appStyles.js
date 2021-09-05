import { styled, alpha } from '@mui/material/styles';
import { InputBase, AppBar, Toolbar, Typography, MenuItem, Popover, List, Box } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    order: 3,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

export const MyAppBar = styled(AppBar)({
    background: '#000',
    zIndex: 1301
});

export const MyToolBar = styled(Toolbar)({
    display: 'flex',
    //      flexFlow: 'wrap',
    justifyContent: 'space-between',
    paddingRight: '6px !important',
    paddingLeft: '0px !important'
});

export const MyLogo = styled(MenuItem)(() => ({
    order: 1
}));

export const MyProfile = styled(MenuItem)(() => ({
    order: 6
}));

export const MyTitle = styled(Typography)(({ theme }) => ({
    order: 2,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },  
}));

export const LocationsWrapper = styled('div')(({ theme }) => ({
    display:'flex',
    order: 4
}));

export const LocationWrapper = styled('div')(({ theme }) => ({
    display:'flex',
    order: 4
}));

export const LocationPopover = styled(Popover)(({ theme }) => ({
    zIndex: '1304 !important',
}));

export const LocationList = styled(List)(({ theme }) => ({
    paddingTop: 0,
    paddingBottom: 0,
    borderRight: 'gray !important',
    borderWidth: 'thin  !important',
    borderRightStyle: 'solid  !important'
}));

export const QueuesBox = styled(Box)(({ theme }) => ({
    order: 5
}));

export const BadgeWrapper = styled('p')(({ theme }) => ({
    [theme.breakpoints.down('md')]: {
        display: 'none',
      }
}));

export const BodyRoot = styled('div')(({ theme }) => ({
    marginTop: 128,
    marginBottom: 48,
    width: '100%',
}));
