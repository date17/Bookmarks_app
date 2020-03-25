import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Store from "./Store";
import { Provider } from "react-redux";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { CookiesProvider } from "react-cookie"; // ←react-cookeもモジュールを読み込む

library.add(fab, far, fas); //あらかじめ使用するアイコンを追加しておく

// デフォルトのappのタグに対してCookiesProviderをくくる
if (document.getElementById("example")) {
    ReactDOM.render(
        <CookiesProvider>
            <Provider store={Store}>
                <App />
            </Provider>
        </CookiesProvider>,
        document.getElementById("example")
    );
}
