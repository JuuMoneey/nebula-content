import React, {useState} from 'react';
import './App.css';
import About from './components/About/About';
import Hobbies from './components/Hobbies/Hobbies';
import Goals from './components/Goals/Goals';


function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    aboutMe: '',
    hobbies: '',
    goals: '',
  }) 
  const [user, setUser] = useState([
    {firstName: '',
    aboutMe: '',
    hobbies: '',
    goals: '',}
  ])
  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name] : e.target.value
    })
  }
  function handleSubmit(e){
    e.preventDefault()
    setUser([formData, ...user])
    setFormData({
    firstName: '',
    aboutMe: '',
    hobbies: '',
    goals: '',
    })
  }
  return (
    <div className="App">
        <h1>This is my first React App</h1>
    <form onSubmit={handleSubmit}>
        <label>Enter Name
        <input type='text' name='firstName' value={formData.firstName} onChange={handleChange}/>
        </label>
        <label>Enter About Me
        <input type='text' name='aboutMe' value={formData.aboutMe} onChange={handleChange}/>
        </label>
        <label>Enter Hobbies
        <input type='text' name='hobbies' value={formData.hobbies} onChange={handleChange}/>
        </label>
        <label>Enter Goals
        <input type='text' name='goals' value={formData.goals} onChange={handleChange}/>
        </label>
        <button>Submit</button>
     </form>
        <About firstName = {user[0].firstName} aboutMe = {user[0].aboutMe}/>
        <Hobbies hobbies = {user[0].hobbies}/>
        <Goals goals = {user[0].goals}/>
    </div>
  );
}

export default App;