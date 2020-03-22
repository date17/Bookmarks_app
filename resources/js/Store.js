import { createStore } from "redux";

//ステート
const data = {
    login: false,
    user: {
        id: "",
        name: "",
        email: "",
        bookmarks: [],
        tags: [],
        select: []
    }
};

//レデューサー
function reducer(state = data, action) {
    switch (action.type) {
        case "LOGIN":
            return loginReduce(action);
        case "LOGOUT":
            return logoutReduce();
        case "ADDBOOKMARK":
            return addBookmarkReduce(state, action);
        case "DELETEBOOKMARK":
            return deleteBookmarkReduce(state, action);
        case "ADDTAG":
            return addTagReduce(state, action);
        case "DELETETAG":
            return deleteTagReduce(state, action);
        case "CHANGESELECT":
            return changeSelect(state, action);
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
            id: action.data.user.id,
            name: action.data.user.name,
            email: action.data.user.email,
            bookmarks: action.data.bookmarks,
            tags: action.data.tags,
            select: action.data.select //ログインした時はブックマーク一覧にする
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
            tags: [],
            select: []
        }
    };
};

//ブックマークの追加処理
const addBookmarkReduce = (state, action) => {
    console.log(state);
    console.log(action.data);
    return {
        login: state.login,
        user: {
            id: state.user.id,
            name: state.user.name,
            email: state.user.email,
            bookmarks: action.data,
            tags: state.user.tags,
            select: []
        }
    };
};

//ブックマークの削除処理
const deleteBookmarkReduce = (state, action) => {
    return {
        login: state.login,
        user: {
            id: state.user.id,
            name: state.user.name,
            email: state.user.email,
            bookmarks: action.data,
            tags: state.user.tags,
            select: []
        }
    };
};

//タグの追加処理
const addTagReduce = (state, action) => {
    console.log(state);
    console.log(action.data);
    return {
        login: state.login,
        user: {
            id: state.user.id,
            name: state.user.name,
            email: state.user.email,
            bookmarks: state.user.bookmarks,
            tags: action.data,
            select: []
        }
    };
};

//タグの削除
const deleteTagReduce = (state, action) => {
    console.log(state);
    console.log(action.data);
    return {
        login: state.login,
        user: {
            id: state.user.id,
            name: state.user.name,
            email: state.user.email,
            bookmarks: action.data.bookmarks,
            tags: action.data.tags,
            select: []
        }
    };
};

//selectを変更
const changeSelect = (state, action) => {
    console.log("Change Select");
    console.log(action.data);
    return {
        login: state.login,
        user: {
            id: state.user.id,
            name: state.user.name,
            email: state.user.email,
            bookmarks: state.user.bookmarks,
            tags: state.user.tags,
            select: action.data
        }
    };
};

//ストアの作成
export default createStore(reducer);
