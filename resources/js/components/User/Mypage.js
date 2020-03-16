import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import Bookmark from "./Bookmark";
import AddBookmark from "./AddBookmark";
import Tag from "./Tag";
import AddTag from "./AddTag";
import axios from "axios";

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

    // componentDidMount() {
    // console.log(this.props.user.id);
    // const api = axios.create();
    // //複数のAPIを叩く
    // axios
    //     .all([
    //         api.get("/api/bookmark", {
    //             params: {
    //                 id: this.props.user.id
    //             }
    //         }),
    //         api.get("/api/tag", {
    //             params: {
    //                 id: this.props.user.id
    //             }
    //         })
    //     ])
    //     .then(([res1, res2]) => {
    //         //配列で受け取る（res1--bookmark, res2--tag）
    //         console.log(res1.data);
    //         console.log(res2.data);
    //         this.setState({
    //             bookmarks: res1.data,
    //             tags: res2.data
    //         });
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     });
    // }

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
        return (
            <div>
                <h1>Mypage</h1>
                <div>
                    <Link to="/login">ログイン</Link>
                    <h2>LOGIN USER</h2>
                    <div>{this.props.user.id}</div>
                    <div>{this.props.user.name}</div>
                    <div>{this.props.user.email}</div>
                </div>
                <Logout />
                <hr />
                <h2>--BOOKMARK--</h2>
                <div>{this.getBookmark(this.props.user.bookmarks)}</div>
                <hr />
                <h2>--ADD BOOKMARK--</h2>
                {this.getAddBookmark(this.props.user.tags)}
                <hr />
                <h2>--TAG--</h2>
                <div>{this.getTag(this.props.user.tags)}</div>
                <hr />
                <h2>--ADD TAG--</h2>
                <div>{this.getAddTag()}</div>
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
