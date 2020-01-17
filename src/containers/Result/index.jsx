import React, { memo, useContext } from "react";
import { Table } from "react-bootstrap";
import { AppContext } from "../../contexts/appContext";
import { millisToMinutesAndSeconds } from "../../utils";
import "./style.scss";
const Result = memo(() => {
  const { state } = useContext(AppContext);
  const { wonCount, lostCount, timeRemain } = state;
  return (
    <div className="result">
      <div>Won:{wonCount}</div>
      <div>Lost: {lostCount}</div>
      <div style={{ display: "flex" }}>
        <div className="m-r-20">Best time:</div>
        <div>
          <Table striped bordered hover size="sm" style={{ width: "auto" }}>
            <thead>
              <tr>
                <th>Easy</th>
                <th>Normal</th>
                <th>Hard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{millisToMinutesAndSeconds(timeRemain.Easy)}</td>
                <td>{millisToMinutesAndSeconds(timeRemain.Normal)}</td>
                <td>{millisToMinutesAndSeconds(timeRemain.Hard)}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
});
export default Result;
