const state = {
  jishuqi: 0
}

const mutations = {
  ADDNUMBER: state => {
    state.jishuqi++
  }
}

const actions = {
  AddNumber(context) {
    context.commit('ADDNUMBER')
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
