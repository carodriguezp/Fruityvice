import React from "react";
import Filter from "./components/filters/Filter";
import FruitList from "./FruitList";

function FruitListContainer() {
  return (
    <>
      <Filter />
      <FruitList />
    </>
  );
}

export default FruitListContainer;
