import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from '../ActionTypes'

export const createTodo = payload => ({ type: CREATE_TODO, payload })
export const deleteTodo = payload => ({ type: DELETE_TODO, payload })
export const updateTodo = payload => ({ type: UPDATE_TODO, payload })
