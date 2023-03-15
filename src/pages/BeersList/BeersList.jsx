import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import "./style.css";

const BeersList = () => {
  const [allBeers, setAllBeers] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://ih-beers-api2.herokuapp.com/beers"
        );
        setAllBeers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  // another syntax

  // useEffect(() => {
  //   axios
  //     .get("https://ih-beers-api2.herokuapp.com/beers")
  //     .then((response) => {
  //       console.log(response.data);
  //       setAllBeers(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // search --> everytime user types in, the API should call
  // it means useEffect with a state inside the dependency array

  useEffect(() => {
    const searchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${userInput}`
        );
        setAllBeers(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    searchData();
  }, [userInput]);

  // another syntax

  // useEffect(() => {
  //   // console.log("useEffect is activated");
  //   axios
  //     .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${userInput}`)
  //     .then((response) => {
  //       // console.log(response.data);
  //       setAllBeers(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [userInput]);

  return (
    <div>
      {/* one way to put the navbar in this lab on every page, which need it */}
      {/* <Link to="/">
        <img
          className="banner"
          src="https://user-images.githubusercontent.com/23629340/40707029-cb2fce12-63ef-11e8-939c-f673ff3b965d.png"
          alt=""
        />
      </Link> */}
      <Header />
      <input
        className="search"
        placeholder="search"
        type="text"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      {allBeers.length === 0 && <h1 className="loading">Loading ...</h1>}
      {allBeers.length > 0 &&
        allBeers.map((individualBeer, index) => (
          <div key={index} className="one-beer-ctn">
            <div className="image-ctn">
              <Link to={`/beers/${individualBeer._id}`}>
                <img src={individualBeer.image_url} alt="" />
              </Link>
            </div>
            <div className="content-ctn">
              <h2>{individualBeer.name}</h2>
              <h4>{individualBeer.tagline}</h4>
              <p>
                contributed by: <b>{individualBeer.contributed_by}</b>
              </p>
              <Link to={`/beers/${individualBeer._id}`}>more details</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default BeersList;
