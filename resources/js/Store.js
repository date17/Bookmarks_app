import { createStore } from "redux";

//ステート
const initdata = {
    login: false,
    user: {
        id: "",
        name: "",
        email: ""
    }
};

//レデューサー
function reducer(state = initdata, action) {
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
            email: action.data.email
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
export default createStore(reducer);
