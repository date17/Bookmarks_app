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
            tag_id: this.props.tag_id,
            error: ""
        };
        this.doChangeTitle = this.doChangeTitle.bind(this);
        this.doChangeUrl = this.doChangeUrl.bind(this);
        this.doChangeTag = this.doChangeTag.bind(this);
        this.doAction = this.doAction.bind(this);
        this.doCancel = this.doCancel.bind(this);
        this.getErrorMessage = this.getErrorMessage.bind(this);
        this.optionTag = this.optionTag.bind(this);
    }

    optionTag() {
        if (
            this.props.tag_id === null ||
            this.props.name === "ブックマーク一覧"
        ) {
            return (
                <>
                    <option disabled value="" key="0" selected>
                        選択してください
                    </option>
                    {this.props.tags.map(tag => {
                        return (
                            <option value={tag.id} key={tag.id}>
                                {tag.name}
                            </option>
                        );
                    })}
                </>
            );
        } else {
            return (
                <>
                    <option disabled value="" key="0">
                        選択してください
                    </option>
                    {this.props.tags.map(tag => {
                        return this.props.tag_id === tag.id ? (
                            <option value={tag.id} key={tag.id} selected>
                                {tag.name}
                            </option>
                        ) : (
                            <option value={tag.id} key={tag.id}>
                                {tag.name}
                            </option>
                        );
                    })}
                </>
            );
        }
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

    doAction(e) {
        e.preventDefault();
        console.log("AddBookmark doAction");

        const params = {
            user_id: this.state.user_id,
            title: this.state.title,
            url: this.state.url,
            tag_id: this.state.tag_id,
            isOpen: false
        };

        axios
            .post("/api/bookmark", params)
            .then(res => {
                console.log(res.data);
                this.props.after();
                this.setState(state => ({
                    title: "",
                    url: "",
                    tag_id: this.props.tag_id,
                    user_id: state.user_id,
                    error: ""
                }));
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
            tag_id: this.props.tag_id,
            error: ""
        });
        this.props.cancel();
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
                <form onSubmit={this.doAction}>
                    {this.getErrorMessage()}
                    <div className="add-title">
                        <div className="label">TITLE</div>
                        <div className="input">
                            <input
                                type="text"
                                onChange={this.doChangeTitle}
                                value={this.state.title}
                                required
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
                                required
                            />
                        </div>
                    </div>
                    <div className="add-tag">
                        <div className="label">TAG</div>
                        <div className="select">
                            <select onChange={this.doChangeTag} required>
                                {this.optionTag()}
                            </select>
                        </div>
                    </div>
                    <div className="btn">
                        <button onClick={this.doCancel}>キャンセル</button>
                        <button type="submit">追加</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(mapState)(AddBookmark);
