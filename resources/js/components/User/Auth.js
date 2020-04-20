//loginしているかを確認する
import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import debounce from "lodash.debounce";

const mappingState = state => {
    return state;
};

class Auth extends Component {
    constructor(props) {
        super(props);
        this.isLogin = this.isLogin.bind(this);
        this.toRedirectDebounce = debounce(this.toRedirect, 2000);
    }

    isLogin() {
        console.log(this.props.login);
        return this.props.login;
    }

    //debounceを使用し、ログイン画面に遷移するのを待つことで、apiを叩いてログイン確認する時間を稼ぐ
    toRedirect() {
        this.props.history.push("login");
    }

    render() {
        return (
            <>
                {this.isLogin()
                    ? this.props.children
                    : this.toRedirectDebounce()}
            </>
        );
    }
}

export default withRouter(connect(mappingState)(Auth));
