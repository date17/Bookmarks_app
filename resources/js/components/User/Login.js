import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            error: ""
        };
        this.doAction = this.doAction.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
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
            .post("/api/login", {
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
                    error: ""
                });
            })
            .catch(e => {
                console.log(e);
                console.log("miss login");
                this.setState({
                    password: "",
                    error: e.message
                });
            });
    }

    getErrorMessage() {
        if (this.state.error) {
            return (
                <div className="error">
                    <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />
                    <span className="message">{this.state.error}</span>
                </div>
            );
        }
    }

    render() {
        if (this.props.login) {
            return <Redirect to="/mypage" />;
        } else {
            return (
                <div className="login">
                    <header>
                        <div className="header-title">ログイン画面</div>
                        <div>
                            <Link to="/register"></Link>
                        </div>
                    </header>
                    <div className="login-form">
                        {this.getErrorMessage()}
                        <div className="login-email">
                            <div className="label">Email</div>
                            <div className="input">
                                <input
                                    type="email"
                                    onChange={this.doChangeEmail}
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <div className="login-pass">
                            <div className="label">Password</div>
                            <div className="input">
                                <input
                                    type="password"
                                    onChange={this.doChangePassword}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <div className="login-btn">
                            <button onClick={this.doAction}>ログイン</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect(mapState)(Login);
