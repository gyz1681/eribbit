// 用户模块

export default {
  namespaced: true,
  state () {
    return {
    //    用户信息
      profile: {
        id: '',
        avatar: '',
        nickname: '',
        account: '',
        mobile: '',
        token: ''
      }
    }
  },

  // 修改用户信息
  mutations: {
    updateName (state, payload) {
      state.profile = payload
    }
  }

}
