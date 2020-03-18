import React, { Component } from "react";
import { connect } from "react-redux";
import Logout from "../User/Logout";
import "../../../../public/css/react/header.css";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_name: this.props.user_name,
            user_action: false
        };
        this.userAction = this.userAction.bind(this);
    }

    userAction() {
        const user_action = !this.state.user_action;
        this.setState({
            user_action: user_action
        });
    }

    render() {
        <header>
            <div className="title">SHEREs</div>
            <div className="user">
                <div className="login-user" onClick={this.userAction}>
                    {/* ここにユーザのアイコンを入れたい(font-awesome) */}
                    {this.state.user_name}
                </div>
                {this.state.user_action ? (
                    <div className="user-action">
                        <Logout />
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        </header>;
    }
}

export default connect()(Header);
