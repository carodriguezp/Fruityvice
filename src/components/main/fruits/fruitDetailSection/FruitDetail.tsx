import React from "react";
import { StyledDetail, StyledTable } from "../../../../App.style";

function FruitDetail() {
  return (
    <StyledDetail>
      <div>
        <h1>NOMBRE DE LA FRUTA</h1>

        <h2>
          <b>FAMILY: </b>FAMILIIIIIIIIIIIIIIIIA
        </h2>
        <h2>
          <b>ORDER: </b>ORDEEEEEEEEN
        </h2>
        <h2>
          <b>GENUS: </b>GENEROOOOOOOOO
        </h2>
      </div>
      <StyledTable className="table table-bordered">
        <th colSpan={2} scope="colgroup">
          Nutritions
        </th>
        <tbody>
          <tr>
            <td>Calories</td>
            <td>NUMEROOOOOOO</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>NUMEROOOOOOO</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>NUMEROOOOOOO</td>
          </tr>
          <tr>
            <td>Carbohydrates</td>
            <td>NUMEROOOOOOO</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>NUMEROOOOOOO</td>
          </tr>
        </tbody>
      </StyledTable>
    </StyledDetail>
  );
}

export default FruitDetail;
