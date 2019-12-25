import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 5
  },
  getters: {
    newCount(state) {
      return state.count * 3;
    }
  },
  mutations: {
    addcount(state) { //一个参数代表state
      state.count++;
    },
    addncount(state, payload) { //payload代表调用传入的对象参数(数据) 翻译为 载荷
      state.count = payload;
    }
  },
  actions: {
    addncount1(context, payload) {
      context.commit('addncount', payload);
    },
    getAsync(context, object) {
      //处理异步操作
      setTimeout(() => {
        //3.通过commit提交一个名为getParam的mutation
        //action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation
        context.commit('addncount', object)
      }, 3000)
    }
  },
  modules: {}
})