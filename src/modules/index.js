import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);/* 使用 */
/* 定义a b 两个模块 */
const modulea = {
	/* 定义模块内的方法 */
  state: { count: 0 },
  mutations: {
    changecount (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.count++
    }
  },
  getters: {
    ucount (state) {
      return state.count * 2
    }
  },
   actions: {
    changecountagain (context) {
     context.commit('changecount')
    }
  },
}
const moduleb = {
	/* 定义模块内的方法 */
  state: { 
	  name:'任琪'
  },
  getters:{
	  uname(state){
	  	  return state.name+'王琦'
	  }
  },
   mutations: {
    changename (state) {
      // 这里的 `state` 对象是模块的局部状态
      state.name+='一'
    }
  },
   actions: {
    changenameagain (context) {
     context.commit('changename')
    }
  },
}

export default new Vuex.Store({
	/* 表示引用多个模块 */
         modules:{
			 /* 相当于 state{
				  a:modulea,
				  b:moduleb
			 }*/
			 a:modulea,
			 b:moduleb,
		 }
})

