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
        return (
            <>
                <dl>
                    <dt>Tag id:</dt>
                    <dd>{this.props.id}</dd>
                    <dt>Tag name:</dt>
                    <dd>{this.props.name}</dd>
                </dl>
                <DeleteTag id={this.props.id} />
            </>
        );
    }
}

export default connect(mapState)(Tag);
