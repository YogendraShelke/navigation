import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ToDoReducer from './reducers/ToDoReducer'
import ContactReducer from './reducers/ContactReducer'

const reducers = combineReducers({
    todoReducer: ToDoReducer,
    contactReducer: ContactReducer
})

export default createStore(reducers, applyMiddleware(thunk))
