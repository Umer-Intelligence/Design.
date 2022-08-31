import "././SelectionPage.css";
import { AiOutlineHome } from "react-icons/fa";
import DesignCards from "./DesignCards";
import { Link } from "react-router-dom";
const SelectionPage = () => {
  return (
    <div>
      <div className="Top-container">
        <Link to="/">
          <button className="Top-container-button"> Main Page </button>
        </Link>
        <Link to="/DreamHome">
          {" "}
          <button className="Top-container-button">
            Your Dream Home
            <img
              src="https://www.freepnglogos.com/uploads/logo-home-png/house-logo-png-21.png"
              alt={""}
              width={50}
            />
          </button>
        </Link>
      </div>
      <div className="Select-container">
        <div className="Select-text">
          Select your favourite design of kitchen , guest room , living room and
          much more.
        </div>
        <div>
          <DesignCards />
        </div>
      </div>
    </div>
  );
};

export default SelectionPage;
