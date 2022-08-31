import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import ScrollToTop from "./Components/scrollToTop/scrollToTop";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop />
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </StrictMode>
);
