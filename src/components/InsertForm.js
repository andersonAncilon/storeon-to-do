import React from 'react';

import useStoreon from 'storeon/react';

const InsertForm = ({ props }) => {
	const { toDo, dispatch } = useStoreon('toDo');

	const inputRef = React.createRef();

	function insertTask() {
		let value = inputRef.current.value;

		if (value !== '') {
			const task = { id: (toDo.length * Math.random()).toFixed(3), task: value };
			dispatch('toDo/insert', task);
			inputRef.current.value = '';
		} else {
			alert('Please, type something');
		}
	}

	return (
		<div className='col-md-8 mx-auto'>
			<div className='input-group input-group-lg'>
				<div className='input-group-prepend'>
					<span className='input-group-text' id='inputGroup-sizing-lg'>
						Task
					</span>
				</div>
				<input
					type='text'
					className='form-control'
					aria-label='Sizing example input'
					aria-describedby='inputGroup-sizing-lg'
					ref={inputRef}
				/>
				<button className='btn btn-success btn-lg ml-1' onClick={() => insertTask()}>
					Insert
				</button>
			</div>
		</div>
	);
};

export default InsertForm;
