import React, { Component } from "react";
import { connect } from "react-redux";
import Lp from "./Lp";
import Login from "./User/Login";
import Register from "./User/Register";
import Mypage from "./User/Mypage";
import { BrowserRouter, Route, Link } from "react-router-dom";

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
                <Route exact path="/mypage" component={Mypage} />
            </BrowserRouter>
        );
    }
}

export default connect()(App);
