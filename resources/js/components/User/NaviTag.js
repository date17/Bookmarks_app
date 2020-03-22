import React, { Component } from "react";
import { connect } from "react-redux";
import Tag from "./Tag";
import AddTag from "./AddTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mappingState = state => {
    return state;
};

class NaviTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newInput: false
        };
        this.getTag = this.getTag.bind(this);
        this.showNewTagInput = this.showNewTagInput.bind(this);
    }

    getTag() {
        //ストアのタグ情報を代入
        const tags = this.props.user.tags;
        let i = 0;
        //mapで回す
        return tags.map(tag => {
            return <Tag tag={tag} key={i++} />;
        });
    }

    showNewTagInput() {
        const newInput = !this.state.newInput;
        this.setState({
            newInput: newInput
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
