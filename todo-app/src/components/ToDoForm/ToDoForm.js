// import React, {useState} from "react";
import React, {useState, useEffect, useRef} from "react";
// specifically targeting what we want to pull from the files


export default function ToDoForm(props){
    const [input, setInput] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random()*1000000),
            text: input
        });

        setInput('');
    }

    const handleChange = (e) => {
        setInput(e.target.value)
    }
    
    const inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus();
    })

    return (
        <form className="toDo-Form" onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
            />
        <button className="todo-button">Add ToDo</button>
        </form>
    );

}

