import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

function mapState(state) {
    return state;
}

class AddBookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            url: "",
            tag_id: null
        };
        this.optionTag = this.optionTag.bind(this);
        this.doChangeTitle = this.doChangeTitle.bind(this);
        this.doChangeUrl = this.doChangeUrl.bind(this);
        this.doChangeTag = this.doChangeTag.bind(this);
        this.doAction = this.doAction.bind(this);
    }

    //Tag_idのoptionを作成する
    optionTag() {
        const tags = this.props.tags;
        return tags.map(tag => {
            return <option value={tag.id}>{tag.name}</option>;
        });
    }

    doChangeTitle(e) {
        console.log("doChangeTitle");
        console.log(e.target.value);
        this.setState({
            title: e.target.value
        });
    }
    doChangeUrl(e) {
        console.log("doChangeUrl");
        console.log(e.target.value);
        this.setState({
            url: e.target.value
        });
    }
    doChangeTag(e) {
        console.log("doChangeTag");
        console.log(e.target.value);
        this.setState({
            tag_id: e.target.value
        });
    }

    doAction() {
        const title = this.state.title;
        const url = this.state.url;
        const tag_id = this.state.tag_id;

        axios
            .post("/api/bookmark", {
                title: title,
                url: url,
                tag_id: tag_id,
                user_id: this.props.user.id,
                isOpen: false
            })
            .then(res => {
                console.log(res.data);
                // this.setState({
                //     title: "",
                //     url: "",
                //     tag_id: null,
                //     tags: res.data.tags
                // });
            })
            .catch(e => {
                console.log(e);
            });
    }

    //新しいpropsやstateを受け取ったとき
    // shouldComponentUpdate(nextProps, nextState) {
    //     this.setState({
    //         tags: nextProps.tags
    //     });
    // }

    render() {
        return (
            <div>
                ADD BOOKMARK FORM
                <dl>
                    <dt>TITLE</dt>
                    <dd>
                        <input
                            type="text"
                            onChange={this.doChangeTitle}
                            value={this.state.title}
                            required
                        />
                    </dd>
                    <dt>URL</dt>
                    <dd>
                        <input
                            type="url"
                            onChange={this.doChangeUrl}
                            value={this.state.url}
                            required
                        />
                    </dd>
                    <dt>TAG</dt>
                    <dd>
                        <select onChange={this.doChangeTag} required>
                            <option value="" disabled selected>
                                選択してください
                            </option>
                            {this.optionTag()}
                        </select>
                    </dd>
                </dl>
                <div>
                    <button onClick={this.doAction}>追加</button>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(AddBookmark);
