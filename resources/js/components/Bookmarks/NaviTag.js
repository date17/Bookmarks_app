import React, { Component } from "react";
import { connect } from "react-redux";
import Tag from "../User/Tag";
import AddTag from "./AddTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const mappingState = state => {
    return state;
};

class NaviTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newInput: false,
            tags: []
        };
        this.getTag = this.getTag.bind(this);
        this.showNewTagInput = this.showNewTagInput.bind(this);
    }

    getTag() {
        //ストアのタグ情報を代入
        const tags = this.state.tags;
        if (tags.length > 0) {
            let i = 0;
            //mapで回す
            return tags.map(tag => {
                return <Tag tag={tag} key={i++} />;
            });
        }
    }

    showNewTagInput() {
        const newInput = !this.state.newInput;
        this.setState({
            newInput: newInput
        });
    }

    componentDidMount() {
        const user_id = this.props.user.id;
        axios
            .get("/api/tag", {
                params: {
                    user_id: user_id
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
            <div className="navi">
                <div className="newNavi">
                    {/* <FontAwesomeIcon icon={["fas", "plus"]} /> */}
                    <span onClick={this.showNewTagInput}>タグの追加</span>
                </div>
                {this.state.newInput ? <AddTag /> : <></>}
                <div className="bookmark-all">ブックマーク一覧</div>
                <div className="tags">
                    <div className="label">タグ一覧</div>
                    {this.getTag()}
                </div>
            </div>
        );
    }
}

export default connect(mappingState)(NaviTag);
