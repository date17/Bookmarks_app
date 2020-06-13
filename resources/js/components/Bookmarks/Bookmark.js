import React, { Component } from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DeleteBookmark from "./DeleteBookmark";
import axios from "axios";

const mapState = state => {
    return state;
};

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmark: {
                id: this.props.id,
                title: this.props.title,
                url: this.props.url,
                tag_id: this.props.tag_id,
                isOpen: this.props.isOpen
            },
            fixTitle: this.props.title,
            fixUrl: this.props.url,
            fixTag: this.props.tag_id,
            fixIsOpen: this.changeIsOpenIntToBool(this.props.isOpen),
            fixed: false,
            detail: false
        };

        this.toggleDetail = this.toggleDetail.bind(this);
        this.toggleFixForm = this.toggleFixForm.bind(this);
        this.doChangeFixTitle = this.doChangeFixTitle.bind(this);
        this.doChangeFixUrl = this.doChangeFixUrl.bind(this);
        this.doChangeFixTag = this.doChangeFixTag.bind(this);
        this.doChangeFixIsOpen = this.doChangeFixIsOpen.bind(this);
        this.doFixAction = this.doFixAction.bind(this);
        this.afterDelete = this.afterDelete.bind(this);
        this.fixedForm = this.fixedForm.bind(this);
        this.detailForm = this.detailForm.bind(this);
        this.changeIsOpenIntToBool = this.changeIsOpenIntToBool.bind(this);
        this.showIsOpen = this.showIsOpen.bind(this);
        this.optionTag = this.optionTag.bind(this);
    }

    //0,1で取得するisOpenをboolean型に変換する
    changeIsOpenIntToBool(isOpen = null) {
        console.log(isOpen);
        if (isOpen === 0) {
            console.log("changeIsOpenIntToBool isOpen 0");
            return false;
        } else if (isOpen === 1) {
            console.log("changeIsOpenIntToBool isOpen 1");
            return true;
        } else {
            console.log("changeIsOpenIntToBool isOpenが取得できませんでした");
        }
    }

    //isOpenについて表示する部分
    showIsOpen(isOpen = null) {
        if (isOpen === 0) {
            return "共有サイトに公開しない";
        } else if (isOpen === 1) {
            return "共有サイトに公開する";
        } else {
            console.log("isOpenが取得できませんでした");
        }
    }

    toggleDetail() {
        const detail = !this.state.detail;

        this.setState({
            detail: detail
        });
    }

    toggleFixForm() {
        console.log("Bookmark toggleFixForm");
        const fixed = this.state.fixed;

        if (fixed === true) {
            console.log("change false");
            this.setState({
                fixed: false,
                fixTitle: this.state.bookmark.title,
                fixUrl: this.state.bookmark.url,
                fixTag: this.state.bookmark.tag_id,
                fixIsOpen: this.changeIsOpenIntToBool(
                    this.state.bookmark.isOpen
                )
            });
        } else if (fixed === false) {
            console.log("change true");
            this.setState({
                fixed: true
            });
        }
    }

    optionTag() {
        return (
            <>
                <option disabled value="" key="0">
                    選択してください
                </option>
                {this.props.tags.map(tag => {
                    return this.state.bookmark.tag_id === tag.id ? (
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

    doChangeFixTitle(e) {
        console.log("doChangeFixTitle");
        console.log(e.target.value);
        this.setState({
            fixTitle: e.target.value
        });
    }

    doChangeFixUrl(e) {
        console.log("doChangeFixUrl");
        console.log(e.target.value);
        this.setState({
            fixUrl: e.target.value
        });
    }

    doChangeFixTag(e) {
        console.log("doChangeFixTag");
        console.log(e.target.value);
        this.setState({
            fixTag: e.target.value
        });
    }

    doChangeFixIsOpen() {
        console.log("doChangeFixIsOpen");
        console.log(this.state.fixIsOpen);
        const isOpen = !this.state.fixIsOpen;

        this.setState({
            fixIsOpen: isOpen
        });
    }

    doFixAction(e) {
        e.preventDefault();
        console.log(this.props.id);
        console.log(this.props.title);
        console.log(this.props.url);
        const params = {
            id: this.props.id,
            title: this.state.fixTitle,
            url: this.state.fixUrl,
            tag_id: this.state.fixTag,
            isOpen: this.state.fixIsOpen,
            user_id: this.props.user.id
        };
        axios
            .put("/api/bookmark", params)
            .then(res => {
                console.log(res.data);
                //ステートの更新
                this.setState({
                    bookmark: res.data,
                    detail: false,
                    fixed: false,
                    fixTitle: res.data.title,
                    fixUrl: res.data.url,
                    fixTag: res.data.tag_id,
                    fixIsOpen: this.changeIsOpenIntToBool(res.data.isOpen)
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    afterDelete() {
        this.props.afterDelete();
    }

    fixedForm() {
        return (
            <div className="edit-form">
                <form onSubmit={this.doFixAction}>
                    <div className="edit-title">
                        <div className="label">TITLE</div>
                        <div className="input">
                            <input
                                type="text"
                                value={this.state.fixTitle}
                                onChange={this.doChangeFixTitle}
                                required
                            />
                        </div>
                    </div>
                    <div className="edit-url">
                        <div className="label">URL</div>
                        <div className="input">
                            <input
                                type="text"
                                value={this.state.fixUrl}
                                onChange={this.doChangeFixUrl}
                                required
                            />
                        </div>
                    </div>
                    <div className="edit-tag">
                        <div className="label">TAG</div>
                        <div className="select">
                            <select onChange={this.doChangeFixTag} required>
                                {this.optionTag()}
                            </select>
                        </div>
                    </div>
                    <div className="edit-isOpen">
                        {this.state.fixIsOpen === true ? (
                            <input
                                type="checkbox"
                                onClick={this.doChangeFixIsOpen}
                                value={this.state.fixIsOpen}
                                checked
                            />
                        ) : (
                            <input
                                type="checkbox"
                                onClick={this.doChangeFixIsOpen}
                                value={this.state.fixIsOpen}
                            />
                        )}
                        <span>共有サイトに公開する</span>
                    </div>
                    <div className="btn">
                        <button onClick={this.toggleFixForm}>キャンセル</button>
                        <button type="submit">変更</button>
                    </div>
                </form>
            </div>
        );
    }

    detailForm() {
        return (
            <>
                <div className="bookmark-short">
                    <div className="bookmark-title">
                        <a href={this.state.bookmark.url} target="_blank">
                            {this.state.bookmark.title}
                        </a>
                    </div>
                    <div className="btn-detail" onClick={this.toggleDetail}>
                        :
                    </div>
                </div>
                {this.state.detail ? (
                    <div className="detail">
                        <div className="url">
                            URL<span>{this.state.bookmark.url}</span>
                        </div>
                        <div className="isOpen">
                            {this.showIsOpen(this.state.bookmark.isOpen)}
                        </div>
                        <div className="btn">
                            <div>
                                <button onClick={this.toggleFixForm}>
                                    <FontAwesomeIcon icon={["fas", "edit"]} />
                                </button>
                            </div>
                            <DeleteBookmark
                                id={this.state.bookmark.id}
                                tag_id={this.state.bookmark.tag_id}
                                afterDelete={this.afterDelete}
                            />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </>
        );
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
