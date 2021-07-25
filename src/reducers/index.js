import { combineReducers } from 'redux';
import tasks from './tasksReducer'

const myReducer = combineReducers ({
    tasks
});

export default myReducer;