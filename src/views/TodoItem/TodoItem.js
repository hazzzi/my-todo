import {
  Box,
  Checkbox,
  IconButton,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import React from 'react';
import PropTypes from 'prop-types';

export default function TodoItem(props) {
  const { todo, index, handle } = props;
  const { contents, isComplete, editMode } = todo;
  const {
    handleChangeTodoContents,
    handleClickTodoComplete,
    handleClickDeleteTodo,
    handleClickEditmode,
    handleKeyUpEditmode,
  } = handle;

  return (
    <TableRow>
      <TableCell padding="checkbox">
        <Checkbox
          checked={isComplete}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
          onChange={handleClickTodoComplete(index)}
        />
      </TableCell>
      <TableCell>
        <Typography hidden={editMode} onClick={handleClickEditmode(index)}>{contents}</Typography>
        <Box hidden={!editMode}>
          <TextField
            fullWidth
            value={contents}
            onChange={handleChangeTodoContents(index)}
            onKeyUp={handleKeyUpEditmode(index)}
          />
        </Box>
      </TableCell>
      <TableCell>
        <Box>
          <IconButton
            size="small"
            color="default"
            onClick={handleClickEditmode(index)}
          >
            <EditIcon />
          </IconButton>
        </Box>
      </TableCell>
      <TableCell>
        <IconButton
          size="small"
          color="default"
          onClick={handleClickDeleteTodo(index)}
        >
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  handle: PropTypes.func.isRequired,
};
