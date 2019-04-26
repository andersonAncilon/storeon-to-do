export default (store) => {
	store.on('@init', () => ({ toDo: [] }));

	store.on('toDo/insert', ({ toDo }, entry) => {
		return { toDo: toDo.concat([entry]) };
	});

	store.on('toDo/changeStatus', ({ toDo }, entry) => {
		console.log(toDo, entry);
		return {
			...toDo,
			toDo: toDo.map((task) => {
				if (task.id === entry.id) {
					task.status = !task.status;
				}
				return task;
			})
		};
	});


	store.on('toDo/delete', ({ toDo }, entry) => {
		let index = toDo.indexOf(entry);
		toDo.splice(index, 1);
		return { toDo: toDo }
	});
};
