import React from 'react';
import './App.css';
import Person from './components/person/person';

function App() {
  const json = `{
    "employees":[
        {
          "name": "Micheal Scott",
          "username": "M-Scott",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "manager",
          "age": 31
        }, 
        { 
          "name": "Dwight Schrute",
          "username": "D-Schrute",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "assistant to the regional manager",
          "age": 31
        },
        {
          "name": "James Halpert",
          "username": "J-Halpert",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": false,
          "position": "Sales Lead",
          "age": 31
        },
        {
          "name": "Toby Flenderson",
          "username": "T-Flenz",
          "city": "Scranton",
          "state": "Pennsylvania", 
          "online": true,
          "position": "HR",
          "age": 31
        }
    ]
  }`
  const data = JSON.parse(json);
  console.log(data)
  
  return (
    <div className="App">
      <h1>Office Characters</h1>
      {data.employees.map(employee => {
        return <Person key={employee.username} name={employee.name} age={employee.age}/>
      })}
    </div>
  );
}

export default App;
