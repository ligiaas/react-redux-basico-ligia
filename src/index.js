import React from "react";
import ReactDOM from "react-dom";
import ReduxStoreProvider from "./ReduxStoreProvider";

import "./styles.css";
import CounterDisplay from "./CounterDisplay";
import CounterButton from "./CounterButton";
import withBorder from "./withBorder";

import { SUBTRACT, SUM } from "./reducers";

const BordderedCounterButton = withBorder(CounterButton);

function App() {
  return (
    <div className="App">
      <CounterDisplay />
      <BordderedCounterButton start />
      <CounterButton operation={SUBTRACT} />
      <CounterButton operation={SUM} charge={10} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div>
    <ReduxStoreProvider>
      <App />
    </ReduxStoreProvider>
  </div>,
  rootElement
);
