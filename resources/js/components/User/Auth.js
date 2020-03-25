//loginしているかを確認する
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

const mappingState = state => {
    return state;
};

class Auth extends Component {
    constructor(props) {
        super(props);
        this.isLogin = this.isLogin.bind(this);
    }

    isLogin() {
        return this.props.login;
    }

    render() {
        if (this.isLogin()) {
            return this.props.children;
        } else {
            return <Redirect to="/login" />;
        }
    }
}

export default connect(mappingState)(Auth);
