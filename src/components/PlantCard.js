import React, { useState } from "react";

function PlantCard({ plant, removePlant }) {
  const [stock, setStock] = useState(true)

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    removePlant(plant.id)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {stock ? (
        <button onClick={() => setStock(false)} className="primary" >In Stock</button>
      ) : (
        <button onClick={() => setStock(true)} className="secondary" >Out of Stock</button>
      )}
      <button onClick={handleDelete} className="emoji-button delete">🗑</button>
    </li>
  );
}

export default PlantCard;