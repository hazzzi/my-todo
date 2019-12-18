import { Box, Typography } from '@material-ui/core';
import React from 'react';
import TodoList from '../../views/TodoList';

const MainLayout = () => (
  <Box>
    <Box display="flex" justifyContent="center" padding={7} bgcolor="primary.main" color="primary.contrastText" mb={1}>
      <Typography variant="h3">TODO LIST</Typography>
    </Box>
    <TodoList />
  </Box>
);


export default MainLayout;
