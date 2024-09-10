import React from "react";
import { StyledDetail, StyledTable } from "../../../../App.style";
import { Fruit } from "../../../common.types";

function FruitDetail({ fruit }: { fruit: Fruit }) {
  return (
    <StyledDetail>
      <div>
        <h1>{fruit.name}</h1>

        <h2>
          <b>FAMILY: </b>
          {fruit.family}
        </h2>
        <h2>
          <b>ORDER: </b>
          {fruit.order}
        </h2>
        <h2>
          <b>GENUS: </b>
          {fruit.genus}
        </h2>
      </div>
      <StyledTable className="table table-bordered">
        <th colSpan={2} scope="colgroup">
          Nutritions
        </th>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>{fruit.nutritions.calories}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{fruit.nutritions.fat}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{fruit.nutritions.sugar}</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>{fruit.nutritions.carbohydrates}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{fruit.nutritions.protein}</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledDetail>
  );
}

export default FruitDetail;
