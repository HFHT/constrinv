import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import { Toolbar, Typography, MenuItem } from '@mui/material';

/*
export const appBarStyles = props => makeStyles(theme => ({
    appBar: {
        background: '#000000',
//        width: props.innerWidth
//        zIndex: 1301,
      },
})) */


export const appBarStyles = makeStyles((theme) => ({
    appBar: {
        background: '#000000',
//        zIndex: 1301,
      },
}))

export const MyToolBar = styled(Toolbar)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingRight: '6px !important',
    paddingLeft: '0px !important',
}));

export const MyLogo = styled(MenuItem)(({ theme }) => ({
//    order: 1,
    [theme.breakpoints.down('smallBadge')]: {
        padding: 0,
        //        width: '100px'
    }
}));

export const MyProfile = styled(MenuItem)(({ theme }) => ({
//    order: 6,
    [theme.breakpoints.down('smallBadge')]: {
//        order: 3,
        paddingLeft: '0px',
       paddingRight: '16px'
    }
}));

export const MyTitle = styled(Typography)(({ theme }) => ({
//    order: 2,
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('noTitle')]: {
        display: 'none',
    },
}));
