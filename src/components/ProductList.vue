<template>
<div>
  <div v-if="isLoading" class="article-preview">
      Loading products...
  </div>
  <div v-else>
    <div v-if="products.length === 0">No products are here... yet.</div>
        <!-- Using bootstrap-vue from now on -->
        <b-table striped hover :items="products" :fields="fields"></b-table>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'rw-product-list',
  props: {
    Id: {
      type: Number,
      required: false,
      default: 0
    },
    Name: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      fields: [{
        key: 'id',
        sortable: true
      },
      {
        key: 'name',
        sortable: true
      }],
      currentPage: 1
    }
  },
  computed: {
    ...mapGetters([
      'productsCount',
      'isLoading',
      'products'
    ])
  },
  mounted () {
    this.fetchProducts()
  },
  methods: {
    fetchProducts () {
      this.$store.dispatch('fetchProducts')
    }
  }
}
</script>
