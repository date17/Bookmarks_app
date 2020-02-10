import React, { Component } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";

class Layout extends Component {
    render() {
        return (
            <div>
                <Header title={this.props.title} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}
