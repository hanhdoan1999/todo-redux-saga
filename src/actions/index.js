import { GET_TASKS, POST_TASK ,PUT_TASK_NAME ,PUT_TASK_STATE, DELETE_TASK } from './actionTypes';

// create Action

export const getTasks = () => {
    return {
        type:GET_TASKS
    }
}

export const postTask = (taskName) => {
    return {
        type:POST_TASK,
        taskName
    }
}

export const putTaskName = (id,editName) => {
    return {
        type:PUT_TASK_NAME,
        id,
        editName
    }
}

export const putTaskState = (id,check) => {
    return {
        type:PUT_TASK_STATE,
        id,
        check
    }
}

export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}