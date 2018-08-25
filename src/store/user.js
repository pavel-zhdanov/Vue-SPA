import * as fb from 'firebase';

/** class of user
 */
class User {
  /** Create an user
   *
   * @param {string} id -id of user
   */
  constructor(id) {
    this.id = id;
  }
}

export default {
  state: {},
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
  },
  getters: {},
  actions: {
    async registerUser({commit}, {email, password}) {
      commit('clearError');
      commit('setLoading', true);
      try {
        const user = await fb.auth()
          .createUserWithEmailAndPassword(email, password);
        commit('setUser', new User(user.uid));
        commit('setLoading', false);
      } catch (error) {
        commit('setLoading', false);
        commit('setError', error.message);
        throw error;
      }
    },
  },
};
