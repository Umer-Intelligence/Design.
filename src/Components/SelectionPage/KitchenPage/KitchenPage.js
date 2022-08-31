import "./KitchenPage.css";
import { Kitchen } from "../../Atom/Atom.js";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
const KitchenPage = () => {
  const setKitchen = useSetRecoilState(Kitchen);
  return (
    <div>
      <div className="Top-container">
        <Link to="/Design">
          <button className="Top-container-button"> Design Page </button>
        </Link>
        <Link to="/DreamHome">
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
      <div className="Kitchen-container">
        <div className="Kitchen-Heading">
          Select your favourite Kitchen designs for your dream home.
        </div>
      </div>
      <div className="Kitchen-Design-container">
        <div className="Kitchen-Design-item">
          <button
            className="Kitchen-Add-me"
            onClick={() =>
              setKitchen(
                "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/10095226/ceiling-cabinets-posh.jpeg"
              )
            }
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/10095226/ceiling-cabinets-posh.jpeg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen("https://i.ytimg.com/vi/F9kyco9U8hg/maxresdefault.jpg")
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={"https://i.ytimg.com/vi/F9kyco9U8hg/maxresdefault.jpg"}
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-kitchen-ideas-1642006005.jpg?crop=1.00xw:0.753xh;0,0.166xh&resize=1200:*"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/small-kitchen-ideas-1642006005.jpg?crop=1.00xw:0.753xh;0,0.166xh&resize=1200:*"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a2l0Y2hlbiUyMGRlc2lnbnxlbnwwfHwwfHw%3D&w=1000&q=80"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://media.designcafe.com/wp-content/uploads/2020/07/23205429/modular-kitchen-design-ideas.jpg"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2020/07/23205429/modular-kitchen-design-ideas.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://d1k47ujo4hlhfb.cloudfront.net/catalog/product/t/a/taylar--2--3c02bc4-interwood-mobel.jpg"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://d1k47ujo4hlhfb.cloudfront.net/catalog/product/t/a/taylar--2--3c02bc4-interwood-mobel.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen("https://i.ytimg.com/vi/6ikmLjF1ky4/maxresdefault.jpg")
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={"https://i.ytimg.com/vi/6ikmLjF1ky4/maxresdefault.jpg"}
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://i.pinimg.com/originals/93/a2/46/93a246f4b9d6012c6bf4558c6ea695de.jpg"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/originals/93/a2/46/93a246f4b9d6012c6bf4558c6ea695de.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/10/12111535/cover-3.png"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2018/10/12111535/cover-3.png"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://5.imimg.com/data5/SELLER/Default/2021/1/MP/RJ/JK/35531172/modular-kitchen-designing-500x500.jpg"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://5.imimg.com/data5/SELLER/Default/2021/1/MP/RJ/JK/35531172/modular-kitchen-designing-500x500.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen("https://i.ytimg.com/vi/8Ig5jT6vGZw/maxresdefault.jpg")
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={"https://i.ytimg.com/vi/8Ig5jT6vGZw/maxresdefault.jpg"}
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Kitchen-Design-item">
          <button
            onClick={() =>
              setKitchen(
                "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/18000526/archnotion1.jpeg"
              )
            }
            className="Kitchen-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://de927adv5b23k.cloudfront.net/wp-content/uploads/2018/07/18000526/archnotion1.jpeg"
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
