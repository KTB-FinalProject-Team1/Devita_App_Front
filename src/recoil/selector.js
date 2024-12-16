// recoil/selectors.js
import { selector } from 'recoil';
import { todosState, categoriesState } from './atoms';
import  getTodos  from '../api/GetToDo';
import  getCategories from '../api/GetCategories';

export const todosSelector = selector({
    key: 'todosSelector',
    get: async () => {
        const response = await getTodos('monthly');
        return response;
    },
});

export const categoriesSelector = selector({
    key: 'categoriesSelector',
    get: async () => {
        const response = await getCategories();
        return response;
    },
});
