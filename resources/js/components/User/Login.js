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
            email: "",
            password: "",
            login: this.props.login
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
        const param = {
            email: this.state.email,
            password: this.state.password
        };
        axios
            .post("/login", {
                email: this.state.email,
                password: this.state.password
            })
            .then(res => {
                console.log(res.data);
                // let user = res.data;
                // //dispatchでログイン処理
                // this.props.dispatch({
                //     type: "LOGIN",
                //     data: user
                // });
                // //ステートを空にする
                // this.setState({
                //     email: "",
                //     password: "",
                //     login: this.props.login
                // });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    password: ""
                });
            });
    }

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
                </div>
            );
        }
    }
}

export default connect(mapState)(Login);
