import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import "../../../public/css/lp/lp.css";

class Lp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("lp");
        return (
            <body>
                <header>
                    <div className="icon"></div>
                    <div className="title">SHEREs</div>
                    <div className="ja">
                        ----専有と共有のブックマークアプリ----
                    </div>
                </header>
                <main>
                    <div className="explain">
                        <div className="detail">
                            <div className="first">
                                通常のブックマーク機能に加え
                            </div>
                            <div className="common">
                                共有ブックマーク機能<span>により、</span>
                            </div>
                            <div className="end">
                                ユーザー間で有益な情報を<span>Shere</span>
                                することができます。
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="register">
                            <Link to="/register">新規登録</Link>
                        </div>
                        <div className="login">
                            <Link to="/login">ログイン</Link>
                        </div>
                        <div className="mypage">
                            <Link to="/mypage">マイページ</Link>
                        </div>
                    </div>
                </main>
                <footer>
                    <div className="github">
                        <a href="https://github.com/date17" target="_blank"></a>
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
