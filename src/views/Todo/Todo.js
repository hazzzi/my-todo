import {
  Box, Checkbox, FormControl, IconButton, TableCell, TableRow, TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React from 'react';

const Todo = (todo) => {
  const { contents, checked } = todo;
  return (
    <TableRow key={contents}>
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      </TableCell>
      <TableCell>
        <Box>
          <FormControl>
            <TextField
              fullWidth
              value={contents}
            />
          </FormControl>
        </Box>
      </TableCell>
      <TableCell>
        <Box>
          <IconButton
            size="small"
            color="default"
          >
            <EditIcon />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell>
        <IconButton
          size="small"
          color="default"
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default Todo;
