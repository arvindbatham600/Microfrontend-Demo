import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {Counter} from 'counter/Counter'

const App = () => (
  <div className="container">
    <h1>Container</h1>
    <Counter />
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
