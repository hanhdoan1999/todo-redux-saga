import { all } from 'redux-saga/effects';
import {watcherGetTasks , watcherDeleteTask, watcherPostTask, watcherPutTaskName, watcherPutTaskState} from './handlers/fetchUsers';

export default function* rootSaga() {
    yield all([ // gọi nhiều saga
        watcherPostTask(),
        watcherGetTasks(),
        watcherDeleteTask(),
        watcherPutTaskName(),
        watcherPutTaskState(),

        
    ]);
}

//tại đây các saga sẽ được gom lại trong effect all để chạy