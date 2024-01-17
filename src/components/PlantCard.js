import React, { useState } from "react";

function PlantCard({ plant, removePlant, updatePlant }) {
  const [stock, setStock] = useState(true)
  const [price, setPrice] = useState(plant.price)

  function handleDelete() {
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    removePlant(plant.id)
  }

  // PATCH STEP 5 - CREATE A FUNCTION TO HANDLE THE SUBMISSION OF THE PRICE UPDATE
  function handlePriceSubmit(e) {
    e.preventDefault()
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({price: price})
    })
    .then(response => response.json())
    .then(updatePlant)
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>
        Price: {plant.price}
      </p>
      {stock ? (
        <button onClick={() => setStock(false)} className="primary" >In Stock</button>
      ) : (
        <button onClick={() => setStock(true)} className="secondary" >Out of Stock</button>
      )}
      <button onClick={handleDelete} className="remove-plant">Delete Plant</button>
      {/* PATCH STEP 6 - ADD THE FORM TO THE PLANTCARD COMPONENT */}
      <form onSubmit={handlePriceSubmit}>
        <input type="number" name="price" placeholder="Price" value={price} onChange={(e) => setPrice(parseFloat(e.target.value))}/>
        <button>Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;