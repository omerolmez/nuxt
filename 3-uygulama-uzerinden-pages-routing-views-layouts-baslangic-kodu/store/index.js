import Vuex from "vuex";
import axios from "axios";

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchPosts = posts;
            },
            addPost(state, post) {
                state.fetchPosts.push(post);
            },
            updatePost(state, editedPost) {
                let post_index = this.state.fetchPosts.findIndex(post => post.id == editedPost.id)
                if (post_index) {
                    state.fetchPosts[post_index] = editedPost;
                }
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {// eğer sayfa yeniden render edilirse bu alan tek seferlik çalışıyor.
                if (!process.client) {
                    console.log('Server Üzeirndesin güzel insan... :) ');
                }

                return axios.get("https://kose-yazilari-01.firebaseio.com/posts.json")
                    .then(response => {
                        let data = response.data;
                        let postArray = [];
                        for (let key in data) {
                            postArray.push({ id: key, ...data[key] })
                        }
                        vuexContext.commit("setPosts", postArray);
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts);
            },
            addPost(vuexContext, post) {
                return axios.post("https://kose-yazilari-01.firebaseio.com/posts.json", post)
                    .then(response => {
                        vuexContext.commit("addPost", { ...post, id: response.data.name })
                        //this.$router.push("/");
                    })
            },
            updatePost(vuexContext, editedPost) {
                return axios.put("https://kose-yazilari-01.firebaseio.com/posts/" + editedPost.id + ".json", editedPost)
                    .then(response => {
                        vuexContext.commit("updatePost", editedPost)
                    })
                    .catch(e => {
                        console.log(e);
                    })
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
