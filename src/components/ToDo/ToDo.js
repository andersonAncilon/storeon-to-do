import React from 'react';

import Task from './Task';

import useStoreon from 'storeon/react';

const ToDo = ({ props }) => {
	const { toDo, dispatch } = useStoreon('toDo');

	function handleTask(task) {
		dispatch('toDo/changeStatus', task);
	}

	return (
		<div className='col-md-12 mx-auto mt-5 jumbotron'>
			<div className='list-group '>
				{toDo.length > 0 ? (
					toDo.map((task) => (
						<Task
							key={task.id}
							props={task}
							checkTask={(value) => handleTask(value)}
							deleteTask={(value) => dispatch('toDo/delete', value)}
						/>
					))
				) : (
					<h2 className='text-center'>Empty</h2>
				)}
			</div>
		</div>
	);
};

export default ToDo;
