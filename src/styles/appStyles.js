import { styled } from '@mui/material/styles';

export const BodyRoot = styled('div')(({ theme }) => ({
    marginTop: '6px',
    marginBottom: '48px',
    [theme.breakpoints.down('multiLine')]: {
        marginLeft: '50px'
    }

}));
