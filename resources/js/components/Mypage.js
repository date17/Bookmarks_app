import React, { Component } from "react";
import { connect } from "react-redux";
import Tags from "./Tags/Tags";
import Bookmarks from "./Bookmarks/Bookmarks";
import Header from "./Layout/Header";
import axios from "axios";
import "../../sass/main.scss";
// import { Link, Redirect } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            select_name: ""
        };

        this.doChangeSelectTags = this.doChangeSelectTags.bind(this);
    }

    //選択しているタグの切り替えとステートの連携
    doChangeSelectTags(id = null, name = "ブックマーク一覧") {
        this.setState({
            select_id: id,
            select_name: name
        });
    }

    componentDidMount() {
        const user_id = this.props.user.id;
        // this.getBookmarks();
        axios
            .get("/api/info", {
                params: {
                    id: user_id
                }
            })
            .then(res => {
                console.log(res.data);
                //ステートの更新
                this.setState({
                    tags: res.data.tags,
                    select_id: null,
                    select_name: "ブックマーク一覧"
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
                    <Tags
                        tags={this.state.tags}
                        doChangeSelectTags={(id, name) => {
                            this.doChangeSelectTags(id, name);
                        }}
                    />
                    <Bookmarks
                        tags={this.state.tags}
                        tag_id={this.state.select_id}
                        tag_name={this.state.select_name}
                    />
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Mypage);
