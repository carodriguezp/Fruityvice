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
  // const [fruitsList, setFruitsList] = useState<APIResponse>([]);

  // const fetchFruits = async () => {
  //   try {
  //     const allFruits = await getDataFromApi();
  //     setFruitsList(allFruits);
  //   } catch (error) {
  //     console.error("Sorry, there was an error.", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchFruits();
  // }, []);

  return (
    <GeneralListStyled className="general-list" data-testid="list-of-fruits">
      {fruitsList.length > 0 ? (
        fruitsList.map((fruit: Fruit) => (
          <ListGroupItemStyled key={fruit.id}>
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
