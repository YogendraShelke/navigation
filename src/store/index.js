import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import ToDoReducer from './reducers/ToDoReducer'
import CloudToDoReducer from './reducers/CloudToDoReducer'

const reducers = combineReducers({
    toDo: ToDoReducer,
    cloudToDo: CloudToDoReducer
})

export default createStore(reducers, applyMiddleware(thunk))
