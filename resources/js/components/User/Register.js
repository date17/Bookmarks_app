import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: this.props.login,
            name: "",
            email: "",
            password: "",
            passwordConfirm: ""
        };
        this.doChangeName = this.doChangeName.bind(this);
        this.doChangeEmail = this.doChangeEmail.bind(this);
        this.doChangePassword = this.doChangePassword.bind(this);
        this.doChangePasswordConfirm = this.doChangePasswordConfirm.bind(this);
        this.doAction = this.doAction.bind(this);
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
                    login: true
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        if (this.state.login) {
            return <Redirect to="/mypage" />;
        } else {
            return (
                <div>
                    <header>
                        <h1>新規登録画面</h1>
                        <div>
                            <Link to="/login"></Link>
                        </div>
                    </header>
                    <div>
                        <label>
                            Name:
                            <input
                                type="text"
                                onChange={this.doChangeName}
                                value={this.state.name}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input
                                type="email"
                                onChange={this.doChangeEmail}
                                value={this.state.email}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                onChange={this.doChangePassword}
                                value={this.state.password}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            PasswordConfirm:
                            <input
                                type="password"
                                onChange={this.doChangePasswordConfirm}
                                value={this.state.passwordConfirm}
                            />
                        </label>
                    </div>
                    <div>
                        <button onClick={this.doAction}>新規登録</button>
                    </div>
                </div>
            );
        }
    }
}

export default connect()(Register);
