import React from 'react';
import { connect } from 'react-redux';

import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import Checkbox from 'material-ui/lib/checkbox';
import ContentClear from 'material-ui/lib/svg-icons/content/clear';

const toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		id
	};
};

const Todo = ({
	onClick,
	onDeleteTodoClick,
	completed,
	text
}) => (
	<ListItem
		leftCheckbox={<Checkbox checked={completed}/>}
		onClick={onClick}
		style={{
			textDecoration: completed ? 'line-through' : 'none'
		}}
		rightIcon={
			<ContentClear
				onClick={e => {
					e.preventDefault();
					onDeleteTodoClick();
				}}
			/>
		}
	>
			{text}
	</ListItem>
);

const TodoList = ({
	todos,
	onTodoClick,
	onDeleteTodoClick
}) => (
	<List>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				onDeleteTodoClick={() => onDeleteTodoClick(todo.id)}
			/>
		)}
	</List>
);

const getVisibleTodos = (
	todos,
	filter
) => {
	switch (filter) {
		case 'SHOW_ALL':
			return todos;
		case 'SHOW_ACTIVE':
			return todos.filter(
				t => !t.completed
			);
		case 'SHOW_COMPLETED':
			return todos.filter(
				t => t.completed
			);
	}
};

const mapStateToTodoListProps = (state) => {
	return {
		todos: getVisibleTodos(
			state.todos,
			state.visibilityFilter
		)
	};
};

const mapDispatchToTodoListProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		},
		onDeleteTodoClick: (id) => {
			dispatch(deleteTodo(id))
		}
	};
};

export const VisibleTodoList = connect(
	mapStateToTodoListProps,
	mapDispatchToTodoListProps
)(TodoList);