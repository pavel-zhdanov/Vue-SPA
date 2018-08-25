export default {
  state: {
    ads: [
      {title: 'planet', description: 'It is a planet', promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', id: '1'},
      {title: 'bird', description: ' It is a bird', promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', id: '2'},
      {title: 'sky', description: 'It is a sky', promo: true,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', id: '3'},
      {title: 'squirrel', description: 'It is a squirrel', promo: false,
        imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', id: '4'},
    ],
  },
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    },
  },
  actions: {
    createAd({commit}, payload) {
      payload.id = 'qwerty';
      commit('createAd', payload);
    },
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter((item) => {
        return item.promo;
      });
    },
    myAds(state) {
      return state.ads;
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
