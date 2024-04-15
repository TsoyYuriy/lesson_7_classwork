import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

const getRandomKey = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

function App() {
  const [animals, setAnimals] = useState([
    {
      id: getRandomKey(),
      name: "Smoky",
      age: 8,
      type: "cat",
      img: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    {
      id: getRandomKey(),
      name: "Baksi",
      age: 4,
      type: "dog",
      img: "https://images.pexels.com/photos/18745826/pexels-photo-18745826/free-photo-of-small-white-dog-in-a-camo-vest-sitting-in-front-of-a-bowl-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const obj = {
      id: getRandomKey(),
      name, // это значение стейта
      age,
      type,
      img: url,
    }

    const copyAnimals = [...animals];
    copyAnimals.push(obj)
    setAnimals(copyAnimals);
    
  }



  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="URL PIC"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button className="btn-add">Add</button>
      </form>

      <div className="animals">
        {animals.map((animal) => {
          return (
            <Card
              key={animal.id}
              cardSrc={animal.img}
              name={animal.name}
              age={animal.age}
              type={animal.type}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
