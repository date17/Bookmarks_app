import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            name: "",
            email: "",
            password: "",
            passwordConfirm: "",
            error: ""
        };
        this.doChangeName = this.doChangeName.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doChangePasswordConfirm = this.doChangePasswordConfirm.bind(this);
        this.doAction = this.doAction.bind(this);
        this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    doChangeName(e) {
        this.setState({
            name: e.target.value
        });
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
    doChangePasswordConfirm(e) {
        this.setState({
            passwordConfirm: e.target.value
        });
    }

    doAction() {
        axios
            .post("/api/register", {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                password_confirmation: this.state.passwordConfirm
            })
            .then(res => {
                console.log(res);
                this.setState({
                    login: true,
                    error: "",
                    name: "",
                    email: "",
                    password: "",
                    passwordConfirm: ""
                });
            })
            .catch(e => {
                console.log(e);
                console.log("miss register");
                this.setState({
                    password: "",
                    passwordConfirm: "",
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
        if (this.state.login) {
            return <Redirect to="/mypage" />;
        } else {
            return (
                <div className="register">
                    <header>
                        <div className="header-title">新規登録画面</div>
                        <div>
                            <Link to="/login"></Link>
                        </div>
                    </header>
                    <div className="register-form">
                        {this.getErrorMessage()}
                        <div className="name">
                            <div className="label">Name</div>
                            <div className="input">
                                <input
                                    type="text"
                                    onChange={this.doChangeName}
                                    value={this.state.name}
                                />
                            </div>
                        </div>
                        <div className="email">
                            <div className="label">Email</div>
                            <div className="input">
                                <input
                                    type="email"
                                    onChange={this.doChangeEmail}
                                    value={this.state.email}
                                />
                            </div>
                        </div>
                        <div className="pass">
                            <div className="label">Password</div>
                            <div className="input">
                                <input
                                    type="password"
                                    onChange={this.doChangePassword}
                                    value={this.state.password}
                                />
                            </div>
                        </div>
                        <div className="pass-confirm">
                            <div className="label">PasswordConfirm</div>
                            <div className="input">
                                <input
                                    type="password"
                                    onChange={this.doChangePasswordConfirm}
                                    value={this.state.passwordConfirm}
                                />
                            </div>
                        </div>
                        <div className="btn">
                            <button onClick={this.doAction}>新規登録</button>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default connect()(Register);
