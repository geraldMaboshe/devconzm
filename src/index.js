import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import CodeOfConduct from "./components/CodeOfConduct"; 
import * as serviceWorker from "./serviceWorker";
import "./mobile.css";
import "./style.css";

// To view Code of Conduct page replace 'App' below with 'CodeOfConduct'

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
