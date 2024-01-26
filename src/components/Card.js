import "./Card.css";
import { useState, useEffect } from "react";

export default function Card() {
  //A háttér és a szöveg színeinek változói
  const [bgColor, setBgColor] = useState("rgb(90, 118, 130, 0.4)");
  const [fontColor, setFontColor] = useState("black");

  //Az a függvény, amelyik átszínez.
  function changedColors() {
    setBgColor("rgb(50, 50, 50, 0.8)");
    setFontColor("white");
  }

  //Az a függvény amelyik visszaállítja az eredeti színeket.
  function standardColors() {
    setBgColor("rgb(90, 118, 130, 0.4)");
    setFontColor("black");
  }

  return (
    <div className="container">
      <div
        className="card"
        style={{ backgroundColor: `${bgColor}`, color: `${fontColor}` }}
        onMouseEnter={changedColors}
        onMouseLeave={standardColors}
      >
        <h1 className="cardTitle">
          Not so <span className="rainbowColor">Magic</span> Card
        </h1>
        <p className="cardParag">
          If you drag the mouse over the card, its color will change.
        </p>
        <button className="cardButton">Useless Element</button>
      </div>
    </div>
  );
}
