// recoil/atoms.js
import { atom } from 'recoil';

export const todosState = atom({
    key: 'todosState', // Unique ID
    default: [],       // 초기값
});

export const categoriesState = atom({
    key: 'categoriesState',
    default: [],
});
