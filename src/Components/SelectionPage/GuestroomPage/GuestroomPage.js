import "./GuestroomPage.css";
import { Guestroom } from "../../Atom/Atom.js";
import { useSetRecoilState } from "recoil";

import { Link } from "react-router-dom";
const GuestroomPage = () => {
  const setGuestroom = useSetRecoilState(Guestroom);
  return (
    <div>
      <div className="Top-container">
        <Link to="/Design">
          <button className="Top-container-button"> Design Page </button>
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
      <div className="Guestroom-container">
        <div className="Guestroom-Heading">
          Select your favourite Drawing room designs for your dream home.
        </div>
      </div>
      <div className="Guestroom-Design-container">
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://media.designcafe.com/wp-content/uploads/2019/12/17110953/drawing-room-design-ideas.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2019/12/17110953/drawing-room-design-ideas.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://assets.architecturaldigest.in/photos/60083ce21dd783c6920247a1/master/w_1600%2Cc_limit/sharjah-united-arabs-home-interiors_4-2.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://assets.architecturaldigest.in/photos/60083ce21dd783c6920247a1/master/w_1600%2Cc_limit/sharjah-united-arabs-home-interiors_4-2.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://i.pinimg.com/736x/02/6a/7f/026a7f88e016cd203b17ab215eb50429.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/736x/02/6a/7f/026a7f88e016cd203b17ab215eb50429.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1513668138/p/photo/image/2363797/living_room_01.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1513668138/p/photo/image/2363797/living_room_01.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://dhandhokaro.com/wp-content/uploads/2022/01/Stunning-drawing-room-interior-design-ideas-in-2022.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://dhandhokaro.com/wp-content/uploads/2022/01/Stunning-drawing-room-interior-design-ideas-in-2022.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://3.imimg.com/data3/EQ/VK/MY-2/drawing-room-interior-design-500x500.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://3.imimg.com/data3/EQ/VK/MY-2/drawing-room-interior-design-500x500.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "http://wonderfulengineering.com/wp-content/uploads/2014/08/25-drawing-room-design-ideas-2.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "http://wonderfulengineering.com/wp-content/uploads/2014/08/25-drawing-room-design-ideas-2.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Livingroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://static.zingyhomes.com/projectImages/cache/75/97/75973a44fcc516929e43b7bc7560c361.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://static.zingyhomes.com/projectImages/cache/75/97/75973a44fcc516929e43b7bc7560c361.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1490006803/p/photo/image/1913408/Trilok_ji_Cam-7.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://images.homify.com/c_fill,f_auto,q_0,w_740/v1490006803/p/photo/image/1913408/Trilok_ji_Cam-7.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom("https://gharexpert.com/User_Images/86201755740.png")
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={"https://gharexpert.com/User_Images/86201755740.png"}
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://media.designcafe.com/wp-content/uploads/2019/12/17054157/Sofas-that-Spark-Conversation.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2019/12/17054157/Sofas-that-Spark-Conversation.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Guestroom-Design-item">
          <button
            onClick={() =>
              setGuestroom(
                "https://dhandhokaro.com/wp-content/uploads/2022/01/drawing-room-view-2.jpg"
              )
            }
            className="Guestroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://dhandhokaro.com/wp-content/uploads/2022/01/drawing-room-view-2.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default GuestroomPage;
