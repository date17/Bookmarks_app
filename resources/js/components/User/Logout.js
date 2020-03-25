import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import axios from "axios";

function mapState(state) {
    return state;
}
class Logout extends Component {
    constructor(props) {
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction() {
        if (this.props.login) {
            axios
                .post("/logout", {
                    id: this.props.user.id,
                    name: this.props.user.name,
                    email: this.props.email
                })
                .then(res => {
                    console.log(res.data);
                    this.props.dispatch({
                        type: "LOGOUT"
                    });
                    localStorage.removeItem("data");
                    <Redirect to="/" />;
                })
                .catch(e => {
                    console.log(e);
                });
        } else {
            console.log("not login");
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.doAction}>ログアウト</button>
            </div>
        );
    }
}

export default connect(mapState)(Logout);
