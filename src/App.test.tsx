import { render, screen } from "@testing-library/react";
import App from "./App";
import { HashRouter } from "react-router-dom";

test("renders title", () => {
  render(
    <HashRouter>
      <App />
    </HashRouter>
  );
  const titleElement = screen.getByText("Fruityvice");
  expect(titleElement).toBeInTheDocument();
});

//As we are using React Router App was wrapped into HashRouter, so the test must do the same
