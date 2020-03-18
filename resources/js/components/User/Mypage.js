import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Logout from "./Logout";
import Bookmark from "./Bookmark";
import AddBookmark from "./AddBookmark";
import Tag from "./Tag";
import AddTag from "./AddTag";
import axios from "axios";
import NaviTag from "./NaviTag";
import Header from "../Layout/Header";

function mapState(state) {
    return state;
}

class Mypage extends Component {
    constructor(props) {
        super(props);
        this.getBookmark = this.getBookmark.bind(this);
        this.getTag = this.getTag.bind(this);
        this.getAddBookmark = this.getAddBookmark.bind(this);
    }

    getBookmark(bookmarks) {
        let key = 0;
        return bookmarks.map(bookmark => {
            key += 1;
            return (
                <Bookmark
                    id={bookmark.id}
                    title={bookmark.title}
                    url={bookmark.url}
                    tag={bookmark.tag}
                    key={key}
                />
            );
        });
    }

    getTag(tags) {
        let key = 0;
        return tags.map(tag => {
            key += 1;
            return <Tag id={tag.id} name={tag.name} key={key} />;
        });
    }

    getAddBookmark(tags) {
        console.log("getAddBookmark of tags is ");
        console.log(tags);
        return <AddBookmark tags={tags} />;
    }

    getAddTag() {
        return <AddTag />;
    }

    render() {
        if (!this.props.login) {
            return <Redirect to="/login" />;
        }
        return (
            <div>
                {/* <h1>Mypage</h1>
                <div>
                    <Link to="/login">ログイン</Link>
                    <h2>LOGIN USER</h2>
                    <div>{this.props.user.id}</div>
                    <div>{this.props.user.name}</div>
                    <div>{this.props.user.email}</div>
                </div>
                <Logout />
                <hr /> */}
                {/* <h2>--BOOKMARK--</h2>
                <div>{this.getBookmark(this.props.user.bookmarks)}</div>
                <hr />
                <h2>--ADD BOOKMARK--</h2>
                {this.getAddBookmark(this.props.user.tags)}
                <hr />
                <h2>--TAG--</h2>
                <div>{this.getTag(this.props.user.tags)}</div>
                <hr />
                <h2>--ADD TAG--</h2>
                <div>{this.getAddTag()}</div> */}
                <Header user_name={this.props.user.name} />
                <NaviTag />
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
