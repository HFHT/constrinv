//import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import { MenuItem, Box } from '@mui/material';

export const QueuesBox = styled(Box)(({ theme }) => ({
    order: 5,
    [theme.breakpoints.down('multiLine')]: {
        order: 2
    },
}));

export const QueuesItem = styled(MenuItem)(({ theme }) => ({
    [theme.breakpoints.down('multiLine')]: {
        paddingLeft: '4px',
        paddingRight: '4px'
    },
    [theme.breakpoints.down('smallLogo')]: {
        paddingLeft: '0px',
        paddingRight: '0px'
    },
}));

export const BadgeWrapper = styled('p')(({ theme }) => ({
    [theme.breakpoints.down('noLabel')]: {
        display: 'none',
    }
}));