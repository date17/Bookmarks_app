import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

function mapState(state) {
    return state;
}

class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.id,
            title: "",
            url: "",
            tag_id: null,
            error: ""
        };
        this.doChangeTitle = this.doChangeTitle.bind(this);
        this.doChangeUrl = this.doChangeUrl.bind(this);
        this.doChangeTag = this.doChangeTag.bind(this);
        this.doAction = this.doAction.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.afterAdd = this.afterAdd.bind(this);
        this.getErrorMessage = this.getErrorMessage.bind(this);
    }

    doChangeTitle(e) {
        console.log("doChangeTitle");
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    doChangeUrl(e) {
        console.log("doChangeUrl");
        console.log(e.target.value);
        this.setState({
            url: e.target.value
        });
    }
    doChangeTag(e) {
        console.log("doChangeTag");
        console.log(e.target.value);
        this.setState({
            tag_id: e.target.value
        });
    }

    doAction() {
        const user_id = this.state.user_id;
        const title = this.state.title;
        const url = this.state.url;
        const tag_id = this.state.tag_id;

        axios
            .post("/api/bookmark", {
                title: title,
                url: url,
                tag_id: tag_id,
                user_id: user_id,
                isOpen: false
            })
            .then(res => {
                console.log(res.data);
                this.setState(state => ({
                    title: "",
                    url: "",
                    tag_id: null,
                    user_id: state.user_id,
                    error: ""
                }));
                this.afterAdd(tag_id, res.data);
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    error: e.message
                });
            });
    }

    doCancel() {
        this.setState({
            title: "",
            url: "",
            tag_id: null,
            error: ""
        });
        this.props.cancel();
    }

    afterAdd(tag_id, bookmarks) {
        console.log("after add");
        console.log(tag_id);
        console.log(bookmarks);
        this.props.after(tag_id, bookmarks);
    }

    getErrorMessage() {
        if (this.state.error) {
            return (
                <div className="error">
                    <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />
                    <span className="message">{this.state.error}</span>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="form-add">
                {this.getErrorMessage()}
                <div className="add-title">
                    <div className="label">TITLE</div>
                    <div className="input">
                        <input
                            type="text"
                            onChange={this.doChangeTitle}
                            value={this.state.title}
                        />
                    </div>
                </div>
                <div className="add-url">
                    <div className="label">URL</div>
                    <div className="input">
                        <input
                            type="url"
                            onChange={this.doChangeUrl}
                            value={this.state.url}
                        />
                    </div>
                </div>
                <div className="add-tag">
                    <div className="label">TAG</div>
                    <div className="select">
                        <select onChange={this.doChangeTag} required>
                            <option value="" disabled selected>
                                選択してください
                            </option>
                            {this.props.optionTag(this.props.tag_id)}
                        </select>
                    </div>
                </div>
                <div className="btn">
                    <button onClick={this.doCancel}>キャンセル</button>
                    <button onClick={this.doAction}>追加</button>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(AddBookmark);
