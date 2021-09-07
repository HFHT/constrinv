import { styled } from '@mui/material/styles';
import { Toolbar, MenuItem, Popover, List, ListItemText } from '@mui/material';

export const NavCatToolBar = styled(Toolbar)(({ theme }) => ({
    minHeight: 36,
    justifyContent: 'space-between'
}));

export const NavCatMenuItem = styled(MenuItem)(({ theme }) => ({
    img: {
        width: '0px',
        [theme.breakpoints.down('multiLine')]: {
            width: '40px',
        }
    }
}));

export const NavCatMenuListItem = styled('div')(({ theme }) => ({
    [theme.breakpoints.down('multiLine')]: {
        fontSize: 0
    },
    zIndex: 4,
    '&:hover': {
        backgroundColor: '#555',
    }
}));

export const StyleCatPopover = styled(Popover)(({ theme }) => ({
    display: 'flex',
    zIndex: 'auto'
}));

export const StyleCatList = styled(List)(({ theme }) => ({
    overflow: 'auto',

}));

export const StyleCatListItemText = styled(ListItemText)(({ theme }) => ({

}));
