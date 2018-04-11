<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Products</h1>
        <p>A place where you can view products.</p>
      </div>
    </div>
    <RwProductList></RwProductList>
  </div>
</template>
<script>
import RwProductList from '@/components/ProductList.vue'
// import Vue from 'vue'
// import { Component } from 'vue-property-decorator'
// @Component({
//   name: 'Products',
//   components: {
//     RwProductList
//   }
// })
// export default class Products extends Vue {}
export default{
  name: 'rw-products',
  components: {
    RwProductList
  }
}
</script>
