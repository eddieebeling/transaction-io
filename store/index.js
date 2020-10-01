export const state = () => ({
    authenticated: false,
    userObj: '',
})

export const mutations = {
    authenticated(state, payload) {
        state.authenticated = payload
    },
    updateUser(state, payload) {
        state.userObj = payload
    }
}