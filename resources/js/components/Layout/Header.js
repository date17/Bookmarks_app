import React, { Component } from "react";
import { connect } from "react-redux";
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
                        <span className="common">共有サイトへ</span>
                    </div>
                    <Logout />
                </div>
            </header>
        );
    }
}

export default connect()(Header);
