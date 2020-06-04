import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import ToDoReducer from './reducers/ToDoReducer'
import ContactReducer from './reducers/ContactReducer'
import contactSaga from './actions/ContactSaga'

const reducers = combineReducers({
    todoReducer: ToDoReducer,
    contactReducer: ContactReducer
})

const saga = createSagaMiddleware()

// export default createStore(reducers, applyMiddleware(thunk))
export default createStore(reducers, applyMiddleware(saga))
saga.run(contactSaga)
