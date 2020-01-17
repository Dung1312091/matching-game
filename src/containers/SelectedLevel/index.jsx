import React, { memo } from "react";
import Select from "../../components/Select";
import { GAME_LEVEL } from "../../constants";
import { Button } from "react-bootstrap";
const SelectedLevel = memo(() => {
  console.log({ GAME_LEVEL });
  return (
    <div className="f-a-i-c p-10">
      <div className="m-r-20">Level: </div>
      <Select data={GAME_LEVEL} label="name" />
      <Button className="m-l-20">Start</Button>
    </div>
  );
});
export default SelectedLevel;
