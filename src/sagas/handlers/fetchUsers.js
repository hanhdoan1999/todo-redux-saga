import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_TASKS,GET_TASKS_SUCCESS, POST_TASK , PUT_TASK_NAME, PUT_TASK_STATE, DELETE_TASK,DELETE_TASK_SUCCESS,ADD_TASK_SUCCESS,UPDATE_TASK_NAME_SUCCESS, UPDATE_TASK_STATE_SUCCESS } from '../../actions/actionTypes';
import {getTasks, deleteTask, postTask, putTaskName, putTaskState} from '../requests/fetchUsers';



function* handleGetTasks() {
   const tasks = yield call(getTasks);
  yield put({type:GET_TASKS_SUCCESS, tasks});      
}

function* handleAddTask(action) {
    const newTask = yield call(postTask, action.taskName)
    yield put({type:ADD_TASK_SUCCESS, newTask});     
}

function* handleDeleteTask(action) {
    const task = yield call(deleteTask, action.id);
    yield put({type:DELETE_TASK_SUCCESS, task});     
 }

 function* handlePutTaskName(action) {
    const task = yield call(putTaskName, action.id ,action.editName);
    yield put({type:UPDATE_TASK_NAME_SUCCESS, task});     
 }

 function* handlePutTaskState(action) {
   const task = yield call(putTaskState, action.id ,action.check);
   yield put({type:UPDATE_TASK_STATE_SUCCESS, task});     
}


export function* watcherGetTasks() {
    yield takeEvery(GET_TASKS, handleGetTasks)
}

export function* watcherPostTask() {
    yield takeEvery(POST_TASK, handleAddTask)
}

export function* watcherDeleteTask() {
    yield takeEvery(DELETE_TASK, handleDeleteTask)
}

export function* watcherPutTaskName() {
    yield takeEvery(PUT_TASK_NAME, handlePutTaskName)
}

export function* watcherPutTaskState() {
    yield takeEvery(PUT_TASK_STATE, handlePutTaskState)
}
