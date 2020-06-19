import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => {
    return state;
};

class UserInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="user-info">
                <p>{this.props.user.name}</p>
                <p>{this.props.user.email}</p>
            </div>
        );
    }
}

export default connect(mapState)(UserInfo);
