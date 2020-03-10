import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.user.id}</div>
                <div>{this.props.user.id}</div>
                <div>{this.props.user.id}</div>
            </div>
        );
    }
}

Layout = connect()(Layout);
export default Layout;
