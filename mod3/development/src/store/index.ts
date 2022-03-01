import { createStore } from 'vuex'

export default createStore({
  state: {
    cart: [] as {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: string [];
      qty: number
    }[],
    carttao: [] as {
      id: string;
      kind: string;
      zhu: string;
      pei: string [];
      drink: string [];
      jia: string [];
      title: string;
      pic: string;
      price: number;
      qty: number
    }[],
    active: 'ch',
    numb: '29',
    selid: '1',
    selid1: '1',
    selid2: '2',
    foods: [
      {
        id: '1',
        kind: 'ch',
        title: '大冰淇淋',
        pic: require('@/assets/images/big_ice.png'),
        ty1: ['抹茶','原味'],
        price: 30
      },
      {
        id: '2',
        kind: 'ch',
        title: '小冰淇淋',
        pic: require('@/assets/images/small_ice.png'),
        ty1: ['抹茶','原味'],
        price: 18
      },
      {
        id: '3',
        kind: 'ch',
        title: '冰炫風',
        pic: require('@/assets/images/oreo_ice.png'),
        price: 55
      },
      {
        id: '4',
        kind: 'ch',
        title: '蘋果派',
        pic: require('@/assets/images/apple.png'),
        price: 35
      },
      {
        id: '5',
        kind: 'ch',
        title: '水果袋',
        pic: require('@/assets/images/appl.png'),
        price: 39
      },
      {
        id: '6',
        kind: 'ch',
        title: '六塊辣雞翅',
        pic: require('@/assets/images/six_chicken.png'),
        price: 64
      },
      {
        id: '7',
        kind: 'ch',
        title: '四季沙拉',
        pic: require('@/assets/images/salet.png'),
        ty1: ['千島醬','芝麻醬','凱撒醬'],
        price: 45
      },
      {
        id: '8',
        kind: 'ch',
        title: '四塊雞塊',
        pic: require('@/assets/images/four_chicken.png'),
        ty1: ['糖醋醬','香辣醬'],
        price: 49
      },
      {
        id: '9',
        kind: 'ch',
        title: '吉事漢堡',
        pic: require('@/assets/images/chi_humaberger.png'),
        ty1: ['生菜','番茄'],
        price: 45
      },
      {
        id: '10',
        kind: 'ch',
        title: '兩塊辣雞翅',
        pic: require('@/assets/images/two_hot_chi.png'),
        price: 98
      },
      {
        id: '11',
        kind: 'ch',
        title: '兩塊雞翅',
        pic: require('@/assets/images/two_chi.png'),
        price: 98
      },
      {
        id: '12',
        kind: 'ch',
        title: '法式芥末香雞堡',
        pic: require('@/assets/images/fri_chi_humberger.png'),
        ty1: ['生菜','番茄'],
        price: 45
      },
      {
        id: '13',
        kind: 'ch',
        title: '漢堡',
        pic: require('@/assets/images/humberger.png'),
        ty1: ['生菜','番茄'],
        price: 30
      },
      {
        id: '14',
        kind: 'ch',
        title: '薯條(小)',
        pic: require('@/assets/images/french.png'),
        price: 35
      },
      {
        id: '15',
        kind: 'ws',
        title: '可口可樂(小)',
        pic: require('@/assets/images/cola.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 33
      },
      {
        id: '16',
        kind: 'ws',
        title: '玉米湯(小)',
        pic: require('@/assets/images/coin.png'),
        price: 40
      },
      {
        id: '17',
        kind: 'ws',
        title: '冰奶茶(小)',
        pic: require('@/assets/images/colar_milk_tea.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 38
      },
      {
        id: '18',
        kind: 'ws',
        title: '冰拿鐵',
        pic: require('@/assets/images/colar_larte.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 55
      },
      {
        id: '19',
        kind: 'ws',
        title: '冰黑咖啡',
        pic: require('@/assets/images/colar_black.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 38
      },
      {
        id: '20',
        kind: 'ws',
        title: '柳橙汁(小)',
        pic: require('@/assets/images/origin.png'),
        price: 40
      },
      {
        id: '21',
        kind: 'ws',
        title: '雪碧(小)',
        pic: require('@/assets/images/sprite.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 33
      },
      {
        id: '22',
        kind: 'ws',
        title: '零卡可樂',
        pic: require('@/assets/images/zero_colar.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 33
      },
      {
        id: '23',
        kind: 'ws',
        title: '綠茶',
        pic: require('@/assets/images/green_tea.png'),
        ty1: ['去冰','少冰','多冰'],
        price: 20
      },
      {
        id: '24',
        kind: 'ws',
        title: '熱奶茶(小)',
        pic: require('@/assets/images/holt_milk_tea.png'),
        price: 33
      },
      {
        id: '25',
        kind: 'ws',
        title: '熱拿鐵',
        pic: require('@/assets/images/holt_larte.png'),
        price: 55
      },
      {
        id: '26',
        kind: 'ws',
        title: '熱黑咖啡',
        pic: require('@/assets/images/holt_black.png'),
        price: 33
      },
      {
        id: '27',
        kind: 'ws',
        title: '鮮乳',
        pic: require('@/assets/images/milk.png'),
        price: 33
      },
      {
        id: '28',
        kind: 'ws',
        title: '檸檬紅茶',
        pic: require('@/assets/images/lemon_tea.png'),
        price: 30
      },
      {
        id: '29',
        ta: '60',
        kind: 'ma',
        title: '十塊雞塊',
        pic: require('@/assets/images/ten_chiken.png'),
        ty1: ['糖醋醬','香辣醬'],
        price: 104
      },
      {
        id: '30',
        kind: 'ma',
        title: '大麥克',
        pic: require('@/assets/images/Big_mak.png'),
        ty1: ['生菜','番茄'],
        price: 75
      },
      {
        id: '31',
        kind: 'ma',
        title: '六塊雞塊',
        pic: require('@/assets/images/six_chiken.png'),
        ty1: ['糖醋醬','香辣醬'],
        price: 64
      },
      {
        id: '32',
        kind: 'ma',
        title: '安格斯黑牛堡',
        pic: require('@/assets/images/BLT.png'),
        ty1: ['生菜','番茄'],
        price: 114
      },
      {
        id: '33',
        kind: 'ma',
        title: '勁辣雞腿堡',
        pic: require('@/assets/images/holt_chicken_burger.png'),
        ty1: ['生菜','番茄'],
        price: 75
      },
      {
        id: '34',
        kind: 'ma',
        title: '麥香魚',
        pic: require('@/assets/images/fish_burger.png'),
        ty1: ['生菜','番茄'],
        price: 49
      },
      {
        id: '35',
        kind: 'ma',
        title: '麥香雞',
        pic: require('@/assets/images/chiken_burger.png'),
        ty1: ['生菜','番茄'],
        price: 45
      },
      {
        id: '36',
        kind: 'ma',
        title: '麥脆雞翅',
        pic: require('@/assets/images/chiken_two.png'),
        price: 49
      },
      {
        id: '37',
        kind: 'ma',
        title: '麥脆雞腿',
        pic: require('@/assets/images/hand_chiken_two.png'),
        price: 120
      },
      {
        id: '38',
        kind: 'ma',
        title: '凱薩脆雞沙拉',
        pic: require('@/assets/images/chiken_salt.png'),
        ty1: ['千島醬','芝麻醬','凱撒醬'],
        price: 104
      },
      {
        id: '39',
        kind: 'ma',
        title: '煙燻雞肉長堡',
        pic: require('@/assets/images/long_chicken.png'),
        ty1: ['生菜','番茄'],
        price: 74
      },
      {
        id: '40',
        kind: 'ma',
        title: '義式烤雞沙拉',
        pic: require('@/assets/images/ital_chiken_salt.png'),
        ty1: ['千島醬','芝麻醬','凱撒醬'],
        price: 104
      },
      {
        id: '41',
        kind: 'ma',
        title: '嫩煎雞腿堡',
        pic: require('@/assets/images/nen_chi_burger.png'),
        ty1: ['生菜','番茄'],
        price: 80
      },
      {
        id: '42',
        kind: 'ma',
        title: '辣脆雞腿堡',
        pic: require('@/assets/images/BLT_chiken.png'),
        ty1: ['生菜','番茄'],
        price: 114
      },
      {
        id: '43',
        kind: 'ma',
        title: '豬肉長堡',
        pic: require('@/assets/images/long_pig.png'),
        ty1: ['生菜','番茄'],
        price: 74
      },
      {
        id: '44',
        kind: 'ma',
        title: '蕈菇安格斯黑牛堡',
        pic: require('@/assets/images/black_beff.png'),
        ty1: ['生菜','番茄'],
        price: 185
      },
      {
        id: '45',
        kind: 'ma',
        title: '雙層牛肉吉事',
        pic: require('@/assets/images/two_level_bugger.png'),
        ty1: ['生菜','番茄'],
        price: 124
      },
      {
        id: '46',
        kind: 'pe',
        title: '辣脆雞腿堡+小薯+四塊雞塊+小杯飲料',
        pic: require('@/assets/images/套餐1.png'),
        price: 100
      },
      {
        id: '47',
        kind: 'pe',
        title: '吉事堡+小薯+四塊雞塊+小杯飲料+炸雞翅',
        pic: require('@/assets/images/套餐2.png'),
        price: 100
      },
      {
        id: '48',
        kind: 'pe',
        title: '辣脆雞腿堡+小薯+四塊雞塊+小杯飲料+炸雞翅',
        pic: require('@/assets/images/套餐3.png'),
        price: 150
      },
      {
        id: '49',
        kind: 'pe',
        title: '大麥克+小薯+四塊雞塊+小杯飲料+炸雞翅',
        pic: require('@/assets/images/套餐4.png'),
        price: 150
      },
      {
        id: '50',
        kind: 'pe',
        title: '鱈魚堡+小薯+四塊雞塊+小杯飲料',
        pic: require('@/assets/images/套餐5.png'),
        price: 100
      },
      {
        id: '51',
        kind: 'pe',
        title: '雙層牛肉吉士堡+小薯+四塊雞塊+小杯飲料+炸雞翅',
        pic: require('@/assets/images/套餐6.png'),
        price: 150
      }
    ] as {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      ty1: string [];
      price: number;
    }[],
    taoc: [
      {
        id: '60',
        kind: 'tao',
        zhu: '29',
        pei: ['10','14','7'],
        drink: ['18','19','20'],
        jia: ['11','8','3'],
        title: '雞塊套餐',
        pic: require('@/assets/images/ten_chiken.png'),
        price: 150
      },
      {
        id: '61',
        kind: 'tao',
        zhu: '30',
        pei: ['10','11','8'],
        drink: ['26','27','28'],
        jia: ['10','5','2'],
        title: '大麥克套餐',
        pic: require('@/assets/images/套餐4.png'),
        price: 150
      }
    ] as {
      id: string;
      kind: string;
      zhu: string;
      pei: string [];
      drink: string [];
      jia: string [];
      title: string;
      pic: string;
      price: number;
    }[]
  },
  getters: {
    foodsKind: state => {
      return state.foods.map(item => { return item.kind }).filter((item, index, array) => {
        return array.indexOf(item, 0) === index;
      });
    },
    sortedCartList: state => {
      return state.cart.sort(
        (
          a: {
            id: string;
          },
          b: {
            id: string;
          }
        ) => {
          return Number(a.id) - Number(b.id);
        }
      );
    }
  },
  mutations: {
    changeActive(state, keyword: string) {
      state.active = keyword;
    },
    changeid(state, keyword: string) {
      state.selid = keyword;
    },
    changeid1(state, keyword: string) {
      state.selid1 = keyword;
    },
    changeid2(state, keyword: string) {
      state.selid2 = keyword;
    },
    changenumb(state, keyword: string) {
      state.numb = keyword;
    },
    addToCart(state, data: {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: string [];
      qty: number
    }) {
      const checkExist: number = state.cart.findIndex(item => item.id === data.id);
      if (checkExist === -1) {
        state.cart.push(data);
      }
    },
    addToCarttao(state, data: {
      id: string;
      kind: string;
      zhu: string;
      pei: string [];
      drink: string [];
      jia: string [];
      title: string;
      pic: string;
      price: number;
      qty: number
    }) {
      const checkExist: number = state.carttao.findIndex(item => item.id === data.id);
      if (checkExist === -1) {
        state.carttao.push(data);
      }
    },
    updateCart(state, data: {
      id: string;
      ta: string;
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: string [];
      qty: number;
    }) {
      const item: {
        id: string;
        ta: string;
        kind: string;
        title: string;
        pic: string;
        price: number;
        ty1: string [];
        qty: number;
      } | undefined = state.cart.find(item => item.id === data.id);
      if (item !== undefined) {
        Object.assign(item, data);
      } else {
        return;
      }
    },
    removeItemFormCart(state, id: string) {
      const item: number = state.cart.findIndex(item => item.id === id);
      state.cart.splice(item, 1);
    },
    removetItemFormCart(state, id: string) {
      const item: number = state.carttao.findIndex(item => item.id === id);
      state.carttao.splice(item, 1);
    },
    clearCart(state) {
      state.cart.length = 0;
      state.carttao.length = 0;
    }
  },
  actions: {
    changeActive({ commit }, keyword: string) {
      commit('changeActive', keyword);
    },
    changeid({ commit }, keyword: string) {
      commit('changeid', keyword);
    },
    changeid1({ commit }, keyword: string) {
      commit('changeid1', keyword);
    },
    changeid2({ commit }, keyword: string) {
      commit('changeid2', keyword);
    },
    changenumb({ commit }, keyword: string) {
      commit('changenumb', keyword);
    },
    addToCart({ commit }, data: {
      id: string;
      ta: string [];
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: string [];
      qty: number;
    }) {
      commit('addToCart', data);
    },
    addToCarttao({ commit }, data: {
      id: string;
      kind: string;
      zhu: string;
      pei: string [];
      drink: string [];
      jia: string [];
      title: string;
      pic: string;
      price: number;
      qty: number
    }) {
      commit('addToCarttao', data);
    },
    updateCart({ commit }, data: {
      id: string;
      ta: string [];
      kind: string;
      title: string;
      pic: string;
      price: number;
      ty1: string [];
      qty: number;
    }) {
      commit('updateCart', data);
    },
    removeItemFormCart({ commit }, id: {
      id: string
    }) {
      commit('removeItemFormCart', id);
    },
    removeyItemFormCart({ commit }, id: {
      id: string
    }) {
      commit('removetItemFormCart', id);
    },
    clearCart({ commit }) {
      commit('clearCart');
    },
  }
})
