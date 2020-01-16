import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { buildCards } from "./utils";
import BoardGame from "./containers/BoardGame";
export default function App() {
  const cards = buildCards();
  return (
    <div className="App">
      <div className="App">
        <BoardGame initCards={cards} />
      </div>
    </div>
  );
}
