import FormControl from "react-bootstrap/FormControl";
import FormLabel from "react-bootstrap/FormLabel";
import { StyledForm, StyledFormGroup } from "../../../../../../App.style";
import { useEffect, useState } from "react";

function Filter(props: { handleFilterFruit: (x: string) => void }) {
  const { handleFilterFruit } = props;

  const [value, setValue] = useState(""); //es filterfruits

  useEffect(() => {
    handleFilterFruit(value);
  }, [handleFilterFruit, value]);

  return (
    <StyledForm>
      <StyledFormGroup>
        <FormLabel>Name</FormLabel>{" "}
        <FormControl
          data-testid="input"
          type="text"
          placeholder="Strawberry"
          value={value}
          onChange={(ev) => setValue(ev.target.value)}
        />
        <FormControl.Feedback />
      </StyledFormGroup>{" "}
    </StyledForm>
  );
}

export default Filter;
