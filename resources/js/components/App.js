import React, { Component } from "react";
import { connect } from "react-redux";
import Lp from "./Lp";
import Login from "./User/Login";
import Register from "./User/Register";
import Mypage from "./Mypage";
import Common from "./Common";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Auth from "./User/Auth";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.firstLogin = this.firstLogin.bind(this);
        this.checkUser = this.checkUser.bind(this);
        // loginしているかをチェックする
        this.firstLogin();
    }

    //起動時にログインしているかどうかを確認する
    firstLogin() {
        console.log("firstLogin");
        //checkUser()によりログインユーザを確認
        this.checkUser();
    }

    //実際にAPIを叩く部分
    async checkUser() {
        console.log("checkUser");
        //セッションIDを用いて判定している
        const response = await axios.get("/api/user");
        console.log(response.data);
        const data = response.data || null;
        //レスポンスにログインユーザのデータが入っていたら、
        if (data) {
            console.log("data has");
            this.props.dispatch({
                type: "LOGIN",
                data: data
            });
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Lp} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Auth>
                        <Route exact path="/mypage" component={Mypage} />
                        <Route exact path="/common" component={Common} />
                    </Auth>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect()(App);
