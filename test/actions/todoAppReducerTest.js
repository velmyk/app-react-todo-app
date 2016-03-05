const deepFreeze = require('deep-freeze');

import { todoAppReducer } from 'actions/todoAppReducer';

describe('todo app reducer', () => {
	let stateBefore,
		stateAfter;

	describe('toggle todo', () => {
		let toggleAction;

		beforeEach(() => {
			toggleAction = {
				type: 'TOGGLE_TODO',
				id: 1
			};

			stateBefore = {
				todos: [
					{
						id: 1,
						completed: false
					}
				],
				visibilityFilter: 'SHOW_ALL'
			};

			stateAfter = {
				todos: [
					{
						id: 1,
						completed: true
					}
				],
				visibilityFilter: 'SHOW_ALL'
			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);
		});

		it('should change completed property of todo', () => {
			expect(todoAppReducer(stateBefore, toggleAction)).to.deep.equal(stateAfter);
		});
	});

	describe('add todo', () => {
		let addTodoAction,
			todoText,
			todoId;

		beforeEach(() => {
			todoText = Math.random() + '';
			todoId = Math.random();
			addTodoAction = {
				type: 'ADD_TODO',
				text: todoText,
				id: todoId
			};

			stateBefore = {
				todos: [],
				visibilityFilter: 'SHOW_ALL'
			};

			stateAfter = {
				todos: [
					{
						id: todoId,
						completed: false,
						text: todoText
					}
				],
				visibilityFilter: 'SHOW_ALL'
			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);
		});

		it('should create todo with correct properties', () => {
			expect(todoAppReducer(stateBefore, addTodoAction)).to.deep.equal(stateAfter);
		});
	});

	describe('delete todo', () => {
		let deleteTodoAction,
			todoId;

		beforeEach(() => {
			todoId = Math.random();
			deleteTodoAction = {
				type: 'DELETE_TODO',
				id: todoId
			};

			stateBefore = {
				todos: [
					{
						id: todoId,
						completed: false,
					},
					{
						id: todoId + 1,
						completed: false,
					}
				],
				visibilityFilter: 'SHOW_ALL'
			};

			stateAfter = {
				todos: [
					{
						id: todoId + 1,
						completed: false,
					}
				],
				visibilityFilter: 'SHOW_ALL'
			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);
		});

		it('should delete todo with correct properties', () => {
			expect(todoAppReducer(stateBefore, deleteTodoAction)).to.deep.equal(stateAfter);
		});
	});

	describe('set visibilityFilter', () => {
		let setVisibilityAction,
			visibilityFilter;

		beforeEach(() => {
			visibilityFilter = Math.random() + '';
			setVisibilityAction = {
				type: 'SET_VISIBILITY_FILTER',
				filter: visibilityFilter
			};

			stateBefore = {
				todos: [],
				visibilityFilter: 'SHOW_ALL'
			};

			stateAfter = {
				todos: [],
				visibilityFilter: visibilityFilter
			};

			deepFreeze(stateBefore);
			deepFreeze(stateAfter);
		});

		it('should set new visibility filter', () => {
			expect(todoAppReducer(stateBefore, setVisibilityAction)).to.deep.equal(stateAfter);
		});
	});
});