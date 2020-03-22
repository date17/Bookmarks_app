import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteBookmark from "./DeleteBookmark";
import AddBookmark from "./AddBookmark";

const mapState = state => {
    return state;
};

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false,
            add: false
        };
        this.doChangeDetail = this.doChangeDetail.bind(this);
        this.showBookmark = this.showBookmark.bind(this);
        this.selectTitle = this.selectTitle.bind(this);
        this.doChangeAdd = this.doChangeAdd.bind(this);
    }

    doChangeDetail() {
        const detail = !this.state.detail;

        this.setState({
            detail: detail
        });
    }

    doChangeAdd() {
        const add = !this.state.add;
        this.setState({
            add: add
        });
    }

    selectTitle() {
        const title = this.props.data.name;
        if (title == undefined || title == "") {
            console.log("select title false");
            return <div className="select">からです</div>;
        } else {
            console.log("select title true");
            return <div className="select">{title}</div>;
        }
    }

    showBookmark() {
        console.log("showBookmark");
        console.log(this.props.data.bookmark);
        const bookmarks = this.props.data.bookmark;
        if (!bookmarks || bookmarks.length === 0) {
            return (
                <div className="not-bookmark">ブックマークはございません</div>
            );
        } else {
            let i = 0;
            return bookmarks.map(value => {
                return (
                    <div className="bookmark" key={i++}>
                        <div
                            className="bookmark-title"
                            onClick={this.doChangeDetail}
                        >
                            {value.title}
                        </div>
                        {this.state.detail ? (
                            <div className="detail">
                                <div className="url">
                                    URL:<span>{value.url}</span>
                                </div>
                                <div>
                                    <DeleteBookmark id={value.id} />
                                </div>
                            </div>
                        ) : (
                            <div></div>
                        )}
                    </div>
                );
            });
        }
    }

    render() {
        console.log("bookmark render");
        console.log(this.props.data.name);
        return (
            <div className="bookmarks">
                {this.selectTitle()}
                <div className="add" onClick={this.doChangeAdd}>
                    ブックマークの追加
                </div>
                {this.state.tag ? (
                    <AddBookmark tag={this.props.user.tags} />
                ) : (
                    <div></div>
                )}
                {this.showBookmark()}
            </div>
        );
    }
}

export default connect(mapState)(Bookmark);
