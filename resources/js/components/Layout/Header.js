import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../User/Logout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserInfo from "../User/UserInfo";

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleUserInfo: false
        };
        this.showUserInfo = this.showUserInfo.bind(this);
        this.closeUserInfo = this.closeUserInfo.bind(this);
    }

    showUserInfo() {
        console.log("showUserInfo");
        this.setState({
            toggleUserInfo: true
        });
    }

    closeUserInfo() {
        console.log("closeUserInfo");
        this.setState({
            toggleUserInfo: false
        });
    }

    render() {
        return (
            <header className="mypage-header">
                <div className="mypage-title">{this.props.title}</div>
                <div className="user">
                    <div className="link-common">
                        <span className="common">
                            <Link to={this.props.url}>
                                {this.props.linkTitle}
                            </Link>
                        </span>
                    </div>
                    <Logout />
                    <div
                        className="user-icon"
                        onMouseOver={this.showUserInfo}
                        onMouseOut={this.closeUserInfo}
                    >
                        <FontAwesomeIcon icon={["far", "user-circle"]} />
                    </div>
                </div>
                {this.state.toggleUserInfo === true ? <UserInfo /> : <></>}
            </header>
        );
    }
}

export default connect()(Header);
