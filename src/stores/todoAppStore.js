import { createStore } from 'redux';

import { todoAppReducer } from '../actions/todoAppReducer';

export const todoAppStore = createStore(todoAppReducer);