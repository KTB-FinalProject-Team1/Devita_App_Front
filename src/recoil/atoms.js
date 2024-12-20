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


export const postsState = atom({
    key: 'postsState', // 고유 키
    default: [],       // 초기값은 빈 배열
});

export const friendPostsState = atom({
    key: 'friendPostsState',
    default: [],
});
