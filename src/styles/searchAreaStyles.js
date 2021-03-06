//import { makeStyles } from '@mui/styles'
import { styled, alpha } from '@mui/material/styles';
import { InputBase } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
    position: 'relative',
//    order: 3,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    //    width: '100%',
    [theme.breakpoints.up('sm')]: {
//        marginLeft: theme.spacing(3),
//        width: 'auto',
    },
    [theme.breakpoints.down('multiLine')]: {
//        order: 5
    },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1),
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
        [theme.breakpoints.up('noLabel')]: {
//            width: '20ch',
        },
    },
}));
