import React, { Component } from "react";
import { connect } from "react-redux";
import DeleteBookmark from "./DeleteBookmark";

const mapState = state => {
    return state;
};

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: false
        };
        this.doChangeDetail = this.doChangeDetail.bind(this);
    }

    doChangeDetail() {
        const detail = !this.state.detail;

        this.setState({
            detail: detail
        });
    }

    render() {
        return (
            <div>
                <div>
                    TITLE:
                    <span onClick={this.doChangeDetail}>
                        {this.props.title}
                    </span>
                </div>
                {this.state.detail ? (
                    <div>
                        <div>
                            URL:<span>{this.props.url}</span>
                        </div>
                        <div>
                            TAG:<span>{this.props.tag.name}</span>
                        </div>
                        <div>
                            <DeleteBookmark id={this.props.id} />
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        );
    }
}

export default connect(mapState)(Bookmark);
