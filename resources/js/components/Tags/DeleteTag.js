import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

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
        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        if (
            window.confirm(
                "このタグを削除すると関連するブックマークも削除されますがよろしいでしょうか？"
            )
        ) {
            console.log("タグを削除します");
            axios
                .delete("/api/tag", {
                    data: {
                        id: this.state.id,
                        user_id: this.state.user_id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    this.props.delete(res.data.tags);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {
        return (
            <div className="btn-deleteTag">
                <button onClick={this.doAction}>削除</button>
            </div>
        );
    }
}

export default connect(mapState)(DeleteTag);
