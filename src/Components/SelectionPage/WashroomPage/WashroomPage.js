import "./WashroomPage.css";
import { Washroom } from "../../Atom/Atom.js";
import { useSetRecoilState } from "recoil";
import { Link } from "react-router-dom";
const WashroomPage = () => {
  const setWashroom = useSetRecoilState(Washroom);
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
      <div className="Washroom-container">
        <div className="Washroom-Heading">
          Select your favourite Washroom designs for your dream home.
        </div>
      </div>
      <div className="Washroom-Design-container">
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "http://cdn.home-designing.com/wp-content/uploads/2018/05/d0c0d160644969.5a54b9c7844b6.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "http://cdn.home-designing.com/wp-content/uploads/2018/05/d0c0d160644969.5a54b9c7844b6.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2019/12/feature-1-1400x933.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://www.bocadolobo.com/en/inspiration-and-ideas/wp-content/uploads/2019/12/feature-1-1400x933.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://media.designcafe.com/wp-content/uploads/2020/08/18192626/luxury-bathroom-design-ideas.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2020/08/18192626/luxury-bathroom-design-ideas.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "http://cdn.home-designing.com/wp-content/uploads/2018/05/luxury-bathrooms-designs-photos.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "http://cdn.home-designing.com/wp-content/uploads/2018/05/luxury-bathrooms-designs-photos.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://cdn.mos.cms.futurecdn.net/ob29ix2FnCk9HBgF22CpKY-1200-80.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://cdn.mos.cms.futurecdn.net/ob29ix2FnCk9HBgF22CpKY-1200-80.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://luxurylifefurniture.com/wp-content/uploads/2021/07/Troyes-Collection-Modern-Luxury-Bathroom-Design-Jacuzzi-and-Pedestal-Washbasin-Unit-Washbasin-and-Mirror-303-1024x916.jpeg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://luxurylifefurniture.com/wp-content/uploads/2021/07/Troyes-Collection-Modern-Luxury-Bathroom-Design-Jacuzzi-and-Pedestal-Washbasin-Unit-Washbasin-and-Mirror-303-1024x916.jpeg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://i.pinimg.com/originals/5f/28/75/5f2875f969257e77a4cc9945e05bc061.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i.pinimg.com/originals/5f/28/75/5f2875f969257e77a4cc9945e05bc061.jpg"
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
              setWashroom(
                "https://i0.wp.com/ulaburgiel.com/wp-content/uploads/2018/10/INSTA_Bathroom.jpg?resize=945%2C427&ssl=1"
              )
            }
            className="Livingroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://i0.wp.com/ulaburgiel.com/wp-content/uploads/2018/10/INSTA_Bathroom.jpg?resize=945%2C427&ssl=1"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9_rqXOBM1N_ytbEH83wvkOWc5EOgkg4MzA&usqp=CAU"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj9_rqXOBM1N_ytbEH83wvkOWc5EOgkg4MzA&usqp=CAU"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://media.designcafe.com/wp-content/uploads/2020/08/18191019/a-simple-yet-luxury-bathroom-design-with-gold-accents.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://media.designcafe.com/wp-content/uploads/2020/08/18191019/a-simple-yet-luxury-bathroom-design-with-gold-accents.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://algedra.com.tr/assets/imgs/service/thumb/yjqpve19dOnqUOv-iB8NXSQK.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://algedra.com.tr/assets/imgs/service/thumb/yjqpve19dOnqUOv-iB8NXSQK.jpg"
            }
            width={500}
            height={300}
            alt={""}
          />
        </div>
        {/* Separation */}
        <div className="Washroom-Design-item">
          <button
            onClick={() =>
              setWashroom(
                "https://www.thespruce.com/thmb/dA3IqLweMEIMynakpkZHmjZpcoo=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/LuxBRBevHillsFlatsx-5bfde9024cedfd0026059997.jpg"
              )
            }
            className="Washroom-Add-me"
          >
            ADD TO MY DREAM HOME
          </button>
          <img
            src={
              "https://www.thespruce.com/thmb/dA3IqLweMEIMynakpkZHmjZpcoo=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/LuxBRBevHillsFlatsx-5bfde9024cedfd0026059997.jpg"
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

export default WashroomPage;
