import {atom} from 'recoil'

export const todoList = atom({
    key: 'todoList',
    default: [{}]
})

export const countAtom = atom({
    key: 'count',
    default: 0
})