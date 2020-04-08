import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Lp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("lp");
        return (
            <body>
                <header>
                    <div className="title">SHEREs</div>
                    <div className="ja">
                        ----専有と共有のブックマークアプリ----
                    </div>
                </header>
                <main>
                    <div className="explain">
                        このWEBアプリは
                        <span className="user">ユーザー間で</span>
                        <br />
                        <span className="bookmark">
                            ブックマークを共有することができます
                        </span>
                    </div>
                    <div className="link">
                        <div className="register">
                            <Link to="/register">新規登録</Link>
                        </div>
                        <div className="login">
                            <Link to="/login">ログイン</Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="github">
                        <a href="https://github.com/date17" target="_blank">
                            <FontAwesomeIcon icon={["fab", "github"]} />
                        </a>
                    </div>
                    <div className="developer">
                        DEVELOPER
                        <a
                            href="https://portfolio-app-bd497.firebaseapp.com/"
                            target="_blank"
                        >
                            KUROMAME
                        </a>
                        .
                    </div>
                </footer>
            </body>
        );
    }
}

export default connect()(Lp);
