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
