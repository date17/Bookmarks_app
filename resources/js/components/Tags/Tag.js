import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => {
    return state;
};

class Tag extends Component {
    constructor(props) {
        super(props);
        this.selectBookmarks = this.selectBookmarks.bind(this);
    }

    selectBookmarks() {
        //親の関数をpropsで受け取りこの関数内で実行する
        this.props.doClick(this.props.id, this.props.name);
    }

    render() {
        return (
            <div className="tag" onClick={this.selectBookmarks}>
                {this.props.name}
            </div>
        );
    }
}

export default connect(mapState)(Tag);
