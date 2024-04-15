import React from "react";
import { AddFormAnimals } from "../../components/AddFormAnimals/AddFormAnimals";
import Animals from "../../components/Animals/Animals";
import { useState } from "react";
import './animals-container.css'

const getRandomKey = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

    
export const AnimalsContainer = () => {

  const [animals, setAnimals] = useState([
    {
      id: getRandomKey(),
      nameAnimal: "Smoky",
      age: 8,
      type: "cat",
      img: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=800",
    },

    {
      id: getRandomKey(),
      nameAnimal: "Baksi",
      age: 4,
      type: "dog",
      img: "https://images.pexels.com/photos/18745826/pexels-photo-18745826/free-photo-of-small-white-dog-in-a-camo-vest-sitting-in-front-of-a-bowl-on-the-grass.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ]);

  const [item, setItem] = useState({
    id: getRandomKey(),
    nameAnimal: "",
    age: "",
    type: "",
    img: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setItem((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnimals([item, ...animals]);
  };

  const deleteCard = (id) => {
    const copyAnimals = animals.filter((animal) => animal.id !== id);
    setAnimals(copyAnimals);
  };

  const countClasses = ['green']

  if (animals.length <= 1) {
    countClasses.push('red')
  }


  return (
    <div>

      <p className={countClasses.join(' ')}>{animals.length}</p>

      <AddFormAnimals handleSubmit={handleSubmit} handleInput={handleInput} />

      <Animals animals={animals} deleteCard={deleteCard} />
    </div>
  );
};
