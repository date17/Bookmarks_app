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
                this.props.dispatch({
                    type: "ADDTAG",
                    data: res.data
                });
                this.setState(state => ({
                    user_id: state.user_id,
                    name: ""
                }));
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <h3>AddTag</h3>
                <dl>
                    <dt>Name</dt>
                    <dd>
                        <input
                            type="text"
                            onChange={this.doChangeName}
                            value={this.state.name}
                        />
                    </dd>
                </dl>
                <div>
                    <button onClick={this.doAction}>追加</button>
                </div>
            </div>
        );
    }
}

export default connect(mapState)(AddTag);
