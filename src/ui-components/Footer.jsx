import React from 'react';
import { AppBar, Typography } from '@mui/material';
/*
const useStyles = makeStyles(theme => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    background: '#000000',
  },
  footer: {
  },
}));*/

const Footer = () => {
  const classes = {}
  return (
    <AppBar position='fixed'>
      <Typography variant='body1' align='center'>
        © Copyright Habitat for Humanity Tucson 2021
      </Typography>
    </AppBar>
  );
}

export default Footer;