import React, { useEffect, useState } from "react";
import Filter from "./components/filters/Filter";
import FruitList from "./FruitList";
import { APIResponse, getDataFromApi } from "../../../../services/api";

function FruitListContainer() {
  const [fruitsList, setFruitsList] = useState<APIResponse>([]);
  const [filterFruit, setFilterFruit] = useState("");
  const [messageError, setMessageError] = useState("");

  const fetchFruits = async () => {
    try {
      const allFruits = await getDataFromApi();
      setFruitsList(allFruits);
    } catch (error) {
      console.error("Sorry, there was an error.", error);
    }
  };

  const handleFilterFruit = (value: string) => {
    setFilterFruit(value);
  };

  const filteredFruits =
    fruitsList &&
    fruitsList.filter((fruit) => {
      return fruit.name.toLowerCase().includes(filterFruit.toLowerCase());
    });

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <Filter handleFilterFruit={handleFilterFruit} />
      <FruitList fruitsList={filteredFruits} />
    </>
  );
}

export default FruitListContainer;
