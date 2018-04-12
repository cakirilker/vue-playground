import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { API_URL } from '@/common/config'
const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = API_URL
  },
  //   Not implemented authorization yet. Commented out for now.
  //   setHeader () {
  //       Vue.axios.defaults.headers.common['Authorization'] = `Token ${someService.getToken()}´
  //   },
  // .get() didn't work when I pass resource as parameter.
  query (resource) {
    return Vue.axios
      .get('http://localhost:5000/api/products')
      .catch((error) => {
        throw new Error(`ApiService ${error}`)
      })
  }
}
export default ApiService

export const ProductsService = {
  query () {
    return ApiService
      .query('products')
  }
}
