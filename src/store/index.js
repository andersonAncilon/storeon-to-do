import createStore from 'storeon';

import toDo from './reducers/toDo';

export const store = createStore([toDo]);
