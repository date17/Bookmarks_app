import { createStore } from "redux";

//ステート
const data = {
    login: false,
    user: {
        id: 1,
        name: "takuya",
        email: "date@ezweb.ne.jp"
    }
};

//レデューサー
function Reducer(state = data, action) {
    switch (action.type) {
        case "LOGIN":
            return loginReduce(action);
        case "LOGOUT":
            return logoutReduce();
        default:
            return state;
    }
}

//アクションレデューサー

//ログイン処理
const loginReduce = action => {
    return {
        login: true,
        user: {
            id: action.id,
            name: action.name,
            email: action.email
        }
    };
};

//ログアウト処理
const logoutReduce = () => {
    return {
        login: false,
        user: {
            id: null,
            name: "",
            email: ""
        }
    };
};

//ストアの作成
export default createStore(Reducer);
