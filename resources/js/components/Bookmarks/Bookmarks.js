import React, { Component } from "react";
import { connect } from "react-redux";
import Bookmark from "./Bookmark";
import AddBookmark from "./AddBookmark";

const mapState = state => {
    return state;
};

class Bookmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookmarks: [],
            detail: false,
            add: false
        };
        this.showBookmark = this.showBookmark.bind(this);
        this.selectTitle = this.selectTitle.bind(this);
        this.doChangeAdd = this.doChangeAdd.bind(this);
        this.afterAdd = this.afterAdd.bind(this);
        this.doAddCancel = this.doAddCancel.bind(this);
        this.selectBookmarks = this.selectBookmarks.bind(this);
    }

    doChangeAdd() {
        const add = !this.state.add;
        this.setState({
            add: add
        });
    }

    doAddCancel() {
        this.setState({
            add: false
        });
    }

    selectTitle() {
        const title = this.props.tag_name;
        if (title == undefined || title == "") {
            return <div className="select">NO SELECT</div>;
        } else {
            return <div className="select">{title}</div>;
        }
    }

    //デフォルトでpropsを使う
    showBookmark() {
        const bookmarks = this.state.bookmarks;
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
                        tag_id={value.tag_id}
                        isOpen={value.isOpen}
                        key={value.id}
                        tags={this.props.tags}
                        afterDelete={this.selectBookmarks}
                    />
                );
            });
        }
    }

    afterAdd() {
        //Mypageコンポーネントのbookmarksステートを変更することで表示するブックマークを更新する
        this.setState({
            add: false
        });
        //Bookmarkの更新
        this.selectBookmarks();
    }

    selectBookmarks() {
        const tag_id = this.props.tag_id;
        const user_id = this.props.user.id;
        axios
            .get("api/selectTag", {
                params: {
                    tag_id: tag_id,
                    user_id: user_id
                }
            })
            .then(res => {
                console.log(res.data);
                this.setState({ bookmarks: res.data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    componentDidMount() {
        const user_id = this.props.user.id;
        const params = {
            user_id: user_id
        };

        axios
            .get("/api/bookmark", {
                params
            })
            .then(res => {
                console.log(res);

                this.setState({ bookmarks: res.data });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div className="bookmarks">
                {this.selectTitle()}
                <div className="bookmark-list">
                    <div className="add">
                        <span onClick={this.doChangeAdd}>新規登録</span>
                    </div>
                    {this.state.add ? (
                        <AddBookmark
                            tag_id={this.props.tag_id}
                            tag_name={this.props.tag_name}
                            tags={this.props.tags}
                            cancel={this.doAddCancel}
                            after={this.afterAdd}
                        />
                    ) : (
                        <div></div>
                    )}
                    {this.showBookmark()}
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Bookmarks);
