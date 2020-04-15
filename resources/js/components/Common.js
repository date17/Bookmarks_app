import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "./Layout/Header";
import axios from "axios";

const mappingState = state => {
    return state;
};

const count = 10;

class Common extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [],
            page: 0,
            error: ""
        };

        this.getBookmarks = this.getBookmarks.bind(this);
        this.checkBookmarks = this.checkBookmarks.bind(this);
    }

    componentDidMount() {
        axios
            .get("/api/common", {
                params: {
                    page: this.state.page,
                    count: count
                }
            })
            .then(res => {
                console.log(res.data);
                this.setState({
                    bookmarks: res.data
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    error: e.message
                });
            });
    }

    checkBookmarks() {
        console.log("checkBookmarks");
        console.log(this.state.bookmarks);
        if (this.state.bookmarks > 0) {
            console.log("true");
            return true;
        } else {
            console.log("false");
            return false;
        }
    }

    getBookmarks() {
        console.log("getBookmarks");

        const bookmarks = this.state.bookmarks;

        if (bookmarks.length > 0) {
            console.log("ok");
            return bookmarks.map(bookmark => {
                return (
                    <div className="bookmark" key={bookmark.id}>
                        <a href={bookmark.url} target="_blank">
                            {bookmark.title}
                        </a>
                    </div>
                );
            });
        } else {
            return (
                <div>
                    <div>ブックマークはございません</div>
                    <div>ブックマークはございません</div>
                    <div>ブックマークはございません</div>
                    <div>ブックマークはございません</div>
                    <div>ブックマークはございません</div>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <Header
                    title="共有ページ"
                    url="/mypage"
                    linkTitle="マイページ"
                />
                <div className="common-page">
                    <div className="bookmarks">{this.getBookmarks()}</div>
                </div>
            </div>
        );
    }
}

export default connect(mappingState)(Common);
