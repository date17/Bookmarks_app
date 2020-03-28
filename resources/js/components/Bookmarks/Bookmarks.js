import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteBookmark from "./DeleteBookmark";
import Bookmark from "./Bookmark";
import AddBookmark from "./AddBookmark";

const mapState = state => {
    return state;
};

class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false,
            add: false
        };
        this.showBookmark = this.showBookmark.bind(this);
        this.selectTitle = this.selectTitle.bind(this);
        this.doChangeAdd = this.doChangeAdd.bind(this);
        this.afterAdd = this.afterAdd.bind(this);
    }

    doChangeAdd() {
        const add = !this.state.add;
        this.setState({
            add: add
        });
    }

    selectTitle() {
        const title = this.props.tag_name;
        if (title == undefined || title == "") {
            console.log("select title false");
            return <div className="select">からです</div>;
        } else {
            console.log("select title true");
            return <div className="select">{title}</div>;
        }
    }

    //デフォルトでpropsを使う
    showBookmark() {
        const bookmarks = this.props.bookmarks;
        if (!bookmarks || bookmarks.length === 0) {
            return (
                <div className="not-bookmark">ブックマークはございません</div>
            );
        } else {
            let i = 0;
            return bookmarks.map(value => {
                return (
                    <Bookmark
                        id={value.id}
                        title={value.title}
                        url={value.url}
                        tag_id={this.props.tag_id}
                        key={value.id}
                        after={this.afterAdd}
                    />
                );
            });
        }
    }

    afterAdd(id, bookmarks) {
        //Mypageコンポーネントのbookmarksステートを変更することで表示するブックマークを更新する
        this.props.changeBookmarks(id, bookmarks);
        this.setState({
            add: false
        });
    }

    render() {
        return (
            <div className="bookmarks">
                {this.selectTitle()}
                <div className="add" onClick={this.doChangeAdd}>
                    ブックマークの追加
                </div>
                {this.state.add ? (
                    <AddBookmark
                        tag_id={this.props.tag_id}
                        tag_name={this.props.tag_name}
                        after={this.afterAdd}
                    />
                ) : (
                    <div></div>
                )}
                {this.showBookmark()}
            </div>
        );
    }
}

export default connect(mapState)(Bookmarks);
