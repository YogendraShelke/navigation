import {
    FETCH_TODO_SUCCESS,
    FETCH_TODO_ERROR,
    DELETE_CLOUD_TODO,
    UPDATE_CLOUD_TODO
} from '../ActionTypes'

const defaultState = {
    toDos: [],
    error: undefined
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_TODO_SUCCESS: {
            return {
                ...state,
                error: undefined,
                toDos: action.payload
            }
        }
        case FETCH_TODO_ERROR: {
            return { ...state, toDos: [], error: action.payload }
        }
        case DELETE_CLOUD_TODO: {
            return {
                ...state,
                toDos: state.toDos.filter(e => e.id !== action.payload.id)
            }
        }
        case UPDATE_CLOUD_TODO: {
            return { ...state }
        }
        default:
            return state
    }
}
