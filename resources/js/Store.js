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
        case "ADDBOOKMARK":
            return addBookmarkReduce(state, action);
        case "DELETEBOOKMARK":
            return deleteBookmarkReduce(state, action);
        case "ADDTAG":
            return addTagReduce(state, action);
        case "DELETETAG":
            return deleteTagReduce(state, action);
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
            tags: state.user.tags
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
            tags: state.user.tags
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
            tags: action.data
        }
    };
};

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
            tags: action.data.tags
        }
    };
};

//ストアの作成
export default createStore(reducer);
