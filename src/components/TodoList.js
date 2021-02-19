import React from 'react';
import AddTodo from './AddTodo';
import {useState} from 'react'
//import {useSelector} from 'react-redux';

export default function TodoList() {
    //const todos=useSelector((state)=>state.todoReducer)
    const [todos,setTodos]=useState([]);
    fetch("http://localhost:3333/todos")
         .then((res)=>{return res.json()})
         .then((data)=>setTodos(data))
    return(
        <div className="container">
            <AddTodo />
        <div classname="row">
            {
              
              todos.map((item,i)=>
              <div className="alert alert-primary" align="center">
              <h3>{i+1}</h3>
              <h1>{item.title}</h1>
              <h2>{item.description}</h2>
              </div>
              )

            }
        </div>
        </div>
    )
}