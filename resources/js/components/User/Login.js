import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

//ステートの受け渡し
let mapState = state => {
    return state;
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "date17@ezweb.ne.jp",
            password: "b4z8nqas",
            login: this.props.login
        };
        this.doAction = this.doAction.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
    }

    doChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    doChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    doAction() {
        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data);
                let userData = res.data;
                //dispatchでログイン処理
                this.props.dispatch({
                    type: "LOGIN",
                    data: userData
                });
                //ステートを空にする
                this.setState({
                    email: "",
                    password: "",
                    login: this.props.login
                });
                this.setLocalStorage(userData);
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    password: ""
                });
            });
    }

    setLocalStorage(userData) {
        const data = {
            login: true,
            user: userData
        };
        localStorage.setItem("data", JSON.stringify(data));
    }
    // onSubmit() {
    //     this.props.history.push("/");
    // }

    render() {
        if (this.state.login) {
            return <Redirect to="/mypage" />;
        } else {
            return (
                <div>
                    <header>
                        <h1>ログイン画面</h1>
                        <div>
                            <Link to="/register"></Link>
                        </div>
                    </header>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                onChange={this.doChangeEmail}
                                value={this.state.email}
                            />
                        </label>
                        <label>
                            Password:
                            <input
                                type="password"
                                onChange={this.doChangePassword}
                                value={this.state.password}
                            />
                        </label>
                        <div>
                            <button onClick={this.doAction}>ログイン</button>
                        </div>
                    </div>
                    <button onClick={this.onSubmit}>LPへ</button>
                </div>
            );
        }
    }
}

export default connect(mapState)(Login);
