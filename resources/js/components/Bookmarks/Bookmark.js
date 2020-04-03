import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteBookmark from "./DeleteBookmark";
import axios from "axios";

const mapState = state => {
    return state;
};

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
            detail: false,
            fixTitle: this.props.title,
            fixUrl: this.props.url,
            fixTag: this.props.tag_id
        };
        this.doChangeDetail = this.doChangeDetail.bind(this);
        this.doChangeFixForm = this.doChangeFixForm.bind(this);
        this.doChangeFixTitle = this.doChangeFixTitle.bind(this);
        this.doChangeFixUrl = this.doChangeFixUrl.bind(this);
        this.doChangeFixTag = this.doChangeFixTitle.bind(this);
        this.doFixAction = this.doFixAction.bind(this);
        this.fixedForm = this.fixedForm.bind(this);
        this.detailForm = this.detailForm.bind(this);
    }

    doChangeDetail() {
        const detail = !this.state.detail;

        this.setState({
            detail: detail
        });
    }

    doChangeFixForm() {
        console.log("Bookmark doChangeFixForm");
        const fixed = this.state.fixed;

        if (fixed === true) {
            console.log("change false");
            this.setState({
                fixed: false,
                fixTitle: this.props.title,
                fixUrl: this.props.url,
                fixTag: this.props.tag_id
            });
        } else if (fixed === false) {
            console.log("change true");
            this.setState({
                fixed: true
            });
        }
    }

    fixedForm() {
        return (
            <div>
                <div>
                    <input
                        type="text"
                        value={this.state.fixTitle}
                        onChange={this.doChangeFixTitle}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value={this.state.fixUrl}
                        onChange={this.doChangeFixUrl}
                    />
                </div>
                <div>
                    <select onChange={this.doChangeFixTag}>
                        {this.props.optionTag(this.props.tag_id)}
                    </select>
                </div>
                <div>
                    <button onClick={this.doChangeFixForm}>キャンセル</button>
                    <button onClick={this.doFixAction}>変更</button>
                </div>
            </div>
        );
    }

    detailForm() {
        return (
            <>
                <div className="bookmark-title" onClick={this.doChangeDetail}>
                    {this.props.title}
                </div>
                {this.state.detail ? (
                    <div className="detail">
                        <div className="url">
                            URL:<span>{this.props.url}</span>
                        </div>
                        <div>
                            <DeleteBookmark
                                id={this.props.id}
                                tag_id={this.props.tag_id}
                                afterDelete={this.props.after}
                            />
                            <div>
                                <button onClick={this.doChangeFixForm}>
                                    編集
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </>
        );
    }

    doChangeFixTitle(e) {
        console.log(e.target.value);
        this.setState({
            fixTitle: e.target.value
        });
    }

    doChangeFixUrl(e) {
        console.log(e.target.value);
        this.setState({
            fixUrl: e.target.value
        });
    }

    doChangeFixTag(e) {
        console.log(e.target.value);
        this.setState({
            fixTag: e.target.value
        });
    }

    doFixAction() {
        axios
            .put("/api/bookmark", {
                id: this.props.id,
                title: this.state.fixTitle,
                url: this.state.fixUrl,
                tag_id: this.state.fixTag,
                user_id: this.props.user.id
            })
            .then(res => {
                console.log(res.data);
                const bookmarks = res.data;
                const tag_id = this.props.tag_id;
                //ステートのfixedをfalseにして、表示を変える
                this.doChangeFixForm();
                //ブックマークを更新
                this.props.change(tag_id, bookmarks);
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="bookmark">
                {this.state.fixed ? this.fixedForm() : this.detailForm()}
            </div>
        );
    }
}

export default connect(mapState)(Bookmark);
