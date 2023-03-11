import { Link } from "react-router-dom";
import iconHome from "../../assets/icons8-home-page2.png";
import "./style.css";

const Header = () => {
  // const iconHome = "https://icons8.com/icon/0nADxBTfuhtL/home-page";
  return (
    <div className="navbar">
      <Link to="/">
        <div>
          <img src={iconHome} alt="home-icon" />
        </div>
      </Link>
    </div>
  );
};

export default Header;
