import React, { memo } from "react";
import Countdown from "react-countdown";

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
  return <Countdown date={Date.now() + 10000 * 60} renderer={renderer} />;
});
export default Timer;
