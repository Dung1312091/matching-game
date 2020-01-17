import React, { memo,useContext, useEffect, useState, useRef } from "react";
import Countdown from "react-countdown";
import {AppContext} from "../../contexts/appContext"
import {lostGame} from "../../actions"

// Renderer callback with condition
const renderer = ({ minutes, seconds, completed }) => {

    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  
};
const Timer = memo(() => {
  const timerRef= useRef(null);
  const {state, dispatch} = useContext(AppContext);
  const {isPlaying, level, isWon} = state;
  const [time, setTime] = useState(Date.now() + level.timer * 1000)
  const [start, setStart] = useState(false)
  //trigger start time when play
  useEffect(()=> {
    if(isPlaying) { 
      setStart(true)   
    }
  },[isPlaying])

  //set new time when change level
  useEffect(()=> {
    if(level && isPlaying ) {
      setTime(Date.now() + level.timer * 1000) 

    }
  },[level, isPlaying])

  //reset Time when win
  useEffect(()=> {
    if(isWon) {
      // timerRef.current.isCompleted()
      setStart(false) 

    }
  },[isWon])
  const handleComplete = () => {
    setStart(false) 
    if(isPlaying) {
      dispatch(lostGame())

    }
  }
  return isPlaying && <Countdown  key={start ? 0 : 1}  date={time}  autoStart={start} renderer={renderer} onComplete={handleComplete}/>;
});
export default Timer;
