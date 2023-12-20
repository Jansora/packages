import React, {createContext, useReducer} from 'react';


export const defaultValue = {
    // 登录用户信息
    user: { //
        id: "",
        username: "",
        description: "",
        updatedAt: "",
        createdAt: "",
        avatar: "",
        role: "",
    },
    // 主题色
    color: localStorage.getItem("color") ? localStorage.getItem("color") : 'green',
    theme: localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark',
    breadcrumb: [],
    title: '',
    description: "",
    message: "",
};

export const GlobalStore = createContext(defaultValue);

const reducer = (state, action) => {

    switch(action.type) {
        case 'user':
            return {...state, user: action.payload};
        case 'color':
            return {...state, color: action.payload};
        case 'theme':
            return {...state, theme: action.payload};
        case 'title':
            return {...state, title: action.payload};
        case 'description':
            return {...state, description: action.payload};
        case 'message':
            return {...state, message: action.payload};
        default:
            return {...state, ...action.payload}
    }
}


const GlobalStoreProvider = props => {
    const [store, dispatch] = useReducer(reducer, defaultValue);
    store.dispatch = dispatch
    return (
        <GlobalStore.Provider value={store}>
            {props.children}
        </GlobalStore.Provider>
    );
};
export default GlobalStoreProvider;
