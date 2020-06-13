import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import Tag from "./Tag";
import AddTag from "./AddTag";
import { connect } from "react-redux";

const mapState = state => {
    return state;
};

class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            newInput: false,
            select_id: null,
            select_name: ""
        };

        this.getTags = this.getTags.bind(this);
        this.doChangeTags = this.doChangeTags.bind(this);
        this.toggleNewTagInput = this.toggleNewTagInput.bind(this);
        this.changeSelectTag = this.changeSelectTag.bind(this);
        this.doDelete = this.doDelete.bind(this);
    }

    getTags() {
        //ストアのタグ情報を代入
        const tags = this.state.tags;
        if (tags.length > 0) {
            let i = 0;
            //mapで回す
            return tags.map(tag => {
                return (
                    <Tag
                        key={tag.id}
                        id={tag.id}
                        name={tag.name}
                        doClick={(id, name) => this.changeSelectTag(id, name)}
                        doChange={tags => {
                            this.doChangeTags(tags);
                        }}
                        doDelete={tags => this.doDelete(tags)}
                    />
                );
            });
        }
    }

    //親コンポーネントの関数呼び出し（選択するタグの変更）
    changeSelectTag(id, name) {
        this.props.doChangeSelectTags(id, name);
        //ステートの更新
        this.setState({
            select_id: id,
            select_name: name
        });
    }

    //タグの追加、変更、削除などが起こったときのステートとの連携
    doChangeTags(tags = this.state.tags) {
        //今選択しているタグに変更があるかをチェックするため、ステートのselect_idを用いて、取得したtagデータから取得する
        selectTag = tags.filter(tag => {
            return tag.id === this.state.select_id;
        });

        if (this.state.select_name !== selectTag.name) {
            this.setState({
                tags: tags,
                select_name: selectTag.name
            });
        } else if (!selectTag) {
            this.setState({
                tags: tags,
                select_id: null,
                select_name: "ブックマーク一覧"
            });
        } else {
            this.setState({
                tags: tags
            });
        }
    }

    //タグ消去時の動き
    doDelete(tags = this.state.tags) {
        this.props.doChangeSelectTag(null, "ブックマーク一覧");

        this.setState({
            tags: tags,
            select_id: null,
            select_name: "ブックマーク一覧"
        });
    }

    toggleNewTagInput() {
        const newInput = !this.state.newInput;
        this.setState({
            newInput: newInput
        });
    }

    componentDidUpdate(prevProps) {
        //props.tagsの更新比較
        if (this.props.tags !== prevProps.tags) {
            this.setState({ tags: this.props.tags });
        }
    }

    render() {
        return (
            <div className="navi">
                <div className="bookmark-all" onClick={this.getBookmarks}>
                    <FontAwesomeIcon icon={["fas", "folder"]} />
                    <span>ブックマーク一覧</span>
                </div>
                <div className="tags">
                    <div className="label">
                        <FontAwesomeIcon icon={["fas", "folder"]} />
                        <span className="lang">タグ一覧</span>
                        <span className="icon-plus">
                            <FontAwesomeIcon
                                icon={["fas", "plus"]}
                                onClick={this.toggleNewTagInput}
                            />
                        </span>
                    </div>
                    {this.state.newInput ? (
                        <AddTag after={this.doChangeTags} />
                    ) : (
                        <></>
                    )}
                    {this.getTags()}
                </div>
            </div>
        );
    }
}

export default connect(mapState)(Tags);
