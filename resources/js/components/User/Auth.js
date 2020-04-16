//loginしているかを確認する
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import _ from "lodash";

const mappingState = state => {
    return state;
};

class Auth extends Component {
    constructor(props) {
        super(props);
        this.isLogin = this.isLogin.bind(this);
        this.toRedirect = this.toRedirect.bind(this);
    }

    isLogin() {
        return this.props.login;
    }

    //debounceを使用し、ログイン画面に遷移するのを待つことで、apiを叩いてログイン確認する時間を稼ぐ
    toRedirect() {
        //指定した時間待ってから第一引数の関数を実行する
        _.debounce(() => {
            return <Redirect to="/login" />;
        }, 1000);
    }

    render() {
        return (
            <>{this.props.login ? this.props.children : this.toRedirect()}</>
        );
    }
}

export default connect(mappingState)(Auth);
