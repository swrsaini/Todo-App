import {atom} from 'recoil'

export const todoList = atom({
    key: 'todoList',
    default: [{}]
})