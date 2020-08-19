import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
    return new Vuex.Store({
        state: {
            authKey: null
        },
        mutations: {
            setAuthKey(state, authKey) {
                state.authKey = authKey;
            },
            clearAuthKey(state) {
                Cookie.remove('authKey');
                state.authKey = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
            },
            initAuth(vuexContext, req) {
                let token;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }

                    token = req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey="));
                    if (token) {
                        console.log('SERVER EVET');
                        token = token.split("=")[1];
                    }
                    console.log('SERVER', token);
                } else {
                    token = localStorage.getItem("authKey");
                    if (!token) {console.log('FALSE');
                        return;
                    }
                }
                vuexContext.commit("setAuthKey", token);
            },
            login(vuexContext, authKey) {
                Cookie.set('authKey', authKey);
                localStorage.setItem("authKey", authKey);
                //console.log(localStorage.getItem("authKey"));
                vuexContext.commit("setAuthKey", authKey);
            }
        },
        getters: {
            isAuthenticated(state) {
                return state.authKey != null;
            },
            getAuthKey(state) {
                return state.authKey;
            }
        },
    })
}

export default createStore;
