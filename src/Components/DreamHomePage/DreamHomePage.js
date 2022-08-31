import "./DreamHomePage.css";
import { useRecoilValue } from "recoil";
import { Kitchen } from "../Atom/Atom.js";
import { Livingroom } from "../Atom/Atom.js";
import { Guestroom } from "../Atom/Atom.js";
import { Washroom } from "../Atom/Atom.js";
import { Link } from "react-router-dom";
const DreamHome = () => {
  const cook = useRecoilValue(Kitchen);
  const book = useRecoilValue(Livingroom);
  const dook = useRecoilValue(Guestroom);
  const rook = useRecoilValue(Washroom);
  return (
    <div>
      <div className="Top-container">
        <Link to="/Design">
          <button className="Top-container-button">Design Page</button>
        </Link>
        <Link to="/canvas">
          <button className="Top-container-button">View Canvas</button>
        </Link>
        <Link to="/">
          <button className="Top-container-button"> Main Page </button>
        </Link>
      </div>
      <div className="Top-container-heading">YOUR DREAM HOME !</div>
      <div className="DreamHome-Container">
        <div> Your Dream Kitchen</div>
        <div>
          <img src={cook} width={600} height={400} alt={"YOUR DESIGN HERE"} />
        </div>
      </div>
      <div className="DreamHome-Container">
        <div> Your Dream Living Room </div>
        <div>
          <img src={book} width={600} height={400} alt={"YOUR DESIGN HERE"} />
        </div>
      </div>
      <div className="DreamHome-Container">
        <div> Your Dream Drawing Room</div>
        <div>
          <img src={dook} width={600} height={400} alt={"YOUR DESIGN HERE"} />
        </div>
      </div>
      <div className="DreamHome-Container">
        <div> Your Dream washroom </div>
        <div>
          <img src={rook} width={600} height={400} alt={"YOUR DESIGN HERE"} />
        </div>
      </div>
    </div>
  );
};
export default DreamHome;
