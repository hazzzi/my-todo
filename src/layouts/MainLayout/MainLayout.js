import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Home from '../../views/Home';

const MainLayout = () => (
  <Box>
    <Box display="flex" justifyContent="center" padding={7} bgcolor="primary.main" color="primary.contrastText" mb={1}>
      <Typography variant="h3">TODO LIST</Typography>
    </Box>
    <Home />
  </Box>
);


export default MainLayout;
