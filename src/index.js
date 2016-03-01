import 'core-js/fn/object/assign';

require('styles/App.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { TodoApp } from './components/app';
import { todoAppStore } from './stores/todoAppStore';



ReactDOM.render(
	<Provider store={todoAppStore}>
		<TodoApp />
	</Provider>,
	document.getElementById('app')
);