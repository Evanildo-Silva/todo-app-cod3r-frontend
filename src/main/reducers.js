import { combineReducers } from 'redux'
import todoReducer from '../Todo/todoReducer'

const rootReducer = combineReducers({
  todo: todoReducer
})

export default rootReducer