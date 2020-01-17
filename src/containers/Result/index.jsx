import React, { memo, useContext } from "react";
import {AppContext} from "../../contexts/appContext"
const Result = memo(() => {
  const {state} = useContext(AppContext);
  const {wonCount, lostCount} = state;

  return (
    <div >
    <div>Won:{wonCount}</div>
        <div>Lost: {lostCount}</div>
    </div>
  );
});
export default Result;
