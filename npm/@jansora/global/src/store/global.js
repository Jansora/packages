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
    theme: localStorage.getItem("color") ? localStorage.getItem("color") : 'violet',
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
    return (
        <GlobalStore.Provider value={{...store, dispatch}}>
            {props.children}
        </GlobalStore.Provider>
    );
};
export default GlobalStoreProvider;
