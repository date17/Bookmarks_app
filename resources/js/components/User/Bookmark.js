import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteBookmark from "./DeleteBookmark";

const mapState = state => {
    return state;
};

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
                <DeleteBookmark id={this.props.id} />
            </div>
        );
    }
}

export default connect(mapState)(Bookmark);
