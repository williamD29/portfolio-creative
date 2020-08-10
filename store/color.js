export const state = () => ({
    color: 'purple',
})

export const mutations = {
    SET_COLOR(state, color) {
        state.color = color
    },
}

export const actions = {
    updateColor({ commit }, event) {
        commit('SET_COLOR', event)
    },
}
