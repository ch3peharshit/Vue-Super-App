<template>
  <nav-bar/>
  <food-list />
</template>

<script>
import FoodList from './components/FoodList.vue'
import NavBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {
    FoodList,
    NavBar,
}
}
</script>

<style>

</style>
