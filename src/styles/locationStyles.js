//import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';
import { Popover, List } from '@mui/material';

export const LocationsWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
//    order: 4
}));

export const LocationWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
//    order: 4
}));

export const LocationPopover = styled(Popover)(({ theme }) => ({
    zIndex: '1304 !important',
}));

export const LocationList = styled(List)(({ theme }) => ({
    paddingTop: '0 !important',
    paddingBottom: '0 !important',
    borderRight: 'gray !important',
    borderWidth: 'thin  !important',
    borderRightStyle: 'solid  !important'
}));