import { Link } from "react-router-dom";
import allBeers from "../../assets/beers.png";
import randomBeer from "../../assets/random-beer.png";
import newBeer from "../../assets/new-beer.png";
import "./style.css";

const HomePage = () => {
  return (
    <div className="homePage">
      <Link to="/beers">
        <div className="section">
          <img src={allBeers} alt="all-beers" />
          {/* in order not to import, we can put all pics in public */}
          {/* <img src="/beers.png" alt="all-beers" /> */}
        </div>
      </Link>
      <div className="content">
        <h1>All Beers</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis earum voluptate numquam error, doloremque architecto
          delectus perspiciatis, ea ipsa eaque tempora! Fugiat obcaecati est,
          perspiciatis officia reiciendis cumque exercitationem.
        </p>
      </div>

      <Link to={"/beers/random"}>
        <div className="section">
          <img src={randomBeer} alt="random-beer" />
        </div>
      </Link>
      <div className="content">
        <h1>Random Beer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis earum voluptate numquam error, doloremque architecto
          delectus perspiciatis, ea ipsa eaque tempora! Fugiat obcaecati est,
          perspiciatis officia reiciendis cumque exercitationem.
        </p>
      </div>

      <Link to={"/beers/new"}>
        <div className="section">
          <img src={newBeer} alt="new-beer" />
        </div>
      </Link>
      <div className="content">
        <h1>New Beer</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          veritatis earum voluptate numquam error, doloremque architecto
          delectus perspiciatis, ea ipsa eaque tempora! Fugiat obcaecati est,
          perspiciatis officia reiciendis cumque exercitationem.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
