import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, removePlant, updatePlant }) {      // PATCH STEP 3 - ACCEPT THE UPDATE FUNCTION TO THE PLANTLIST COMPONENT
  // console.log(plants)

  const plantList = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} removePlant={removePlant} updatePlant={updatePlant}/>  // PATCH STEP 4 - PASS THE UPDATE FUNCTION TO THE PLANTCARD COMPONENT
})

  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
