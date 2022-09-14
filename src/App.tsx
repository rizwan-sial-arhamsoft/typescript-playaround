import React, {useState} from 'react';
import Todo from './Components/Todo';
import NewTodo from './Components/NewTodo';
import { Task } from './Todo.model';

const App: React.FC =() =>{
  const [toDos, setTodos] = useState<Task[]>([]);
  
  const todoAddHandler = (text:string)=>{
    setTodos(preventtoDos=>[...preventtoDos, {ID : Math.random(), task : text}])
  }
  const todoDeleteHandler = (todoId : number)=>{
    setTodos(prventtoDos=> {
      return prventtoDos.filter(todo=> todoId !==todo.ID)
    })
  }

  return (
    <div className="App">
      <NewTodo onAddTask={todoAddHandler}/>
      <Todo items = {toDos} onDelete={todoDeleteHandler}/>
    </div>
  );
}

export default App;
