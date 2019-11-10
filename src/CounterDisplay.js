import React from "react";
import { connect } from "react-redux";

function CounterDisplay({ counter }) {
  return <div>O total até agora é: {counter}</div>;
}

export default connect(state => ({
  counter: state.counter
}))(CounterDisplay);
