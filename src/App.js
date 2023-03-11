import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import BeersList from "./pages/BeersList/BeersList";
import BeerDetails from "./pages/BeerDetails/BeerDetails";
import RandomBeer from "./pages/RandomBeer/RandomBeer";
import NewBeer from "./pages/NewBeer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </>

      <>
        <Header />
        <Routes>
          <Route path="/beers" element={<BeersList />} />
          <Route path="/beers/:beerId" element={<BeerDetails />} />
          <Route path="/beers/random" element={<RandomBeer />} />
          <Route path="/beers/new-beer" element={<NewBeer />} />
          {/* <Route path="*" element={NotFound} /> */}
        </Routes>
      </>
    </div>
  );
};

export default App;
