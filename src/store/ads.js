/* eslint-disable require-jsdoc */
import fb from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

class Ad {
  constructor(title, description, ownerId, imageSrc = '',
              promo = false, id = null) {
    this.title = title;
    this.description = description;
    this.ownerId = ownerId;
    this.imageSrc = imageSrc;
    this.promo = promo;
    this.id = id;
  }
}

export default {
  state: {
    ads: [],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
    loadAds(state, payload) {
      state.ads = payload;
    },
    updateAd(state, {title, description, id}) {
      const ad = state.ads.find((item) => {
        return item.id ===id;
      });
      ad.title = title;
      ad.description = description;
    },
  },
  actions: {
    async createAd({commit, getters}, payload) {
      commit('clearError');
      commit('setLoading', true);
      const image =payload.image;
      try {
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          '',
          payload.promo,
        );
        const ad = await fb.database().ref('notes').push(newAd);
        const imageExt = image.name.slice(image.name.lastIndexOf('.'));
        await fb.storage().ref(`notes/${ad.key}.${imageExt}`).put(image);
        const path = await fb.storage()
          .ref(`notes/${ad.key}.${imageExt}`).getDownloadURL();
        const imageSrc =path;

        await fb.database().ref('notes').child(ad.key).update({imageSrc});
        commit('setLoading', false);
        commit('createAd', {
          ...newAd,
          id: ad.key,
          imageSrc,
        });
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async fetchAds({commit}) {
      commit('clearError');
      commit('setLoading', true);
      let resultAds =[];
      try {
        const fbVal = await fb.database().ref('notes').once('value');
        const ads = fbVal.val();
        Object.keys(ads).forEach((key) => {
          const ad =ads[key];
          resultAds.push(new Ad(ad.title, ad.description, ad.ownerId,
            ad.imageSrc, ad.promo, key));
        });
        commit('loadAds', resultAds);
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
    async updateAd({commit}, {title, description, id}) {
      commit('clearError');
      commit('setLoading', true);
      try {
        await fb.database().ref('notes').child(id).update({
          title,
          description,
        });
        commit('updateAd', {
          title,
          description,
          id,
        });
        commit('setLoading', false);
      } catch (error) {
        commit('setError', error.message);
        commit('setLoading', false);
        throw error;
      }
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      if (!state.ads) {
        return;
      }
      return state.ads.filter((item) => {
        return item.promo;
      });
    },
    myAds(state, getters) {
      return state.ads.filter((ad) => {
        return ad.ownerId === getters.user.id;
      });
    },
    adById(state) {
      return (adId)=> {
        return state.ads.find((ad) => {
          return ad.id === adId;
        });
      };
    },
  },
};
