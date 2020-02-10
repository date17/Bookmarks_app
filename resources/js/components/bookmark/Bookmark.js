import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import AddBookmark from "./bookmark/AddBookmark";
import FindBookmark from "./bookmark/FindBookmark";
import Tag from "../tag/Tag";
import AddTag from "../tag/AddTag";

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            openTag: ""
        };
    }

    //ログインしているユーザのタグをLaravel側から取り出す
    componentDidMount() {
        axios
            .get("api/getTags")
            .then(res => {
                this.setState({
                    tags: res.data,
                    openTag: ""
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <Tag tags={this.state.tags} />
            </div>
        );
    }
}
