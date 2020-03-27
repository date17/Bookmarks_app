import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Bookmark from "./Bookmark";
import Tag from "./Tag";
// import NaviTag from "./NaviTag";
import Header from "../Layout/Header";
import axios from "axios";

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
        this.getTag = this.getTag.bind(this);
        this.showNewTagInput = this.showNewTagInput.bind(this);
        this.selectBookmarks = this.selectBookmarks.bind(this);
        this.doChangeBookmarks = this.doChangeBookmarks.bind(this);
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
                        id={tag.id}
                        name={tag.name}
                        doClick={this.selectBookmarks}
                        key={tag.id}
                    />
                );
            });
        }
    }

    selectBookmarks(id, name) {
        console.log("selectBookmarks");
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

    showNewTagInput() {
        const newInput = !this.state.newInput;
        this.setState({
            newInput: newInput
        });
    }

    doChangeBookmarks(tag_id, bookmarks) {
        if (this.state.select_id == tag_id) {
            console.log("doChangeBookmarks state select_id === tag_id");
            this.setState({
                bookmarks: bookmarks
            });
        }
    }

    componentDidMount() {
        const user_id = this.props.user.id;
        axios
            .get("/api/tag", {
                params: {
                    id: user_id
                }
            })
            .then(res => {
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
                <Header user_name={this.props.user.name} />
                <div className="mypage-main">
                    <div className="navi">
                        <div className="newNavi">
                            {/* <FontAwesomeIcon icon={["fas", "plus"]} /> */}
                            <span onClick={this.showNewTagInput}>
                                タグの追加
                            </span>
                        </div>
                        {this.state.newInput ? <AddTag /> : <></>}
                        <div className="bookmark-all">ブックマーク一覧</div>
                        <div className="tags">
                            <div className="label">タグ一覧</div>
                            {this.getTag()}
                        </div>
                    </div>
                    <Bookmark
                        tag_id={this.state.select_id}
                        tag_name={this.state.select_name}
                        bookmarks={this.state.bookmarks}
                        changeBookmarks={this.doChangeBookmarks}
                    />
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
