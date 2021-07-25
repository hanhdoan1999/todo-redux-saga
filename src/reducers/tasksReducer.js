import { GET_TASKS,GET_TASKS_SUCCESS,GET_TASKS_FAILED, POST_TASK ,DELETE_TASK,DELETE_TASK_SUCCESS,ADD_TASK_SUCCESS,UPDATE_TASK_NAME_SUCCESS, UPDATE_TASK_STATE_SUCCESS } from '../actions/actionTypes';

const initialState  = {
    tasks: [],
    loading: false,
    error: null,
}

const tasks = (state = initialState, action) => {
    switch(action.type){
        case GET_TASKS,DELETE_TASK,POST_TASK:
            return {...state, laoding: true};
        case GET_TASKS_SUCCESS:
            return {...state, loading: false, tasks: action.tasks};
        case DELETE_TASK_SUCCESS:
            return {...state,  loading: false, tasks: state.tasks.filter(t => t.id !== action.task.id)}
        case ADD_TASK_SUCCESS:
            return {...state, loading:false, tasks: [...state.tasks, action.newTask] }
        case UPDATE_TASK_NAME_SUCCESS:
            return {...state, loading:false, tasks: state.tasks.map(el => el.id === action.task.id ? {...el,task: action.task.task} : el)}
        case UPDATE_TASK_STATE_SUCCESS:
            return {...state, loading:false, tasks: state.tasks.map(el => el.id === action.task.id ? {...el,complete: action.task.complete} : el)}
        case GET_TASKS_FAILED:
            return {...state, loading: false, error: action.messagse}
        default:
            return state;
    }
};

export default tasks;