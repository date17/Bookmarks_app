import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => {
    return state;
};

class DeleteTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            user_id: this.props.user.id
        };
    }

    doAction() {
        if (
            window.confirm(
                "このタグを削除すると関連するブックマークも削除されますがよろしいでしょうか？"
            )
        ) {
            console.log("タグを削除します");
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.doAction}>削除</button>
            </div>
        );
    }
}
