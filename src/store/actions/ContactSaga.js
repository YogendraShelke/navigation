import { CONTACT_SUCCESS, CONTACT_ERROR, FETCH_CONTACT } from '../ActionTypes'

import { put, takeEvery, call } from 'redux-saga/effects'

function* fetchContacts() {
    try {
        const res = yield call(() =>
            fetch('https://randomuser.me/api/?nat=us,gb&results=50')
        )
        const json = yield res.json()
        yield put({ type: CONTACT_SUCCESS, payload: json.results })
    } catch (error) {
        yield put({ type: CONTACT_ERROR, payload: error })
    }
}

function* contactSaga() {
    yield takeEvery(FETCH_CONTACT, fetchContacts)
}

export default contactSaga
