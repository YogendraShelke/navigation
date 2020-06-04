import { CONTACT_SUCCESS, CONTACT_ERROR } from '../ActionTypes'

const defaultState = {
    contacts: [],
    error: undefined
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case CONTACT_SUCCESS: {
            return {
                ...state,
                error: undefined,
                contacts: action.payload
            }
        }
        case CONTACT_ERROR: {
            return { ...state, contacts: [], error: action.payload }
        }
        default:
            return state
    }
}
