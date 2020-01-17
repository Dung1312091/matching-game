import React, { memo } from "react";
import Select from "../../components/Select";
import { GAME_LEVEL } from "../../constants";
const SelectedLevel = memo(() => {
  console.log({ GAME_LEVEL });
  return <Select data={GAME_LEVEL} label="name" />;
});
export default SelectedLevel;
