import ProductsService from '@/services/api.service'

const state = {
  products: [],
  isLoading: true,
  productsCount: 0
}

const getters = {
  productsCount (state) {
    return state.productsCount
  },
  products (state) {
    return state.products
  },
  isLoading (state) {
    return state.isLoading
  }
}

const actions = {
  fetchProducts ({ commit }) {
    commit('setLoading')
    return ProductsService.query()
      .then(({ data }) => {
        commit('setProducts', data)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }
}

const mutations = {
  setLoading (state) {
    state.isLoading = true
  },
  setProducts (state, products) {
    state.products = products
    state.productsCount = products.length
    state.isLoading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
