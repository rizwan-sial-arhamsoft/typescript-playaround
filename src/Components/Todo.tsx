import React from 'react';
import "./Todo.css";
interface TodoProps{
    items : {ID : number , task : string}[];
    onDelete : (ID : number)=>void;
}

const Todo : React.FC<TodoProps> = props =>{
  return (
    <ul>{props.items.map(todo=><li key={todo.ID}>
       <span> {todo.task}</span>
       <button onClick={props.onDelete.bind(null, todo.ID)}>Delete</button>
        </li>)}</ul>
  );
}

export default Todo;
