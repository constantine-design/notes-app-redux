import {
  ADD_TODO, TOGGLE_TODO, REMOOVE_TODO, MAKE_ALL_TODO, CLEAR_COMPLETED_TODO, EDIT_TODO, SET_FILTER_TODO
} from "../reducers";

export const addTodo = (payload) => ({type: ADD_TODO, payload});
export const toggleTodo = (payload) => ({type: TOGGLE_TODO, payload});
export const remooveTodo = (payload) => ({type: REMOOVE_TODO, payload});
export const makeAllTodo = (payload) => ({type: MAKE_ALL_TODO, payload});
export const clearCompletedTodo = (payload) => ({type: CLEAR_COMPLETED_TODO, payload});
export const editTodo = (payload) => ({type: EDIT_TODO, payload});
export const setFilterTodo = (payload) => ({type: SET_FILTER_TODO, payload});

export const todoFilterEnum = {
  all: "All",
  active: "Active",
  completed: "Completed"
}
