import React, { Component } from "react";
import { connect } from "react-redux";

class Bookmark extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <dl>
                    <dt>TITLE</dt>
                    <dd>{this.props.title}</dd>
                    <dt>URL</dt>
                    <dd>{this.props.url}</dd>
                </dl>
            </div>
        );
    }
}

export default connect()(Bookmark);
