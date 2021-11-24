import "./App.css";
import ListofBrewery from "./Components/listofBrewery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Components/Details";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ListofBrewery />} />
          <Route exact path="/details/:id" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
