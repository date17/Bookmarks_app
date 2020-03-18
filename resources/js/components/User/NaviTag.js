import React, { Component } from "react";
import { connect } from "react-redux";
import Tag from "./Tag";
import AddTag from "./AddTag";

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
        //mapで回す
        return tags.map(tag => {
            return <Tag tag={tag} />;
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
                    <i className="fas fa-plus"></i>
                    <span onClick={this.showNewTagInput}>タグの追加</span>
                </div>
                {this.state.newInput ? <AddTag /> : <></>}
                <div className="tags">{this.getTag()}</div>
            </div>
        );
    }
}

export default connect(mappingState)(NaviTag);
