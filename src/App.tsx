import { Route, Routes } from "react-router-dom";
import { Container } from "./App.style";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";

function App() {
  return (
    <Container>
      <Header />

      <Routes>
        <Route path="/" element={<div>RandomFruit component</div>} />
        <Route path="/fruits" element={<div>FruitList component </div>} />
        <Route path="/fruits/:id" element={<div>FruitDetail component</div>} />
      </Routes>
    </Container>
  );
}

export default App;
