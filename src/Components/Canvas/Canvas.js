import "./Canvas.css";
import { useRecoilValue } from "recoil";
import { Kitchen } from "../Atom/Atom.js";
import { Livingroom } from "../Atom/Atom.js";
import { Guestroom } from "../Atom/Atom.js";
import { Washroom } from "../Atom/Atom.js";
import { Link } from "react-router-dom";
const Canvas = () => {
  const cook = useRecoilValue(Kitchen);
  const book = useRecoilValue(Livingroom);
  const dook = useRecoilValue(Guestroom);
  const rook = useRecoilValue(Washroom);

  return (
    <div>
      <div>
        <Link to="/DreamHome">
          <button className="Canvas-button">Back</button>
        </Link>
      </div>
      <div className="Canvas-container">
        <img src={cook} width={"48%"} height={260} alt={"YOUR DESIGN HERE"} />
        <img src={book} width={"48%"} height={260} alt={"YOUR DESIGN HERE"} />
        <img src={dook} width={"48%"} height={260} alt={"YOUR DESIGN HERE"} />
        <img src={rook} width={"48%"} height={260} alt={"YOUR DESIGN HERE"} />
      </div>
    </div>
  );
};

export default Canvas;
