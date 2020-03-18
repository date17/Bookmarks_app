import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Store from "./Store";
import { Provider } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

if (document.getElementById("example")) {
    ReactDOM.render(
        <Provider store={Store}>
            <App />
        </Provider>,
        document.getElementById("example")
    );
}
