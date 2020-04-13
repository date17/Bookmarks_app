import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mappingState = state => {
    return state;
};

class Common extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
                <div>Hello</div>
            </div>
        );
    }
}

export default connect(mappingState)(Common);
