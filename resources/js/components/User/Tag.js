import React, { Component } from "react";
import { connect } from "react-redux";

class Tag extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <dl>
                <dt>Tag id:</dt>
                <dd>{this.props.id}</dd>
                <dt>Tag name:</dt>
                <dd>{this.props.name}</dd>
            </dl>
        );
    }
}

export default connect()(Tag);
