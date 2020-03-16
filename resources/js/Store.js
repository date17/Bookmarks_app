import { createStore } from "redux";

//ステート
const data = {
    login: false,
    user: {
        id: "",
        name: "",
        email: "",
        bookmarks: [],
        tags: []
    }
};

//レデューサー
function reducer(state = data, action) {
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
    console.log(action);
    return {
        login: true,
        user: {
            id: action.data.id,
            name: action.data.name,
            email: action.data.email,
            bookmarks: action.data.bookmarks,
            tags: action.data.tags
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
            email: "",
            bookmarks: [],
            tags: []
        }
    };
};

//ストアの作成
export default createStore(reducer);
