import React, { useReducer } from "react";
import { AppContext } from "./contexts/appContext";
import { game } from "./reducers/game";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { genarateCards } from "./utils";
import { BoardGame, Timer, SelectedLevel } from "./containers";
export default function App() {
  const cards = genarateCards();
  const [state, dispatch] = useReducer(game, {});
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <div className="App">
          <SelectedLevel />
          <Timer />
          <BoardGame initCards={cards} />
        </div>
      </div>
    </AppContext.Provider>
  );
}
