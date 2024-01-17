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

  function removePlant(id) {
    const newPlants = plants.filter((plant) => plant.id !== id)
    setPlants(newPlants)
  }

  const displayedPlants = plants.filter((plants) => plants.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm onNewPlantFormSubmit={handleNewPlantFormSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={displayedPlants} removePlant={removePlant}/>
    </main>
  );
}

export default PlantPage;
