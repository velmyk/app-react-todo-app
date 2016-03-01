import React from 'react';
import { connect } from 'react-redux';

import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';

let nextTodoId = 0;

const addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		id: nextTodoId++,
		text
	}
};

let AddTodoo = ({ dispatch }) => {
	let input;

	const onInputChange = (e) => {
		input = e.target;
	};

	return (
		<div>
			<TextField
				onChange={onInputChange}
				hintText="Todo"
			/>
			<FlatButton
				label="Add Todo"
				onClick={() => {
					dispatch(addTodo(input.value));
					input.value = '';
				}}/>
		</div>
	);
};

export const AddTodo = connect()(AddTodoo);