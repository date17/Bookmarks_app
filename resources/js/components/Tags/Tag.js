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
        this.selectTag = this.selectTag.bind(this);
        this.afterDelete = this.afterDelete.bind(this);
        this.doChangeFixed = this.doChangeFixed.bind(this);
        this.doCancelFixed = this.doCancelFixed.bind(this);
        this.doChangeTagName = this.doChangeTagName.bind(this);
        this.tagRender = this.tagRender.bind(this);
        this.changeTagRender = this.changeTagRender.bind(this);
        this.doFixedAction = this.doFixedAction.bind(this);
    }

    selectTag() {
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

    doFixedAction(e) {
        e.preventDefault();
        const params = {
            id: this.props.id,
            name: this.state.fixedName,
            user_id: this.props.user.id
        };
        axios
            .put("/api/tag", params)
            .then(res => {
                console.log(res.data);
                this.doChangeTags(res.data);
            })
            .catch(e => {
                console.log(e);
            });
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

    doChangeTags(tags) {
        console.log("Tag doChangeTags");
        this.props.doChange(tags);
        this.setState({
            fixed: false
        });
    }

    tagRender() {
        return (
            <div className="tag">
                <div className="name">
                    <FontAwesomeIcon icon={["fas", "folder"]} />
                    <span onClick={this.selectTag}>
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
                <form onSubmit={this.doFixedAction}>
                    <div className="input">
                        <input
                            type="text"
                            value={this.state.fixedName}
                            onChange={this.doChangeTagName}
                            required
                        />
                    </div>
                    <div className="btn">
                        <span>
                            <FontAwesomeIcon
                                icon={["fas", "check"]}
                                type="submit"
                            />
                        </span>
                        <span>
                            <FontAwesomeIcon
                                icon={["far", "window-close"]}
                                onClick={this.doCancelFixed}
                            />
                        </span>
                    </div>
                </form>
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
