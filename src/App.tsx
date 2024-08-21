import { Route, Routes } from "react-router-dom";
import { Container } from "./App.style";

function App() {
  return (
    <Container>
      <h1>Fruityvice</h1>

      <Routes>
        <Route path="/" element={<div>RandomFruit component</div>} />
        <Route path="/fruits" element={<div>FruitList component</div>} />
        <Route path="/fruits/:id" element={<div>FruitDetail component</div>} />
      </Routes>
    </Container>
  );
}

export default App;
