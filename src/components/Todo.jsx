import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {v4 as uuid} from "uuid";
import { addTodo, deleteTodo, toggleTodo } from '../Redux/actions';
import { ADD_TODO } from '../Redux/actionType';

const Todo = () => {
    const [text, setText] = useState("");
    const todo = useSelector(state => state.todo)
    const dispatch = useDispatch()
    console.log(todo);

const handleAdd = () => {
    const payload = {
        title: text,
        id: uuid(),
        status: false
    }
    dispatch(addTodo(payload))
}

const handleStatus = (id) => {
    dispatch(toggleTodo(id))
}

const handleDelete = (id) => {
    dispatch(deleteTodo(id))
}
  return (
    <div>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} placeholder='Enter Todo'/>
        <button onClick={handleAdd}>Add Todo</button>
        {todo.map((item) => (
            <>
            <div>{item.title}</div>
            <div>{`${item.status}`}</div>
            <button onClick={() => handleStatus(item.id)}>Toggle Status</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
        ))}
    </div>
  )
}

export default Todo
