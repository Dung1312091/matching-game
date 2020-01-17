import React, { useReducer } from "react";
import { AppContext } from "./contexts/appContext";
import { game } from "./reducers/game";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BoardGame, Timer, SelectedLevel, Result, Message } from "./containers";
import {initialState} from "./reducers/game"
export default function App() {
  const [state, dispatch] = useReducer(game, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
     
          <SelectedLevel />
          <Result/>
          <Timer />
          <BoardGame />
          <Message/>
      
      </div>
    </AppContext.Provider>
  );
}
