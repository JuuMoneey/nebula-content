import React, {useState} from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import Todo from "../ToDos/ToDos";


export default function ToDoList(){
    const [todos, setTodos] = useState([]);
    //array, function
    const addToDo = todo => {
        // add to list
        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }
    
    const removeTodos = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id);
      setTodos(removeArr)
    }

    const completeTodos = id => {
        let updatedTodos = todos.map(todo=> {
          if(todo.id === id){
            todo.isComplete = !todo.isComplete;
          }
          return todo;
        })
        setTodos(updatedTodos);
      }

      const ascendingTodos = () => {
        const sortedTodos = [...todos].sort((a, b) => a.text.localeCompare(b.text));
        setTodos(sortedTodos);
      };
    
      const descendingTodos = () => {
        const sortedTodos = [...todos].sort((a, b) => b.text.localeCompare(a.text));
        setTodos(sortedTodos);
      };

      const updateTodos = (todoId, newValue) => {
        // let updated = todos.map(item => (item.id === todoId ? newValue : item))
        // setTodos(updated)
        // or
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      }


    return (
        <div>
            <button className="ascending" onClick={ascendingTodos}>Ascending</button>
            <button className="descending" onClick={descendingTodos}>Descending</button>
            <h1>What needs to be done today?</h1>
            <ToDoForm onSubmit={addToDo}/>
            <Todo todos={todos} completeTodos={completeTodos} removeTodos={removeTodos} updateTodos={updateTodos}/>
        </div>
    );
}

