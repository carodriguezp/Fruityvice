import { useEffect, useState } from "react";
import { routesPath } from "../../../../App";
import { APIResponse, getDataFromApi } from "../../../../services/api";

import { Link } from "react-router-dom";
import { Fruit } from "../../../common.types";

function FruitList() {
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
    <div>
      <h2>LISTA DE FRUTAS</h2>
      <div>FruitList component </div>
      <ul>
        {fruitsList.length > 0 ? (
          fruitsList.map((fruit: Fruit) => (
            <li key={fruit.id}>
              <Link to={routesPath.fruitsId}>
                <article>
                  <h3>Name: {fruit.name}</h3>
                  <p>
                    <b>Family: </b>
                    {fruit.family}
                  </p>
                </article>
              </Link>
            </li>
          ))
        ) : (
          <p>No fruits available.</p>
        )}
      </ul>
    </div>
  );
}

export default FruitList;
