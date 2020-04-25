import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteTag from "./DeleteTag";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";

const mapState = state => {
    return state;
};

const btnStyle = {
    width: "15%"
};

class Tag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
            fixedName: this.props.name
        };
        this.selectBookmarks = this.selectBookmarks.bind(this);
        this.afterDelete = this.afterDelete.bind(this);
        this.doChangeFixed = this.doChangeFixed.bind(this);
        this.doCancelFixed = this.doCancelFixed.bind(this);
        this.doChangeTagName = this.doChangeTagName.bind(this);
        this.tagRender = this.tagRender.bind(this);
        this.changeTagRender = this.changeTagRender.bind(this);
        this.doFixedAction = this.doFixedAction.bind(this);
    }

    selectBookmarks() {
        //親の関数をpropsで受け取りこの関数内で実行する
        this.props.doClick(this.props.id, this.props.name);
    }

    afterDelete(tags) {
        console.log("tag afterDelete");
        this.props.after(tags);
    }

    doChangeFixed() {
        const fixed = this.state.fixed;

        if (fixed === false) {
            this.setState({
                fixed: true
            });
        }
    }

    doFixedAction() {
        if (this.state.fixedName === "") {
            console.log("fixed name is empty!!");
        } else {
            axios
                .put("/api/tag", {
                    id: this.props.id,
                    name: this.state.fixedName,
                    user_id: this.props.user.id
                })
                .then(res => {
                    console.log(res.data);
                    this.doChangeTags(this.props.id, res.data);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    }

    doCancelFixed() {
        this.setState({
            fixed: false,
            fixedName: this.props.name
        });
    }

    doChangeTagName(e) {
        console.log(e.target.value);
        this.setState({
            fixedName: e.target.value
        });
    }

    doChangeTags(id = null, tags) {
        console.log("Tag doChangeTags");
        this.props.doChange(id, tags);
        this.setState({
            fixed: false
        });
    }

    tagRender() {
        return (
            <div className="tag">
                <div className="name">
                    <FontAwesomeIcon icon={["fas", "folder"]} />
                    <span onClick={this.selectBookmarks}>
                        {this.props.name.substr(0, 7)}
                    </span>
                </div>
                <div className="btn">
                    <span>
                        <FontAwesomeIcon
                            icon={["fas", "edit"]}
                            onClick={this.doChangeFixed}
                        />
                    </span>
                    <span>
                        <DeleteTag
                            id={this.props.id}
                            after={tags => {
                                this.afterDelete(tags);
                            }}
                        />
                    </span>
                </div>
            </div>
        );
    }

    changeTagRender() {
        return (
            <div className="tag">
                <div className="input">
                    <input
                        type="text"
                        value={this.state.fixedName}
                        onChange={this.doChangeTagName}
                    />
                </div>
                <div className="btn">
                    <span>
                        <FontAwesomeIcon
                            icon={["fas", "check"]}
                            onClick={this.doFixedAction}
                        />
                    </span>
                    <span>
                        <FontAwesomeIcon
                            icon={["far", "window-close"]}
                            onClick={this.doCancelFixed}
                        />
                    </span>
                </div>
            </div>
        );
    }

    render() {
        return (
            <>
                {this.state.fixed === false
                    ? this.tagRender()
                    : this.changeTagRender()}
            </>
        );
    }
}

export default connect(mapState)(Tag);
