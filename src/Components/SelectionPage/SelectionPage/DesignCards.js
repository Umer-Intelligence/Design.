import { Link } from "react-router-dom";
import "./SelectionPage.css";
const DesignCard = () => {
  return (
    <div className="Cards-container">
      <div className="Cards-items">
        <div className="Card-items-heading"> KITCHEN</div>
        <img
          src={
            "https://www.woodcreations.pk/wp-content/uploads/2016/10/indian-kitchen-design-for-small-space-1024x855.jpg"
          }
          width={600}
          height={400}
          alt={"Kitchen_image_loading"}
        />
        <div className="Card-items-subheading">
          View the most exquisite Kitchen designs
        </div>
        <Link to="/Kitchen">
          <button className="Card-items-button">View Designs</button>
        </Link>
      </div>
      {/* Separation */}
      <div className="Cards-items">
        <div className="Card-items-heading"> Living Room </div>
        <img
          src={"https://i.ytimg.com/vi/1HwtvRloZP4/maxresdefault.jpg"}
          width={600}
          height={400}
          alt={"Kitchen_image_loading"}
        />
        <div className="Card-items-subheading">
          View the most refreshing Living Room designs
        </div>
        <Link to="/Livingroom">
          <button className="Card-items-button">View Designs</button>
        </Link>
      </div>
      {/* Separation */}
      <div className="Cards-items">
        <div className="Card-items-heading">Drawing Room</div>
        <img
          src={
            "https://innerart.com.pk/wp-content/uploads/2021/06/furniture-design-drawing-room-10-marla-house.png"
          }
          width={600}
          height={400}
          alt={"Kitchen_image_loading"}
        />
        <div className="Card-items-subheading">
          View the most interesting Drawing Room designs
        </div>
        <Link to="/Guestroom">
          <button className="Card-items-button">View Designs</button>
        </Link>
      </div>
      {/* Separation */}
      <div className="Cards-items">
        <div className="Card-items-heading">Washroom</div>
        <img
          src={
            "https://fontanarchitecture.com/wp-content/uploads/2020/02/Bathroom-Design-Ideas-1.jpg"
          }
          width={600}
          height={400}
          alt={"Kitchen_image_loading"}
        />
        <div className="Card-items-subheading">
          View the most modern Washroom designs
        </div>
        <Link to="/Washroom">
          <button className="Card-items-button">View Designs</button>
        </Link>
      </div>
    </div>
  );
};

export default DesignCard;
