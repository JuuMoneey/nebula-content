import './App.css';
import Fruit from './components/Fruit/Fruit';


function App() {
   const json = `{
    "fruits":[
        {
          "name": "Watermelon",
          "season": "summer",
          "color": "Green rine with red meat.",
          "grows": "Florida",
          "inSeason": true,
          "image": ""
        }, 
        { 
          "name": "Honey Dew",
          "season": "Fall",
          "color": "White to Light green skin with green meat",
          "grows": "California", 
          "inSeason": false,
          "image": ""
        },
        {
          "name": "Dragon Fruit",
          "season": "Summer to Fall",
          "color": "bright pink with white meat",
          "grows": "Hawaii", 
          "inSeason": true,
          "image": ""
        },
        {
          "name": "Mango",
          "season": "Summer",
          "color": "redish-greenish skin with golden yellow meat",
          "grows": "Puerto Rico", 
          "inSeason": true,
          "image": ""
        },
        {
          "name": "Peach",
          "season": "Summer",
          "color": "redish-brownish",
          "grows": "South Carolina",
          "inSeason": "true",
          "image": ""
        }
    ]
  }`
  const data = JSON.parse(json);
  console.log(data)

  return (
    <div className="App">
    <h1>Fruit by the World</h1>
    {data.fruits.map(fruit => {
      return <Fruit key={fruit.name} name={fruit.name} 
      season={fruit.season} color={fruit.color} grow={fruit.grows} 
      inSeason={fruit.inSeason}/>
    })}
    </div>
  );
}

export default App;
