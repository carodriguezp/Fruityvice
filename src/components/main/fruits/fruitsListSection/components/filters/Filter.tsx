import Button from "react-bootstrap/esm/Button";
import FormControl from "react-bootstrap/esm/FormControl";
import FormLabel from "react-bootstrap/esm/FormLabel";
import { StyledForm, StyledFormGroup } from "../../../../../../App.style";

function Filter() {
  return (
    <StyledForm>
      <StyledFormGroup controlId="formInlineName">
        <FormLabel>Name</FormLabel>{" "}
        <FormControl type="text" placeholder="Strawberry" />
      </StyledFormGroup>{" "}
      <Button type="submit">Find fruit</Button>
    </StyledForm>
  );
}

export default Filter;
