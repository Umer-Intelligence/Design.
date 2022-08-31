import "./LivingRoomPage.css";
import { Livingroom } from "../../Atom/Atom.js";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
const KitchenPage = () => {
  const setLivingroom = useSetRecoilState(Livingroom);
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
      <div className="Livingroom-container">
        <div className="Livingroom-Heading">
          Select your favourite Living room designs for your dream home.
        </div>
      </div>
      <div className="Livingroom-Design-container">
        <div className="Livingroom-Design-item">
          <button
            onClick={() =>
              setLivingroom(
                "https://obsessionoutlet.com/wp-content/uploads/Contemporary-Living-Room-Designing-Trends.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://obsessionoutlet.com/wp-content/uploads/Contemporary-Living-Room-Designing-Trends.jpg"
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
              setLivingroom(
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-living-room-design-ideas-hbx040122nextwave-013-1656022467.jpg?crop=0.675xw:1.00xh;0,0&resize=640:*"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/apartment-living-room-design-ideas-hbx040122nextwave-013-1656022467.jpg?crop=0.675xw:1.00xh;0,0&resize=640:*"
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
              setLivingroom(
                "https://timesofindia.indiatimes.com/thumb/msid-83204205,imgsize-127861,width-400,resizemode-4/83204205.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://timesofindia.indiatimes.com/thumb/msid-83204205,imgsize-127861,width-400,resizemode-4/83204205.jpg"
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
              setLivingroom(
                "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/master/pass/modern-living-room-decor-1366x768.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://assets.architecturaldigest.in/photos/60084dd6cce5700439e12bf7/master/pass/modern-living-room-decor-1366x768.jpg"
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
              setLivingroom(
                "https://assets.architecturaldigest.in/photos/60084c461b516d492c3ab2c1/4:3/w_1600%2Cc_limit/Mumbai-Parisian-chic-apartment-Jason-Wadhwani-2-1366x768.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://assets.architecturaldigest.in/photos/60084c461b516d492c3ab2c1/4:3/w_1600%2Cc_limit/Mumbai-Parisian-chic-apartment-Jason-Wadhwani-2-1366x768.jpg"
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
              setLivingroom(
                "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas-768x512.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2020/02/21010329/modern-living-room-design-ideas-768x512.jpg"
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
              setLivingroom(
                "https://i.pinimg.com/736x/5d/2e/dd/5d2edd23f75683399970a462cf06c902.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/736x/5d/2e/dd/5d2edd23f75683399970a462cf06c902.jpg"
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
              setLivingroom(
                "https://i.pinimg.com/736x/1f/8c/6b/1f8c6b77572eb62e23ff8a0f2353c1c4.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/736x/1f/8c/6b/1f8c6b77572eb62e23ff8a0f2353c1c4.jpg"
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
              setLivingroom(
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/worth-interiors-web-1520281341.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/worth-interiors-web-1520281341.jpg"
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
              setLivingroom(
                "https://i.pinimg.com/originals/ae/a6/f6/aea6f6c016395bb4af1ad2c33962c30c.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/originals/ae/a6/f6/aea6f6c016395bb4af1ad2c33962c30c.jpg"
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
              setLivingroom(
                "https://i.pinimg.com/236x/8e/02/5f/8e025f46a87263e79c3be3a5833d4ba4--furniture-arrangement-spare-room.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/236x/8e/02/5f/8e025f46a87263e79c3be3a5833d4ba4--furniture-arrangement-spare-room.jpg"
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
              setLivingroom(
                "https://www.architectureartdesigns.com/wp-content/uploads/2014/11/1221-630x449.jpg"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://www.architectureartdesigns.com/wp-content/uploads/2014/11/1221-630x449.jpg"
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

export default KitchenPage;
