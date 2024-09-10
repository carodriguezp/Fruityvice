import React, { useEffect, useState } from "react";
import { matchPath, useLocation } from "react-router-dom";

import FruitDetail from "./FruitDetail";

import { APIResponse, getDataByIdFromApi } from "../../../../services/api";
import { Fruit } from "../../../common.types";

function FruitDetailContainer() {
  const [fruit, setFruit] = useState<Fruit>();

  ////TO GET ID/// From URL

  const { pathname } = useLocation(); //pathname is the property of the path info, we do destructuring

  const getIdFromURL = () => {
    const routeData = matchPath("/fruits/:id", pathname); //compares the pathname to the path pattern /fruits/:id. Here, :id is a dynamic path parameter

    //STEP 2 we get the fruit id
    const idFruit = routeData?.params.id; // "?"" means: validate object before accesing, equivalent to a && a.b.c
    console.log("idFruit", idFruit);
    return Number(idFruit);
  };

  ////TO GET FRUIT//// With Id from URL

  const fetchFruitById = async () => {
    try {
      const id = getIdFromURL();
      const fruitById = await getDataByIdFromApi(id);
      setFruit(fruitById);
    } catch (error) {
      console.error("Sorry, there was an error.", error);
    }
  };

  useEffect(() => {
    fetchFruitById();
  }, []);
  return fruit ? (
    <>
      <FruitDetail fruit={fruit} />
    </>
  ) : (
    <p>Loading</p>
  );
}

export default FruitDetailContainer;
