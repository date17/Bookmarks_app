import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteTag from "./DeleteTag";

const mapState = state => {
    return state;
};

class Tag extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="tag">{this.props.tag.name}</div>;
    }
}

export default connect(mapState)(Tag);
