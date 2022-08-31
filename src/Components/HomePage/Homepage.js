import "./HomePage.css";
import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <div>
      <div className="Design-container">
        <div className="Design-heading">DESIGN</div>
        <div className="Design-subheading"> YOUR DREAM HOME !</div>
      </div>
      <div>
        <Link to="/Design">
          <button className="Design-button">Start Designing</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
