import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MyRoute from "./myroute";
import reportWebVitals from "./reportWebVitals";
import NavbarComponent from "./components/NavbarComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NavbarComponent />
    <MyRoute />
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-text">Content-Blog MERN Stack by Anon</span>
        </div>
      </nav>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
