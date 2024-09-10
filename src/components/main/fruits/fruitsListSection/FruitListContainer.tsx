import React, { useEffect, useState } from "react";
import Filter from "./components/filters/Filter";
import FruitList from "./FruitList";
import { APIResponse, getDataFromApi } from "../../../../services/api";

function FruitListContainer() {
  const [fruitsList, setFruitsList] = useState<APIResponse>([]);
  const [userInput, setUserInput] = useState("");

  const [filteredFruits, setFilteredFruits] = useState<APIResponse>([]);

  const fetchFruits = async () => {
    try {
      const allFruits = await getDataFromApi();
      setFruitsList(allFruits);
    } catch (error) {
      console.error("Sorry, there was an error.", error);
    }
  };

  const handleFilterFruit = (value: string) => {
    setUserInput(value);
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  useEffect(() => {
    if (fruitsList) {
      const filteredResult = fruitsList.filter((fruit) => {
        return fruit.name.toLowerCase().includes(userInput.toLowerCase());
      });
      setFilteredFruits(filteredResult);
    }
  }, [fruitsList, userInput]);

  return (
    <>
      <Filter handleFilterFruit={handleFilterFruit} />
      <FruitList fruitsList={filteredFruits} />
    </>
  );
}

export default FruitListContainer;
