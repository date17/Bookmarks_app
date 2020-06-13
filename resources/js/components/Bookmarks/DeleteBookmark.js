import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const mapState = state => {
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
                        user_id: this.state.user_id,
                        tag_id: this.props.tag_id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    console.log("削除しました");
                    this.props.afterDelete();
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.doAction}>
                    <FontAwesomeIcon icon={["fas", "trash-alt"]} />
                </button>
            </div>
        );
    }
}

export default connect(mapState)(DeleteBookmark);
