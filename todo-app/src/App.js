import './App.css';
import React from 'react';
import ToDoForm from './components/ToDoForm/ToDoForm';
import ToDoList from './components/ToDoList/ToDoList';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Erands</h1>
      </header>
      <ToDoList/>
     
    </div>
  );
}

export default App;
