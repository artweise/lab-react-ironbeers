import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BeersList = () => {
  const [allBeers, setAllBeers] = useState([]);

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

  return (
    <div>
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
