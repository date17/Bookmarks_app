import React, { Component } from "react";
import ReactDOM from "react-dom";
import Layout from "./components/layout/Layout";
import Store from "./Store";
import { Provider } from "react-redux";

if (document.getElementById("example")) {
    ReactDOM.render(
        <Provider store={Store}>
            <Layout />
        </Provider>,
        document.getElementById("example")
    );
}
