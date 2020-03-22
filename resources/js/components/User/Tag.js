import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteTag from "./DeleteTag";

const mapState = state => {
    return state;
};

class Tag extends Component {
    constructor(props) {
        super(props);
        this.selectBookmarks = this.selectBookmarks.bind(this);
    }

    selectBookmarks() {
        const tag = this.props.tag;
        //dispatchでselectの中にクリックしたタグとそのブックマークの情報を入れる
        this.props.dispatch({
            type: "CHANGESELECT",
            data: tag
        });
    }

    render() {
        return (
            <div className="tag" onClick={this.selectBookmarks}>
                {this.props.tag.name}
            </div>
        );
    }
}

export default connect(mapState)(Tag);
