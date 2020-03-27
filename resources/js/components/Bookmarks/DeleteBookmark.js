import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

const mapStateUserId = state => {
    return state;
};

class DeleteBookmark extends Component {
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
            window.confirm("このブックマークを削除してもよろしいでしょうか？")
        ) {
            console.log("ブックマークを削除します");
            axios
                .delete("/api/bookmark", {
                    data: {
                        id: this.state.id,
                        user_id: this.state.user_id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    this.props.dispatch({
                        type: "DELETEBOOKMARK",
                        data: res.data
                    });
                })
                .catch(e => {
                    console.log(e);
                });
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

export default connect(mapStateUserId)(DeleteBookmark);
