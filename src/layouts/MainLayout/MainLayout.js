import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

function MainLayout(props) {
  const { title, children } = props
  return (
    <Box>
      <Box display="flex" justifyContent="center" padding={7} bgcolor="primary.main" color="primary.contrastText" mb={1}>
        <Typography variant="h3">{title}</Typography>
      </Box>
      <main>
        {children}
      </main>
    </Box>
  );
}

export default MainLayout;
