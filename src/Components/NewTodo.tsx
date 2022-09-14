import React, {useRef} from 'react';
import "./NewTodo.css";
type TodoProps = {
    onAddTask : (todoText : string)=>void;
}
const NewTodo : React.FC<TodoProps> =props =>{
    const taskRef = useRef<HTMLInputElement>(null);
    const todoHandler =(event : React.FormEvent)=>{
        event.preventDefault();
        const task = taskRef.current!.value;
        props.onAddTask(task)
    }
 
  return (
   <form onSubmit={todoHandler}>
    <div>
        <label htmlFor="todo-text">Task</label>
        <input type="text" id = "todo-text" ref= {taskRef}/>
    </div>
    <button type='submit'>Add Task</button>
   </form>
  );
}

export default NewTodo;
