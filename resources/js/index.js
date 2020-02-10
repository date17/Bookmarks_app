import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import Store from "./Store";
import { PersistGate } from "redux-persist/integration/react";
import Bookmark from "./components/bookmark/Bookmark";
import pStore from "./Store";

//レンダリング
ReactDOM.render(
    <Provider store={Store}>
        <PersistGate loading={<p>Loading ...</p>} persistor={pStore}>
            <Bookmark />
        </PersistGate>
    </Provider>,
    document.getElementById("bookmark")
);
