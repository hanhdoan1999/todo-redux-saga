import API from '../../api';


export const getTasks = () => {
    return API.get()
    .then(res => res.data)
};

export const postTask = (taskName) => {
    try {
        return API.post('/', {
            task: taskName,
            complete: false
        })
        .then(res => res.data)
    } catch (error) {
        console.log(error.response);
    }
};

export const deleteTask = (id) => {
    try {
        return API.delete('/' + id)
        .then(res => res.data)
    } catch (error) {
        console.log(error.response);
    }
};

export const putTaskName = (id,editName) => {
    try {
        return API.put('/' + id, {
            task: editName,
        })
        .then(res => res.data)
    } catch (error) {
        console.log(error.response);
    }
};

export const putTaskState = (id,check) => {
    try {
        return API.put('/' + id, {
            complete: check,
        })
        .then(res => res.data)
    } catch (error) {
        console.log(error.response);
    }
};

