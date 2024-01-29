import "./Card.css";
import { useState } from "react";

export default function Card() {
  //A háttér és a szöveg színeinek változói
  const [bgColor, setBgColor] = useState("rgb(90, 118, 130, 0.4)");
  const [fontColor, setFontColor] = useState("black");
  const [magicColor0, setMagicColor0] = useState("rgb(219, 191, 28)");
  const [magicColor50, setMagicColor50] = useState("rgba(227, 89, 150, 1)");
  const [magicColor100, setMagicColor100] = useState("rgb(11, 109, 129)");

  /* 
  Amikor JavaScript kódot szeretnék beilleszteni akkor a backticket kell használjam a sima aposztrofok helyett.
  példa1: backgroundImage: `linear-gradient(90deg, ${magicColor0} 0%, ${magicColor50} 50%, ${magicColor100} 100%)`
  példa2: backgroundImage: 'linear-gradient(90deg, rgb(219, 191, 28) 0%, rgba(227, 89, 150, 1) 50%, rgb(11, 109, 129) 100%)'
  Példa1ben backtickel kezdek és akkor betudok illeszteni változókat példa2ben pedig sima aposztrofokkal írom le a css szabályt, mert String típusú teljes mértékben. */
  //!!!Probléma volt, hogy backgroundColort próbáltam meg használni, pedig a linear-gradienthez backgroundImage kell!!!
  const style = {
    backgroundImage: `linear-gradient(90deg, ${magicColor0} 0%, ${magicColor50} 50%, ${magicColor100} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  };

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

  //Randomszám generáló függvény random színhez (0-255).
  const randomMath = () => {
    return Math.round(Math.random() * 255);
  };

  //Az a függvény amelyik változtatja gomnyomásra a "MAGIC" szöveg színeit.
  function changedMagicColors() {
    setMagicColor0(`rgb(${randomMath()}, ${randomMath()}, ${randomMath()})`);
    setMagicColor50(
      `rgba(${randomMath()}, ${randomMath()}, ${randomMath()}, 1)`
    );
    setMagicColor100(`rgb(${randomMath()}, ${randomMath()}, ${randomMath()})`);
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
          Not so{" "}
          <span className="rainbowColor" style={style}>
            Magic
          </span>{" "}
          Card
        </h1>
        <p className="cardParag">
          If you drag the mouse over the card, its color will change.
        </p>
        <button className="cardButton" onClick={changedMagicColors}>
          Press the Magical Element
        </button>
      </div>
    </div>
  );
}
