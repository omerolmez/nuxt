import Vuex from "vuex";
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state: {
            fetchedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.fetchedPosts = posts
            },
            addPost(state, post) {
                state.fetchedPosts.push(post)
            },
            updatePost(state, editedPost) {
                console.log("Mutations => " + editedPost);
                let post_index = state.fetchedPosts.findIndex(post => post.id == editedPost.id)
                console.log("Mutations | POST INDEX => " + post_index)
                state.fetchedPosts[post_index] = editedPost
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                console.log(process.env.baseURL);
                return context.$axios.get(process.env.baseURL + "/posts.json")
                    .then(response => {
                        // {
                        //     '-LPCT7-FUC1ArRAn34pt': {
                        //         author: 'Gökhan Kandemir',
                        //         subTitle: 'kablosuzkedi canli yayini saat 21:30\'da',
                        //         text: 'yeni bir canli yayinla karsınızdayız',
                        //         title: 'kablosuzkedi canli yayin!!'
                        //     },
                        //     '-LPCTPi6wOyK6lwykN9K': {
                        //         author: 'Defne Kandemir',
                        //         subTitle: 'Defne bebek emeklemeye basladi!!',
                        //         text: 'Defne bebek emeklemeye basladi!! Defne bebek emeklemeye basladi!!',
                        //         title: 'Emekleme Dönemi Basladi!!'
                        //     }
                        // }
                        let data = response.data;
                        let postArray = []
                        for (let key in data) {
                            // data["id"] = key
                            postArray.push({id: key, ...data[key]})
                        }
                        vuexContext.commit("setPosts", postArray)
                    })
            },
            setPosts(vuexContext, posts) {
                vuexContext.commit("setPosts", posts)
            },
            addPost(vuexContext, post) {
                return this.$axios.post(process.env.baseURL + "/posts.json", post)
                    .then(response => {
                        vuexContext.commit("addPost", {...post, id: response.data.name})
                    })
            },
            updatePost(vuexContext, editedPost) {
                return this.$axios.put(process.env.baseURL + "/posts/" + editedPost.id + ".json", editedPost)
                    .then(response => {
                        console.log("Action => " + editedPost);
                        vuexContext.commit("updatePost", editedPost)
                    })
                    .catch(e => console.log(e))
            }

        },
        getters: {
            getPosts(state) {
                return state.fetchedPosts
            }
        }
    })
}

export default createStore
