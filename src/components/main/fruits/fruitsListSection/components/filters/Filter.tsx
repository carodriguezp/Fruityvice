import FormControl from "react-bootstrap/esm/FormControl";
import FormLabel from "react-bootstrap/esm/FormLabel";
import { StyledForm, StyledFormGroup } from "../../../../../../App.style";

function Filter(props: {
  filterFruit: string;
  handleFilterFruit: (x: string) => void;
  hasFiltered: boolean;
}) {
  const { filterFruit, handleFilterFruit, hasFiltered } = props;

  return (
    <StyledForm>
      <StyledFormGroup>
        <FormLabel>Name</FormLabel>{" "}
        <FormControl
          type="text"
          placeholder="Strawberry"
          value={filterFruit}
          onChange={(ev) => handleFilterFruit(ev.target.value)}
        />
        <FormControl.Feedback />
      </StyledFormGroup>{" "}
      {!hasFiltered && filterFruit && (
        <p data-testid="error-message">
          There is no fruit matching "{filterFruit}"
        </p>
      )}
    </StyledForm>
  );
}

export default Filter;
