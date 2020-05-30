import { CREATE_TODO, UPDATE_TODO, DELETE_TODO } from '../ActionTypes'

const defaultState = {
    toDos: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_TODO: {
            return { ...state, toDos: state.toDos.concat(action.payload) }
        }
        case UPDATE_TODO: {
            return { ...state }
        }
        case DELETE_TODO: {
            return { ...state }
        }
        default:
            return state
    }
}
