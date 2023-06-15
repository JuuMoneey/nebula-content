import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [memes, setMemes] = useState([])
  const [searchMeme, setSearchMeme] = useState('')

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
    .then(res => res.json())
    .then(res => setMemes(res.data.memes))
  })

  function onChange(e) {
    e.preventDefault()
    setSearchMeme(e.target.value)
  }
  const filteredMemes = memes.filter(meme => meme.name.includes(searchMeme))
  console.log(memes)

  return (
    <div className="App">
    <h1>Memes</h1>
    {filteredMemes.map(meme => <div key={meme.name}>{meme.name}</div>)}
    </div>
  );
}

export default App;
