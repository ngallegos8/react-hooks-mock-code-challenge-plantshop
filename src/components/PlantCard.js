import React, { useState } from "react";

function PlantCard({ plant, removePlant }) {
  const [stock, setStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    removePlant(plant.id)
  }

  function handlePriceChange(e) {
    setPrice(e.target.value)
  }

  function handlePriceSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: price})
    })
    handlePriceChange()
  }

  return (
    <li className="card">
      <img src={plant.image} alt={"plant name"} />
      <h4>{plant.name}</h4>
      <p>
        Price: {plant.price}
        <button onClick={() => setPrice(handlePriceSubmit)} className="edit-plant-price">Edit price</button>
      </p>
      {stock ? (
        <button onClick={() => setStock(false)} className="primary" >In Stock</button>
      ) : (
        <button onClick={() => setStock(true)} className="secondary" >Out of Stock</button>
      )}
      <button onClick={handleDelete} className="remove-plant">Delete Plant</button>
    </li>
  );
}

export default PlantCard;