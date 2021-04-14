import Vue from "vue";
import Vuex from "vuex";
import { ADD_NUM, REDUCE_NUM, RIDE_NUM, EXCEPT_NUM } from "./mutations_type";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    num: 0,
  },
  getters: {
    type_num(state) {
      return typeof state.num;
    },
  },
  mutations: {
    [ADD_NUM](state) {
      state.num++;
    },
    [REDUCE_NUM](state) {
      state.num--;
    },
    [RIDE_NUM](state) {
      state.num = state.num * state.num;
    },
    [EXCEPT_NUM](state) {
      state.num = state.num / state.num;
    },
  },
  actions: {
    [ADD_NUM](context) {
      setTimeout(() => {
        context.commit("ADD_NUM");
      }, 2000);
    },
    [REDUCE_NUM](context) {
      setTimeout(() => {
        context.commit("REDUCE_NUM");
      }, 2000);
    },
    [RIDE_NUM](context) {
      setTimeout(() => {
        context.commit("RIDE_NUM");
      }, 2000);
    },
    [EXCEPT_NUM](context) {
      setTimeout(() => {
        context.commit("EXCEPT_NUM");
      }, 2000);
    },
  },
  modules: {},
});
