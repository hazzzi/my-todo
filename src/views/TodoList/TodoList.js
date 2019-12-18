import {
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { format } from 'date-fns';
import React, { useState } from 'react';
import TodoItem from '../TodoItem';

export default function TodoList() {
  const [todoList, setTodoList] = useState([]);

  const handleAddNewTodo = () => {
    const array = [...todoList, { contents: '할 일을 입력하세요.', isComplete: false, editMode: false }];
    setTodoList(array);
  };

  const handleChangeTodoContents = (index) => (event) => {
    const inputValue = event.target.value;
    todoList[index].contents = inputValue;
    setTodoList([...todoList]);
  };

  const handleClickTodoComplete = (index) => (event) => {
    todoList[index].isComplete = event.target.checked;
    setTodoList([...todoList]);
  };

  const handleClickDeleteTodo = (index) => () => {
    todoList.splice(index, 1);
    setTodoList([...todoList]);
  };

  const handleClickEditmode = (index) => () => {
    todoList[index].editMode = !todoList[index].editMode;
    setTodoList([...todoList]);
  };

  const handleKeyUpEditmode = (index) => () => {
    if (window.event.keyCode === 13) {
      todoList[index].editMode = !todoList[index].editMode;
      setTodoList([...todoList]);
    }
  };

  const handle = {
    handleAddNewTodo,
    handleChangeTodoContents,
    handleClickTodoComplete,
    handleClickDeleteTodo,
    handleClickEditmode,
    handleKeyUpEditmode,
  };

  return (
    <Grid container justify="center">
      <Grid item xs={12} md={6}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox" />
              <TableCell>
                <Typography variant="h6">{format(new Date(), 'yyyy-MM-dd')}</Typography>
              </TableCell>
              <TableCell padding="checkbox" />
              <TableCell padding="checkbox">
                <IconButton
                  size="small"
                  color="secondary"
                  onClick={handleAddNewTodo}
                >
                  <AddCommentIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todoList.map((todo, index) => <TodoItem todo={todo} index={index} handle={handle} />)}
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
}
