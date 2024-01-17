import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, removePlant }) {
  // console.log(plants)

  const plantList = plants.map(plant => {
    return <PlantCard key={plant.id} plant={plant} removePlant={removePlant}/>
})



  return (
    <ul className="cards">{plantList}</ul>
  );
}

export default PlantList;
