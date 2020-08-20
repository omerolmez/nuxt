import Vuex from "vuex";
import Cookie from "js-cookie";
import axios from "axios";

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
                Cookie.remove('expiresIn');
                if (process.client) {
                    localStorage.removeItem("authKey");
                    localStorage.removeItem("expiresIn");
                }

                state.authKey = null;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
            },
            initAuth(vuexContext, req) {
                let token;
                let expiresIn;
                if (req) {
                    if (!req.headers.cookie) {
                        return;
                    }

                    token = req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey="));
                    if (token) {
                        token = token.split("=")[1];
                    }

                    expiresIn = req.headers.cookie.split(";").find(c => c.trim().startsWith("expiresIn="));
                    if (expiresIn) {
                        token = token.split("=")[1];
                    }
                } else {
                    token = localStorage.getItem("authKey");
                    expiresIn = localStorage.getItem("expiresIn");
                }
                if (new Date().getTime() > +expiresIn || !token) {
                    vuexContext.commit("clearAuthKey");
                }
                vuexContext.commit("setAuthKey", token);
            },
            authUser(vuexContext, authData) {
                let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
                if (authData.isUser) {
                    authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
                }

                return axios.post(authLink + process.env.firebaseAPIKEY,  {
                    email: authData.user.email, password: authData.user.password, returnSecureToken: true
                }).then(response => {
                    //let expireIn = new Date().getTime() + +response.data.expireIn * 1000; // bu demek oluyorki  3600 => 1 saatlik neyse ya anlatmıyorm lan!
                    let expireIn = new Date().getTime() + 5000; // bu demek oluyorki  3600 => 1 saatlik neyse ya anlatmıyorm lan!
                    Cookie.set('authKey', response.data.idToken);
                    Cookie.set('expiresIn', expireIn);
                    localStorage.setItem("authKey", response.data.idToken);
                    localStorage.setItem("expiresIn", expireIn);
                    vuexContext.commit("setAuthKey", response.data.idToken);
                });
            },
            logout(vuexContext) {
                vuexContext.commit("clearAuthKey");
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
