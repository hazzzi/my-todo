import { Checkbox, Grid, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, FormControlLabel, TextField, Box, FormControl } from '@material-ui/core';
import AddCommentIcon from '@material-ui/icons/AddComment';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { format } from 'date-fns';
import React, { useState } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import Todo from '../Todo';

const Home = () => {
	const [todos, setTodos] = useState([{
		contents: "오늘 할 일 첫번째",
		checked: false,
	},
	{
		contents: "오늘 할 일 두번째",
		checked: false,
	}
	])
	// const handleTodoAdd = () => {
	// 	setTodos(todos => [...todos, { subject: "", checked: false, updateMode: true }])
	// }

	// const handleTodoDelete = index => () => {
	// 	if (window.confirm('TODO 리스트에서 제거합니다.')) {
	// 		todos.splice(index, 1)
	// 		setTodos([...todos])
	// 	} else {
	// 		return
	// 	}
	// }

	// const handleTodoChecked = index => (event) => {
	// 	todos[index].checked = event.target.checked
	// 	setTodos(todos => [...todos])
	// }
	const renderTableRow = (todo, index) => {
		const {contents, checked} = todo
		return (
			<TableRow key={contents}>
				<TableCell padding="checkbox">
					<Checkbox
						// onChange={handleTodoChecked(index)}
						checked={checked}
						icon={<FavoriteBorder />}
						checkedIcon={<Favorite />}
					/>
				</TableCell>
				<TableCell>
					{/* <Typography>{todo.contents? todo.contents : a}</Typography> */}
					<Box>
						<FormControl>
							<TextField
								fullWidth
								value={contents}
								onChange = { e => {
									const newD = {...todo, contents: e.target.value}
									//this.setState(old => [...old, newD])
									// setTodos
								} }
							// placeholder={a}
							/>
						</FormControl>
					</Box>
				</TableCell>
				<TableCell>
					{/* <Box>
						<IconButton
							size="small"
							color="default"
							onClick={() => {
								todos[index].updateMode = !todos[index].updateMode
								setTodos(todos => [...todos])
							}}
						>
							<SaveAltIcon />
						</IconButton>
					</Box> */}
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
					// onClick={handleTodoDelete(index)}
					>
						<DeleteIcon />
					</IconButton>
				</TableCell>
			</TableRow>
		)
	}

	return (
		<Grid container justify="center">
			<Grid item xs={12} md={6}>
				<TableContainer component={Paper}>
					<Table>
						<TableHead>
							<TableRow>
								<TableCell padding="checkbox">
								</TableCell>
								<TableCell>
									<Typography variant="h6">{format(new Date(), 'yyyy-MM-dd')}</Typography>
								</TableCell>
								<TableCell padding="checkbox" />
								<TableCell padding="checkbox" >
									<IconButton size="small" color="secondary"
									// onClick={handleTodoAdd}
									>
										<AddCommentIcon />
									</IconButton>
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{todos.map((todo, index) => <Todo key={index} {...todo}/>)}
							{/* {todos.map(renderTableRow)} */}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	);
};

export default Home;
