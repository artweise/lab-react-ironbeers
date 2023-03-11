import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

const BeerDetails = () => {
  const { beerId } = useParams();
  console.log("beerId", beerId);
  const [foundBeer, setFoundBeer] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setFoundBeer(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [beerId]);

  // another syntax

  //   useEffect(() => {
  //     axios
  //       .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
  //       .then((response) => {
  //         console.log(response.data);
  //         setFoundBeer(response.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, [beerId]);

  return (
    <>
      <div className="image-ctn">
        <img src={foundBeer.image_url} alt="" />
      </div>
      <div className="title-ctn">
        <h1 className="title">{foundBeer.name}</h1>
        <h1 className="level">{foundBeer.attenuation_level}</h1>
      </div>
      <div className="tagline-ctn">
        <h4 className="tagline">{foundBeer.tagline}</h4>
        <h5 className="first-brewed">
          <b>{foundBeer.first_brewed}</b>
        </h5>
      </div>
      <div className="description">
        <p>{foundBeer.description}</p>
        <h5>{foundBeer.contributed_by}</h5>
      </div>
    </>
  );
};

export default BeerDetails;
