export const state = () => ({
    lastColor: 'purple',
    color: 'purple',
})

export const mutations = {
    SET_COLOR(state, color) {
        state.color = color
    },
    SET_LASTCOLOR(state, lastColor) {
        state.lastColor = lastColor
    },
}

export const actions = {
    updateColor({ commit, state }, event) {
        commit('SET_LASTCOLOR', state.color)
        commit('SET_COLOR', event)
    },
}
