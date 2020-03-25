import { createStore } from "redux";

//ステート
const initdata = {
    login: false,
    user: {
        id: "",
        name: "",
        email: "",
        api_token: ""
    }
};

//localstorageから取得したものを初期データにする
const dataLocalStorage = JSON.parse(localStorage.getItem("data")) || initdata;
const data = {
    login: dataLocalStorage.login,
    user: {
        id: dataLocalStorage.user.id,
        name: dataLocalStorage.user.name,
        email: dataLocalStorage.user.email,
        api_token: dataLocalStorage.user_api_token
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
            api_token: action.data.api_token
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
            api_token: ""
        }
    };
};

//ストアの作成
export default createStore(reducer);
