import React, {useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  console.log(plants)
  console.log(search)

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(response => response.json())
      .then(setPlants)
  }, [])

  function handleNewPlantFormSubmit(newPlant) {
    setPlants([...plants, newPlant])
  }

  // PATCH STEP 1- CREATE A FUNCTION TO HANDLE THE UPDATE OF A PLANT
  function handleUpdatePlant(newPlant) {
    const updatedPlants = plants.map((plant) => {
      if (plant.id === newPlant.id) {
        return newPlant
      } else {
        return plant
      }
    })
    setPlants(updatedPlants)
  }

  function removePlant(id) {
    const newPlants = plants.filter((plant) => plant.id !== id)
    setPlants(newPlants)
  }

  const displayedPlants = plants.filter((plants) => plants.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onNewPlantFormSubmit={handleNewPlantFormSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayedPlants} removePlant={removePlant} updatePlant={handleUpdatePlant}/>  {/* PATCH STEP 2 - ADD THE UPDATE FUNCTION TO THE PLANTLIST COMPONENT*/} 
    </main>
  );
}

export default PlantPage;
