import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Bookmarks from "./Bookmarks/Bookmarks";
import Tag from "./Tags/Tag";
import AddTag from "./Tags/AddTag";
import Header from "./Layout/Header";
import axios from "axios";
import "../../sass/main.scss";

function mapState(state) {
    return state;
}

class Mypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            newInput: false,
            select_id: null,
            select_name: "",
            bookmarks: []
        };
        this.getBookmarks = this.getBookmarks.bind(this);
        this.getTag = this.getTag.bind(this);
        this.showNewTagInput = this.showNewTagInput.bind(this);
        this.selectBookmarks = this.selectBookmarks.bind(this);
        this.doChangeBookmarks = this.doChangeBookmarks.bind(this);
        this.doChangeTags = this.doChangeTags.bind(this);
        this.doFixedTags = this.doFixedTags.bind(this);
    }

    getTag() {
        //ストアのタグ情報を代入
        const tags = this.state.tags;
        if (tags.length > 0) {
            let i = 0;
            //mapで回す
            return tags.map(tag => {
                return (
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        doClick={this.selectBookmarks}
                        doChange={(id = null, tags) => {
                            this.doFixedTags(id, tags);
                        }}
                        after={tags => {
                            this.afterDeleteTag(tags);
                        }}
                    />
                );
            });
        }
    }

    getBookmarks() {
        if (this.state.select_name === "ブックマーク一覧") {
            console.log("show now all your bookmarks");
        } else {
            axios
                .get("/api/bookmark", {
                    params: {
                        user_id: this.props.user_id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        select_id: null,
                        select_name: "ブックマーク一覧",
                        bookmarks: res.data
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    showNewTagInput() {
        const newInput = !this.state.newInput;
        this.setState({
            newInput: newInput
        });
    }

    selectBookmarks(id, name) {
        console.log("selectBookmarks");
        if (id === this.state.select_id) {
            console.log("select_id is common!");
        } else {
            console.log("select_id is change so get bookmark data");
            const select_id = id;
            const select_name = name;
            console.log(select_id);
            console.log(select_name);
            axios
                .get("/api/selectTag", {
                    params: {
                        user_id: this.props.user.id,
                        tag_id: select_id
                    }
                })
                .then(res => {
                    console.log("Mypage selectBookmarks res data");
                    console.log(res.data);
                    this.setState({
                        bookmarks: res.data.bookmark,
                        select_id: select_id,
                        select_name: select_name
                    });
                })
                .catch(e => {
                    console.log(e);
                    this.setState({
                        select_id: select_id,
                        select_name: select_name
                    });
                });
        }
    }

    doChangeBookmarks(tag_id, bookmarks) {
        if (this.state.select_id == tag_id) {
            console.log("doChangeBookmarks state select_id === tag_id");
            this.setState({
                bookmarks: bookmarks
            });
        } else if (
            this.state.select_id !== tag_id &&
            this.state.select_id === null
        ) {
            console.log(
                "doChangeBookmarks state select_id is not common tag_id and select_id is null"
            );

            axios
                .get("/api/bookmark", {
                    params: {
                        user_id: this.props.user.id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        select_id: null,
                        select_name: "ブックマーク一覧",
                        bookmarks: res.data
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        } else if (
            this.state.select_id !== tag_id &&
            this.state.select_id !== null
        ) {
            console.log(
                "doChangeBookmarks state select_id is not common tag_id "
            );

            console.log("user_id is " + this.props.user.id);
            console.log("select_id is " + this.state.select_id);

            axios
                .get("/api/selectTag", {
                    params: {
                        user_id: this.props.user.id,
                        tag_id: this.state.select_id
                    }
                })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        bookmarks: res.data.bookmark
                    });
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    doChangeTags(tags) {
        this.setState({
            tags: tags,
            newInput: false
        });
    }

    doFixedTags(id, tags) {
        if (this.state.select_id === id) {
            const select_tag = tags.filter(tag => {
                return tag.id === id;
            });
            console.log(select_tag[0].name);
            this.setState({
                tags: tags,
                select_name: select_tag[0].name
            });
        } else {
            this.setState({
                tags: tags
            });
        }
    }

    afterDeleteTag(tags) {
        console.log("mypage afterDeleteTag");
        this.setState({
            tags: tags,
            select_id: null,
            select_name: "",
            bookmarks: []
        });
    }

    componentDidMount() {
        const user_id = this.props.user.id;
        // this.getBookmarks();
        axios
            .get("/api/tag", {
                params: {
                    id: user_id
                }
            })
            .then(res => {
                console.log("componentdidmount");
                console.log(res.data);
                //ステートの更新
                this.setState({
                    tags: res.data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <Header
                    user_name={this.props.user.name}
                    title="マイページ"
                    url="/common"
                    linkTitle="共有ページ"
                />
                <div className="mypage-main">
                    <div className="navi">
                        <div
                            className="bookmark-all"
                            onClick={this.getBookmarks}
                        >
                            <FontAwesomeIcon icon={["fas", "folder"]} />
                            <span>ブックマーク一覧</span>
                        </div>
                        <div className="tags">
                            <div className="label">
                                <FontAwesomeIcon icon={["fas", "folder"]} />
                                <span className="lang">タグ一覧</span>
                                <span className="icon-plus">
                                    <FontAwesomeIcon
                                        icon={["fas", "plus"]}
                                        onClick={this.showNewTagInput}
                                    />
                                </span>
                            </div>
                            {this.state.newInput ? (
                                <AddTag after={this.doChangeTags} />
                            ) : (
                                <></>
                            )}
                            {this.getTag()}
                        </div>
                    </div>
                    <Bookmarks
                        allTags={this.state.tags}
                        tag_id={this.state.select_id}
                        tag_name={this.state.select_name}
                        bookmarks={this.state.bookmarks}
                        changeBookmarks={(tag_id, bookmarks) => {
                            this.doChangeBookmarks(tag_id, bookmarks);
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
