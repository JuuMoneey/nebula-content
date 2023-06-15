import React, { useState, useEffect } from 'react';
import './App.css';
import DogCard from './Components/DogCard/DogCard';
import Search from './Components/Search/Search'

function App() {
  const [dogs, setDogs] = useState([]);
  const [options, setOptions] = useState([]);
  const [dropValue, setDropValue] = useState('');
 

  // empty array = component mounted
  useEffect(() => {
    fetch(`https://dog.ceo/api/breeds/list/all`)
  .then(res => res.json())
  .then(res => setOptions(Object.keys(res.message)))

    fetch(`https://dog.ceo/api/breed/sheepdog/images`)
    // fetch the data
    .then(res => res.json())
    
    // convert the data from json into an object
    .then(res => setDogs(res.message))
    // return that object
  },[])


  const handleChange = (e) => {
    e.preventDefault();
    setDropValue(e.target.value);
    fetch(`https://dog.ceo/api/breed/${e.target.value}/images`)
      .then(res => res.json())
      .then(res => setDogs(res.message))
  }

// console.log(options)
// log the response 


return (
    <div className="App">
      <h1>Dog API</h1>
      <Search handleChange={handleChange} options={options} dropValue={dropValue}/>
     <div>
      {dogs.map(dog => <DogCard key={dog} dog={dog}/>)}
      
     </div>
    </div>
  );
}

export default App;

