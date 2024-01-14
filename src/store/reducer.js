import { SET_TODO_INPUT, ADD_TODO, DELETE_TODO } from './constants'
const initState = {
    todoInput: '',
    todos: []

}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case ADD_TODO:
            return {

                todos: [...state.todos, action.payload],
                todoInput: ''
            }
        case DELETE_TODO:
            let newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)

            return {
                ...state,
                todos: newTodos
            }

    }
}

export default reducer
export { initState }