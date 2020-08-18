import Vuex from "vuex";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchPosts = posts;
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {// eğer sayfa yeniden render edilirse bu alan tek seferlik çalışıyor.
            if (!process.client) {
                console.log('Server Üzeirndesin güzel insan... :) ');
            }
              vuexContext.commit("setPosts", [{
                      id: 1,
                      title: "Test Başlığı",
                      subTitle: "Test Alt Başlığı",
                      text: "Metin lorem impsum dolar sit amaet ",
                      author: "Ömer Ölmez"
                  },
                  {
                      id: 2,
                      title: "Test Başlığı 2",
                      subTitle: "Test Alt Başlığı 2",
                      text: "Lorem Metin lorem impsum dolar sit amaet ",
                      author: "Ömer Ölmez"
                  }]);
            },
            setPosts(vuexContext, posts) {

                vuexContext.commit("setPosts", posts);
            }
        },
        getters: {
            getPosts(state) {
                return state.fetchPosts;
            }
        }
    })
}

export default createStore;
