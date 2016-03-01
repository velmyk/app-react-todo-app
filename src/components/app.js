import React from 'react';

import { AddTodo } from './addTodo';
import { VisibleTodoList } from './visibleTodoList';
import { Footer } from './footer';

export const TodoApp = () => (
	<div>
		<AddTodo />
		<VisibleTodoList />
		<Footer />
	</div>
);