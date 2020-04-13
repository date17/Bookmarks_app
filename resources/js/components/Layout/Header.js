import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logout from "../User/Logout";

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mypage-header">
                <div className="mypage-title">マイページ</div>
                <div className="user">
                    <div className="link-common">
                        <span className="common">
                            <Link to="/common">共有サイト</Link>
                        </span>
                    </div>
                    <Logout />
                </div>
            </header>
        );
    }
}

export default connect()(Header);
