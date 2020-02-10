//ストア関係の作成
import { createStore } from "redux";
import { persistStore, persisitReducer } from "redux-persist";

//ステートの初期値
const initial = {
    login: false,
    id: "",
    name: "(click here)"
};

//レデューサー
export function bookmarkReducer(state = initial, action) {
    switch (action.type) {
        //reduxでログイン管理
        case "UPDATE_USER":
            return action.value;
        default:
            return state;
    }
}

//redux-persistの設定
const persistConfig = {
    key: "root",
    storage
};

//パーシストレデューサーの作成
const persistReducer = persistReducer(persistConfig, bookmarkReducer);

//ストアの作成
const store = createStore(bookmarkReducer);
//パーシスターの作成
const pStore = persistStore(store);

export default pStore;
