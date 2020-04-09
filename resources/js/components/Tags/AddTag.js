import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

function mapState(state) {
    return state;
}

class AddTag extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.user.id,
            name: ""
        };
        this.doChangeName = this.doChangeName.bind(this);
        this.doAction = this.doAction.bind(this);
        this.afterAdd = this.afterAdd.bind(this);
    }

    doChangeName(e) {
        console.log(e.target.value);
        this.setState({
            name: e.target.value
        });
    }

    doAction() {
        const user_id = this.state.user_id;
        const name = this.state.name;
        axios
            .post("/api/tag", {
                user_id: user_id,
                name: name
            })
            .then(res => {
                console.log(res.data);
                this.afterAdd(res.data);
                this.setState(state => ({
                    user_id: state.user_id,
                    name: ""
                }));
            })
            .catch(e => {
                console.log(e);
            });
    }

    afterAdd(tags) {
        this.props.after(tags);
    }

    render() {
        return (
            <div className="newInput">
                <div>
                    <input
                        type="text"
                        onChange={this.doChangeName}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <button onClick={this.doAction}>追加</button>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(AddTag);
