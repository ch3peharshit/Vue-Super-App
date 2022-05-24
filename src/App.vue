<template>
  <nav-bar/>
  <div class="w-full flex">
  <!-- <food-list /> -->
  <calender-app/>
  </div>
</template>

<script>
//import FoodList from './components/FoodList.vue'
import NavBar from './components/NavBar.vue'
import CalenderApp from './components/CalendarApp.vue'
export default {
  name: 'App',
  components: {
  //  FoodList,
    NavBar,
    CalenderApp
}
}
</script>

<style>

</style>
