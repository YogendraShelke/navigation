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
            const toDos = [...state.toDos].map(todo => {
                return todo.id === action.payload.id ? action.payload : todo
            })
            return { ...state, toDos }
        }
        case DELETE_TODO: {
            return {
                ...state,
                toDos: state.toDos.filter(e => e.id !== action.payload.id)
            }
        }
        default:
            return state
    }
}
