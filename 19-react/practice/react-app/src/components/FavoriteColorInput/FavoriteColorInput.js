import React, {useState} from 'react';


export default function inputColor(){
  const[color, setColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${color} is my favorite color`)
  }
    return (
     <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <input type='text' value={color} onChange={(e)=> setColor(e.target.value)}></input>
        <input type='submit'></input>
     </form>
    );
}