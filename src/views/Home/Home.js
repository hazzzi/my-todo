import React, { useState } from 'react';
import {
	Grid,
	Typography,
	Box,
	Checkbox,
	FormHelperText,
	FormControlLabel,
	FormControl,
	FormLabel,
	FormGroup
} from '@material-ui/core';

const sampleData = Array(10)
	.fill(0)
	.map(() => {
		return {
			title: '오늘의 할일 입니다.',
			isComplete: false
		};
	});

const useChange = (state, array) => {
	const [check, setCheck] = useState(state);

	return {
		currentItemp: array[check]
	};
};

const Home = () => {
	return (
		<Grid container>
			<Grid item xs />
			<Grid item xs={8}>
				<Box>
					<Typography variant='h1'>TO-DO LIST</Typography>
				</Box>
				<Box flexDirection='row' justifyContent='center'>
					<FormControl component='fieldset'>
						<FormGroup>
							{sampleData.map(item => (
								<FormControlLabel
									control={
										<Checkbox
											checked={item.isComplete}
											onChange={event => {}}
										/>
									}
									label={item.title}
								/>
							))}
						</FormGroup>
					</FormControl>
				</Box>
			</Grid>
			<Grid item xs />
		</Grid>
	);
};
export default Home;
