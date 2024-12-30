import { createStore } from "vuex";

const store = createStore({
    state: {
        message: 'Hello Vuex!'
    },
    mutations: {
        updateMessage(state, payload){
            state.message = payload;
        }
    },
    actions: {
        setMEssage({commit}, payload){
            commit('updateMessage', payload);
        }
    },
    getters: {
        message: (state) => state.message
    }
});

export default store;