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
        this.afterDelete = this.afterDelete.bind(this);
    }

    selectBookmarks() {
        //親の関数をpropsで受け取りこの関数内で実行する
        this.props.doClick(this.props.id, this.props.name);
    }

    afterDelete(tags) {
        console.log("tag afterDelete");
        this.props.after(tags);
    }

    render() {
        return (
            <div className="tag">
                <div className="tag-name" onClick={this.selectBookmarks}>
                    {this.props.name}
                </div>
                <DeleteTag
                    id={this.props.id}
                    after={tags => {
                        this.afterDelete(tags);
                    }}
                />
            </div>
        );
    }
}

export default connect(mapState)(Tag);
