import React, { useEffect } from "react";
import { connect } from "react-redux";
import { updateCounter, startCounter } from "./actionCreators";
import { SUM } from "./reducers";

const CounterButton = ({
  style,
  dispatchUpdateCounter,
  dispatchStartCounter,
  operation = SUM,
  charge = 1,
  start = false
}) => {
  useEffect(() => {
    if (start) {
      console.log(dispatchStartCounter, start);
      dispatchStartCounter(500);
    }
  }, [start, dispatchUpdateCounter, operation]);

  return (
    <button
      style={style}
      onClick={() => dispatchUpdateCounter(operation, charge)}
    >
      Click Me
    </button>
  );
};

export default connect(
  null,
  {
    dispatchUpdateCounter: updateCounter,
    dispatchStartCounter: startCounter
  }
)(CounterButton);
