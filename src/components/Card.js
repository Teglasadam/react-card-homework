import "./Card.css";
import { useState, useEffect } from "react";

export default function Card() {
  return (
    <div className="container">
      <div className="card">
        <h1 className="cardTitle">Not so <span className="rainbowColor">Magic</span> Card</h1>
        <p className="cardParag">
          If you drag the mouse over the card, its color will change.
        </p>
        <button className="cardButton">Useless Element</button>
      </div>
    </div>
  );
}
