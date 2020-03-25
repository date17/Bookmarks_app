import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Bookmark from "./Bookmark";
import NaviTag from "./NaviTag";
import Header from "../Layout/Header";

function mapState(state) {
    return state;
}

class Mypage extends Component {
    constructor(props) {
        super(props);
        // this.getBookmark = this.getBookmark.bind(this);
        // this.getTag = this.getTag.bind(this);
        // this.getAddBookmark = this.getAddBookmark.bind(this);
    }

    // getBookmark(bookmarks) {
    //     let key = 0;
    //     return bookmarks.map(bookmark => {
    //         key += 1;
    //         return (
    //             <Bookmark
    //                 id={bookmark.id}
    //                 title={bookmark.title}
    //                 url={bookmark.url}
    //                 tag={bookmark.tag}
    //                 key={key}
    //             />
    //         );
    //     });
    // }

    // getTag(tags) {
    //     let key = 0;
    //     return tags.map(tag => {
    //         key += 1;
    //         return <Tag id={tag.id} name={tag.name} key={key} />;
    //     });
    // }

    // getAddBookmark(tags) {
    //     console.log("getAddBookmark of tags is ");
    //     console.log(tags);
    //     return <AddBookmark tags={tags} />;
    // }

    // getAddTag() {
    //     return <AddTag />;
    // }

    render() {
        return (
            <div>
                <Header user_name={this.props.user.name} />
                <div className="mypage-main">
                    {/* <NaviTag />
                    <Bookmark data={this.props.user.select} /> */}
                    Hello
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
