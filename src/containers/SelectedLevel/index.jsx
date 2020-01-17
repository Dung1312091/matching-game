import React, { memo, useContext } from "react";
import Select from "../../components/Select";
import { GAME_LEVEL } from "../../constants";
import { Button } from "react-bootstrap";
import {AppContext} from "../../contexts/appContext"
import {setLevel, startGame} from "../../actions"
const SelectedLevel = memo(() => {
  const {state, dispatch} = useContext(AppContext);
  const {isPlaying} = state;
  const onChange = (_, level) => {
    dispatch(setLevel(level))
  }
  return (
    <div className="f-a-i-c">
      <div className="m-r-20">Level: </div>
      <Select data={GAME_LEVEL} label="name" onChange={onChange} disabled={isPlaying}/>
      <Button className="m-l-20" disabled={isPlaying} onClick={() => dispatch(startGame(true))}>Start</Button>
    </div>
  );
});
export default SelectedLevel;
