import React from 'react';

import './style.css';

const Task = ({ props, checkTask, deleteTask }) => {
	function handleTask() {
		checkTask(props);
	}

	function handleDeleteTask() {
		deleteTask(props);
	}

	return (
		<li
			className='list-group-item list-group-item-action'
			id='list-home-list'
			data-toggle='list'
			aria-controls='home'
		>
			<strong style={{ fontSize: '25px', textDecoration: props.status ? 'line-through' : 'none' }}>
				{props.task}
			</strong>
			<button className='float-right btn btn-danger ml-2' onClick={() => handleDeleteTask() }>
				<i style={{ fontSize: '20px' }} className='fas fa-times' />
			</button>
			<button className={`float-right btn ${props.status ? 'btn-warning' : 'btn-success'}`} onClick={() => handleTask()}>
				<i style={{ fontSize: '20px' }} className={props.status ? 'fas fa-undo uncheck-effect text-white' : 'fas fa-check check-effect text-white'} />
			</button>
		</li>
	);
};

export default Task;
