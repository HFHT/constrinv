//import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const SignOutWrapper = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('smallBadge')]: {
        paddingLeft: '0px',
        paddingRight: '0px'
    },
}));

export const SignOutButtonWrapper = styled(IconButton)(({ theme }) => ({
    [theme.breakpoints.down('smallBadge')]: {
        paddingLeft: '0px',
        paddingRight: '0px'
    },
}));