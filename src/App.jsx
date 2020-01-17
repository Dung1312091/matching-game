import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { genarateCards } from "./utils";
import { BoardGame, Timer, SelectedLevel } from "./containers";
export default function App() {
  const cards = genarateCards();
  return (
    <div className="App">
      <div className="App">
        <SelectedLevel />
        <Timer />
        <BoardGame initCards={cards} />
      </div>
    </div>
  );
}
