import React, {useState} from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import ToDoForm from '../ToDoForm/ToDoForm';

export default function Todo({todos, completeTodos, removeTodos, updateTodos}){
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });
  const submitUpdate = newTodos => {
    updateTodos(edit.id, newTodos)
    setEdit({
      id: null,
      value: ''
    });
  }
//  console.log(todos)

if(edit.id){
  return <ToDoForm onSubmit={submitUpdate}/>
}
  return todos.map((todo, idx) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={idx}>
      <div key={todo.id} onClick={() => completeTodos(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
       <RiCloseCircleLine
       onClick={() => removeTodos(todo.id)}
       className='delete-icon'
       />
       <TiEdit
       onClick={() => setEdit({id: todo.id, value: todo.text})}
       className='edit-icon'
       />
      </div>
    </div>
  ))
}

