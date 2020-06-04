import { CONTACT_SUCCESS, CONTACT_ERROR } from '../ActionTypes'

export const fetchContacts = () => {
    return async dispatch => {
        try {
            const res = await fetch(
                'https://randomuser.me/api/?nat=us,gb&results=50'
            )
            const json = await res.json()
            dispatch({ type: CONTACT_SUCCESS, payload: json.results })
        } catch (error) {
            dispatch({ type: CONTACT_ERROR, payload: error })
        }
    }
}
