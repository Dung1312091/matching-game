import React, { memo,useContext, useEffect, useState, useRef } from "react";
import Countdown from "react-countdown";
import {AppContext} from "../../contexts/appContext"
import {lostGame} from "../../actions"
// Random component
const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({ minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        {minutes}:{seconds}
      </span>
    );
  }
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
    if(level ) {
     
      setTime(Date.now() + level.timer * 1000)
    }
  },[level, isPlaying])

  //reset Time when win
  useEffect(()=> {
    if(isWon) {
      timerRef.current.isCompleted()
      setStart(false) 
    }
  },[isWon])

  const handleComplete = () => {
    if(isPlaying) {
      dispatch(lostGame())
    }
  }
  return <Countdown ref={timerRef} key={start ? 0 : 1}  date={time}  autoStart={start} renderer={renderer} onComplete={handleComplete}/>;
});
export default Timer;
