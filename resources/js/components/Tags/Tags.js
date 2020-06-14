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
        const tags = this.props.tags;
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
    changeSelectTag(id = null, name = "ブックマーク一覧") {
        this.props.doChangeSelectTags(id, name);
        //ステートの更新
        this.setState({
            select_id: id,
            select_name: name
        });
    }

    //タグの追加、変更、削除などが起こったときのステートとの連携
    doChangeTags(tags = this.props.tags) {
        //今選択しているタグに変更があるかをチェックするため、ステートのselect_idを用いて、取得したtagデータから取得する
        const selectTag =
            tags.filter(tag => {
                return tag.id === this.state.select_id;
            }) || null;

        if (!selectTag) {
            this.setState({
                tags: tags,
                select_id: null,
                select_name: "ブックマーク一覧",
                newInput: false
            });
        } else if (this.state.select_name !== selectTag.name) {
            this.setState({
                tags: tags,
                select_name: selectTag.name,
                newInput: false
            });
        } else {
            this.setState({
                tags: tags,
                newInput: false
            });
        }
    }

    //タグ消去時の動き
    doDelete(tags = this.props.tags) {
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

    render() {
        return (
            <div className="navi">
                <div
                    className="bookmark-all"
                    onClick={this.props.getUserBookmarks}
                >
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
                        <AddTag after={tags => this.doChangeTags(tags)} />
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
