import { styled } from '@mui/material/styles';

export const BodyRoot = styled('div')(({ theme }) => ({
    marginTop: '6px',
    marginBottom: '48px',
    width: '100%',
    [theme.breakpoints.down('multiLine')]: {
        marginLeft: '50px'
    }

}));
