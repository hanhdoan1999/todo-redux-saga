import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTasks, deleteTask, postTask, putTaskName, putTaskState } from './actions/index';
import { useState } from 'react';
// import { FaRegTrashAlt, FaRegWindowClose, FaPencilAlt } from "react-icons/fa";
import { FaRegTrashAlt, FaPlus, FaRegWindowClose, FaPencilAlt } from "react-icons/fa";

function App() {

	const dispatch = useDispatch()
	const tasks = useSelector(state => state.tasks.tasks);
	const loading = useSelector(state => state.tasks.loading);
	const error = useSelector(state => state.tasks.error);

	const [taskName, setTaskName] = useState('');
	const [editMode, setEditMode] = useState({
		index: 0,
		value: false
	});
	const [editName, setEditName] = useState(taskName);

	const handleChangeName = (e) => {
		setTaskName(e.target.value)
	}

	const handleAddTask = (e) => {
		e.preventDefault();
		if (taskName === '') {
			alert('Please enter task ! ')
		} else {
			dispatch(postTask(taskName))
			setTaskName('')
		}

	}

	useEffect(() => {
		dispatch(getTasks());
	}, [])


	const handleDeleteTask = (e, task) => {
		e.preventDefault();
		dispatch(deleteTask(task.id));
	}

	const handleChangeTaskName = (e) => {
		e.preventDefault();
		setEditName(e.target.value)
	}

	const handleDoubleClick = (e, task) => {
		e.preventDefault();
		setEditName(task.task)
		setEditMode({ ...editMode, value: true, index: task.id })
	}

	const handleCheck = (e, task) => {
		const check = !(e.target.value === 'true')
		dispatch(putTaskState(task.id, check))
	}

	const handleEditTaskName = (e, task) => {
		e.preventDefault();
		if (editName === '') {
			alert('Please enter task !')
		} else {
			dispatch(putTaskName(task.id, editName))
			setEditName('')
			setEditMode({ ...editMode, value: false, index: task.id })
		}
	}

	return (
		<div className="list-user">
			<h1 style={{textAlign:'center'}}>TO DO</h1>
			<div className="item-user">
			<input type="text" value={taskName} onChange={handleChangeName} placeholder="Add Task"/>
			<FaPlus onClick={handleAddTask} className="add-icon"/>
			</div>
			
			{/* <button onClick={handleDeleteCompleted}>Delete Completed</button> */}
			{loading && <h2>Loading...</h2>}
			{error && !loading && <h2>{error}</h2>}
			{tasks && tasks.map((task) =>
				<div key={task.id} className="item-user">
					{editMode.value && editMode.index == task.id
						?
						<>
							<input type="checkbox" value={task.complete} defaultChecked={task.complete ? true : false} disabled />
							<input type="text" value={editName} onChange={handleChangeTaskName} autoFocus />
							<FaPencilAlt  onClick={(e) => handleEditTaskName(e, task)}/>
							<FaRegWindowClose onClick={() => setEditMode({ ...editMode, value: false, index: task.id })}/>
						</>
						:
						<>
							<input type="checkbox" value={task.complete} defaultChecked={task.complete ? true : false} onChange={(e) => handleCheck(e, task)} />
							<p className={task.complete ? 'line truncate' : 'truncate'} onDoubleClick={(e) => handleDoubleClick(e, task)}>{task.task}</p>
							<FaRegTrashAlt onClick={(e) => handleDeleteTask(e, task)}/>
						</>
					}

				</div>)}

		</div>
	)
}

export default App
