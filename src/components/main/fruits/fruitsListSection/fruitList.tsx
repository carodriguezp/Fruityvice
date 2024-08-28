import { useEffect, useState } from "react";
import { routesPath } from "../../../../App";
import { APIResponse, getDataFromApi } from "../../../../services/api";

import { Link } from "react-router-dom";
import { Fruit } from "../../../common.types";

import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroupItem } from "react-bootstrap";
import { GeneralListStyled } from "../../../../App.style";

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
    <GeneralListStyled className="general-list">
      {fruitsList.length > 0 ? (
        fruitsList.map((fruit: Fruit) => (
          <ListGroupItem className="element-list" key={fruit.id}>
            <Link to={routesPath.fruitsId} key={fruit.id}>
              <h2> {fruit.name} </h2>
              {/* <h3>
                <b>Family: </b>
                {fruit.family}
              </h3> */}
            </Link>
          </ListGroupItem>
        ))
      ) : (
        <p>No fruits available.</p>
      )}
    </GeneralListStyled>
  );
}

export default FruitList;
