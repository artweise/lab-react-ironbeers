import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import "./style.css";

const NewBeer = () => {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tipps, setTipps] = useState("");
  const [attenuation, setAttenuation] = useState("");
  const [contributed, setContributed] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bodyToPost = {
      name,
      tagline,
      description,
      firstBrewed,
      tipps,
      attenuation_level: Number(attenuation),
      contributed,
    };
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", bodyToPost)
      .then((response) => {
        console.log(response.data);
        navigate("/beers");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <div className="form">
        <form action="" onSubmit={handleSubmit}>
          <label className="label" htmlFor="">
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="label" htmlFor="">
            Tagline
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
            />
          </label>
          <label className="label description" htmlFor="">
            Description
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label className="label" htmlFor="">
            First Brewed
            <input
              type="text"
              value={firstBrewed}
              onChange={(e) => setFirstBrewed(e.target.value)}
            />
          </label>
          <label className="label" htmlFor="">
            Brewers Tips
            <input
              type="text"
              value={tipps}
              onChange={(e) => setTipps(e.target.value)}
            />
          </label>
          <label className="label" htmlFor="">
            Attenuation Level
            <input
              type="number"
              value={attenuation}
              onChange={(e) => setAttenuation(e.target.value)}
            />
          </label>
          <label className="label" htmlFor="">
            Contributed By
            <input
              type="text"
              value={contributed}
              onChange={(e) => setContributed(e.target.value)}
            />
          </label>
          <button>ADD NEW</button>
        </form>
      </div>
    </>
  );
};

export default NewBeer;
