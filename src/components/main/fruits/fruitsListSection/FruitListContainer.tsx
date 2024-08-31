import React, { useEffect, useState } from "react";
import Filter from "./components/filters/Filter";
import FruitList from "./FruitList";
import { APIResponse, getDataFromApi } from "../../../../services/api";

function FruitListContainer() {
  const [fruitsList, setFruitsList] = useState<APIResponse>([]);

  const fetchFruits = async () => {
    try {
      const allFruits = await getDataFromApi();
      setFruitsList(allFruits);
    } catch (error) {
      console.error("Sorry, there was an error.", error);
    }
  };

  useEffect(() => {
    fetchFruits();
  }, []);

  return (
    <>
      <Filter />
      <FruitList fruitsList={fruitsList} />
    </>
  );
}

export default FruitListContainer;
