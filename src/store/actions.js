import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from './constants'

const setTodo = (payload) => {
    return {
        type: SET_TODO_INPUT,
        payload
    }
}

const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}

export { setTodo, deleteTodo, addTodo }