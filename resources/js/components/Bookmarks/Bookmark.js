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
            <div className="bookmark">
                <div className="bookmark-title" onClick={this.doChangeDetail}>
                    {this.props.title}
                </div>
                {this.state.detail ? (
                    <div className="detail">
                        <div className="url">
                            URL:<span>{this.props.url}</span>
                        </div>
                        <div>
                            <DeleteBookmark
                                id={this.props.id}
                                tag_id={this.props.tag_id}
                                afterDelete={this.props.after}
                            />
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
