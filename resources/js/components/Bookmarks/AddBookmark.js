import React, { Component } from "react";
import { connect } from "react-redux";
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
            tag_id: null
        };
        this.doChangeTitle = this.doChangeTitle.bind(this);
        this.doChangeUrl = this.doChangeUrl.bind(this);
        this.doChangeTag = this.doChangeTag.bind(this);
        this.doAction = this.doAction.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.afterAdd = this.afterAdd.bind(this);
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
                    user_id: state.user_id
                }));
                this.afterAdd(tag_id, res.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    doCancel() {
        this.setState({
            title: "",
            url: "",
            tag_id: null
        });
        this.props.cancel();
    }

    afterAdd(tag_id, bookmarks) {
        console.log("after add");
        console.log(tag_id);
        console.log(bookmarks);
        this.props.after(tag_id, bookmarks);
    }

    render() {
        return (
            <div className="form-add">
                <div className="add-title">
                    <label>TITLE</label>
                    <input
                        type="text"
                        onChange={this.doChangeTitle}
                        value={this.state.title}
                    />
                </div>
                <div className="add-url">
                    <label>URL</label>
                    <input
                        type="url"
                        onChange={this.doChangeUrl}
                        value={this.state.url}
                    />
                </div>
                <div className="add-tag">
                    <label>TAG</label>
                    <select onChange={this.doChangeTag} required>
                        {this.props.optionTag(this.props.tag_id)}
                    </select>
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
