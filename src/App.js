import logo from "./logo.svg";
import "./App.css";
import TTCForm from "./Components/TTCForm";
import React from "react";
import "./css/flowers.css";
import "./css/background.css";
import "./css/leaf.css";

function App() {
  const flowerColor = [
    "red-flower",
    "pink-flower",
    "blue-flower",
    "white-flower",
  ];

  let numberofFlowers = Math.floor(Math.random() * 10 + 9);
  let flowers = [];
  for (let i = 0; i < numberofFlowers; i++) {
    //bypassiamo i classici 1000 check per aver un posizionamento decente
    flowers.push(
      <div
        key={2000 + i}
        className={
          "flower " +
          flowerColor[Math.floor(Math.random() * flowerColor.length)]
        }
        style={{
          position: "relative",
          top: "" + Math.floor(Math.random() * 20 + 40) + "%",
          left: "" + Math.floor(Math.random() * 100) + "%",
        }}
      >
        <div className="flowerCenter"></div>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className="ground">{flowers}</div>
      <div className="sky"></div>
      <div className="sun"></div>
      <TTCForm></TTCForm>
    </React.Fragment>
  );
}

export default App;
