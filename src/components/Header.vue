<template>
<nav class="navbar navbar-light">
<div class="container">
    <router-link class="navbar-brand"
        :to="{ name: 'Home' }">
        Welcome
    </router-link>
    <ul class="nav navbar-nav pull-xs-right">
    <li class="nav-item">
    <router-link class="nav-link"
            active-class="active"
            exact
            :to="{ name: 'Products' }">
            Products
    </router-link>
    </li>
    </ul>
</div>
</nav>
</template>
<script>
export default {
  name: 'RwHeader'
}
</script>
