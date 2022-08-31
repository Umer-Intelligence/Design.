import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage/Homepage.js";
import SelectionPage from "./Components/SelectionPage/SelectionPage/SelectionPage.js";
import WashroomPage from "./Components/SelectionPage/WashroomPage/WashroomPage.js";
import GuestroomPage from "./Components/SelectionPage/GuestroomPage/GuestroomPage.js";
import KitchenPage from "./Components/SelectionPage/KitchenPage/KitchenPage.js";
import LivingRoomPage from "./Components/SelectionPage/LivingRoomPage/LivingRoomPage.js";
import DreamHomePage from "./Components/DreamHomePage/DreamHomePage.js";
import Canvas from "./Components/Canvas/Canvas.js";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Design" element={<SelectionPage />} />
        <Route path="/Washroom" element={<WashroomPage />} />
        <Route path="/Livingroom" element={<LivingRoomPage />} />
        <Route path="/Kitchen" element={<KitchenPage />} />
        <Route path="/Guestroom" element={<GuestroomPage />} />
        <Route path="/DreamHome" element={<DreamHomePage />} />
        <Route path="/Canvas" element={<Canvas />} />
      </Routes>
    </div>
  );
}
