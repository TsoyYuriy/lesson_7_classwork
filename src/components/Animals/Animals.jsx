import React from "react";
import Card from "../Card/Card";

const Animals = ({ animals, deleteCard }) => {
  return (
    <div className="animals">
      {animals.map((animal) => {
        return (
          <Card
            key={animal.id}
            cardSrc={animal.img}
            name={animal.nameAnimal}
            age={animal.age}
            type={animal.type}
            onClickRemove={() => deleteCard(animal.id)}
          />
        );
      })}
    </div>
  );
};

export default Animals;
