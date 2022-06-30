import { ADD_TODO, DEC_COUNTER, DELETE_TODO, INC_COUNTER, TOGGLE_TODO } from "./actionType"

export const incCounter = (payload) => {
    return {
        type: INC_COUNTER,
        payload
    }
}

export const decCounter = (payload) => {
    return {
        type: DEC_COUNTER,
        payload
    }
}

export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }
}

export const toggleTodo = (payload) => {
    return {
        type: TOGGLE_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }
}