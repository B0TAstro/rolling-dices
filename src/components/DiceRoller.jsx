import React, { useState, useEffect } from "react";
import "./DiceRoller.scss"; // Assurez-vous d'importer vos styles CSS

const DiceRoller = () => {
  const [diceResult, setDiceResult] = useState(0);
  const [diceCount, setDiceCount] = useState(4); // Nombre initial de dés

  const rollToIndex = (index) => {
    const count = 6;
    const cubes = document.querySelectorAll(".cube");

    let total = 0;

    for (let i = 0; i < cubes.length; i++) {
      const cube = cubes[i];
      let value = index >= 0 ? index : Math.floor(Math.random() * count) + 1;

      let preffix = "index-";

      cube.classList.toggle("bis");
      cube.className = cube.className.replace(
        new RegExp(`(^|\\s)${preffix}\\S+`, "g"),
        ""
      );
      cube.classList.add(preffix + value);

      total += value;
    }

    setDiceResult(total);
  };

  const addDie = () => {
    if (diceCount < 6) {
      setDiceCount(diceCount + 1);
    }
  };

  const removeDie = () => {
    if (diceCount > 1) {
      setDiceCount(diceCount - 1);
    }
  };

  useEffect(() => {
    document.querySelectorAll(".buttons button").forEach((button, index) => {
      button.addEventListener("click", () => rollToIndex(index));
    });

    return () => {
      document.querySelectorAll(".buttons button").forEach((button, index) => {
        button.removeEventListener("click", () => rollToIndex(index));
      });
    };
  }, []); // Assurez-vous de passer une liste vide en tant que dépendance pour exécuter cet effet une seule fois lors du montage

  return (
    <div className="viewport">
      <h1>Dice Roller</h1>
      <div className="result">Result: {diceResult}</div>
      {[...Array(diceCount)].map((_, i) => (
        <div className={`cube${i % 2 === 0 ? " bis" : ""}`} key={i}>
          {[1, 2, 3, 4, 5, 6].map((val, index) => (
            <div className="side" key={index}>
              {val}
            </div>
          ))}
        </div>
      ))}
      <div className="roll">
        <div className="buttons-roll">
          <button onClick={() => rollToIndex()}>ROLL</button>
          {[1, 2, 3, 4, 5, 6].map((val, index) => (
            <button key={index} onClick={() => rollToIndex(val)}>
              {val}
            </button>
          ))}
        </div>
      </div>
      <div className="buttons">
        <button onClick={addDie}>
          ADD
        </button>
        <button onClick={removeDie}>
          REMOVE
        </button>
      </div>
    </div>
  );
};

export default DiceRoller;
