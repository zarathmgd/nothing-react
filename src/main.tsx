import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./components/firstpage.css";
import "./components/secondpage.css";
import "./components/thirdpage.css";
import "./components/fourthpage.css";
import "./components/footer.css";
import "./components/cart.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
