import { routesPath } from "../../../../App";
import { APIResponse } from "../../../../services/api";
import { Fruit } from "../../../common.types";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  GeneralListStyled,
  ListGroupItemStyled,
  StyledLink,
} from "../../../../App.style";

function FruitList({ fruitsList }: { fruitsList: APIResponse }) {
  return (
    <GeneralListStyled className="general-list" data-testid="list-of-fruits">
      {fruitsList.length > 0 ? (
        fruitsList.map((fruit: Fruit) => (
          <ListGroupItemStyled
            key={fruit.id}
            data-testid={fruit.name.toLowerCase()}
          >
            <StyledLink to={routesPath.fruitsId} key={fruit.id}>
              <h2> {fruit.name} </h2>
            </StyledLink>
          </ListGroupItemStyled>
        ))
      ) : (
        <p data-testid="error-message">No fruits available.</p>
      )}
    </GeneralListStyled>
  );
}

export default FruitList;
