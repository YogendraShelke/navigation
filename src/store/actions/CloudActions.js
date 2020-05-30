import {
    FETCH_TODO_SUCCESS,
    FETCH_TODO_ERROR,
    DELETE_CLOUD_TODO,
    UPDATE_CLOUD_TODO
} from '../ActionTypes'

export const fetchToDo = () => {
    return async dispatch => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/posts/'
            )
            const todos = await response.json()
            dispatch({ type: FETCH_TODO_SUCCESS, payload: todos })
        } catch (error) {
            dispatch({ type: FETCH_TODO_ERROR, payload: error })
        }
    }
}

export const deleteCloudTodo = payload => ({ type: DELETE_CLOUD_TODO, payload })
export const updateCloudTodo = payload => ({ type: UPDATE_CLOUD_TODO, payload })
