import React from 'react';
import { AppBar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position='fixed' sx={{ top: 'auto', bottom: 0, background: '#000' }}>
      <Typography variant='body1' align='center'>
        © Copyright Habitat for Humanity Tucson 2021
      </Typography>
    </AppBar>
  );
}

export default Footer;