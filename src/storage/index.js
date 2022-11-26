import { createStore } from "vuex";
import router from "@/router";
import VuexPersistence from "vuex-persist";

const store = createStore({
  state() {
    return {
      isAuthenticated: false,
      isUser: {},
    };
  },
  mutations: {
    setIsAuthenticated(state, value) {
      state.isAuthenticated = value;
    },
    setUserData(state, value) {
      state.isUser = value;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.isUser = {};
      localStorage.removeItem("token");
      router.push("/");
    },
  },
  plugins: [
    new VuexPersistence({
      storage: window.localStorage,
    }).plugin,
  ],
});

export default store;
