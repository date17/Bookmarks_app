import React, { Component } from "react";
import { connect } from "react-redux";
import Lp from "./Lp";
import Login from "./User/Login";
import Register from "./User/Register";
import Mypage from "./User/Mypage";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Auth from "./User/Auth";

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <BrowserRouter>
                <Route exact path="/" component={Lp} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Auth>
                    <Route exact path="/mypage" component={Mypage} />
                </Auth>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
