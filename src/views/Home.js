import React from 'react';
import InsertForm from '../components/InsertForm';
import ToDo from '../components/ToDo/ToDo';

const Home = ({ props }) => {
	return (
		<div className='mt-5'>
			<h2 className='display-4 text-primary mb-5 text-center'>To do list</h2>
			<InsertForm />
			<ToDo />
		</div>
	);
};

export default Home;
