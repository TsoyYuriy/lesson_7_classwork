import React from "react";

export const AddFormAnimals = ({ handleSubmit, handleInput }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="nameAnimal"
        onChange={handleInput}
      />
      <input type="text" placeholder="Age" name="age" onChange={handleInput} />
      <input
        type="text"
        placeholder="Type"
        name="type"
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="URL PIC"
        name="img"
        onChange={handleInput}
      />

      <button className="btn-add">Add</button>
    </form>
  );
};
